const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

// Ruta al archivo .env local
const envPath = path.join(__dirname, '..', '.env');

function loadEnv() {
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        let val = parts.slice(1).join('=').trim();
        // Quitar comillas si tiene
        if (val.startsWith('"') && val.endsWith('"')) {
          val = val.substring(1, val.length - 1);
        }
        process.env[key] = val;
      }
    });
  }
}

async function run() {
  loadEnv();

  const host = process.env.db_url || "localhost";
  const port = Number(process.env.db_port) || 3306;
  const user = process.env.db_user || "root";
  const password = process.env.db_pass || "";
  const database = process.env.db_name || "biopepht";

  console.log(`Conectando a MySQL en ${host}:${port} para crear la base de datos...`);

  let connection;
  try {
    // 1. Crear conexión básica para asegurar la existencia de la base de datos
    connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });

    console.log(`Creando base de datos ${database} si no existe (usando query)...`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
    await connection.end();
    connection = null;

    // 2. Conectarse directamente a la base de datos creada
    console.log(`Conectando directamente a la base de datos ${database}...`);
    connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
      database,
    });

    console.log("Creando tabla users...");
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        birth_date DATE NULL,
        cedula VARCHAR(10) UNIQUE NULL,
        email VARCHAR(255) UNIQUE NULL,
        phone VARCHAR(20) NULL,
        role ENUM('admin', 'lead') NOT NULL,
        password_hash VARCHAR(255) NULL,
        referral_code VARCHAR(50) UNIQUE NULL,
        referred_by VARCHAR(50) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `;
    await connection.execute(createTableQuery);

    // Migración para bases de datos existentes: Añadir referral_code
    try {
      await connection.execute("ALTER TABLE users ADD COLUMN referral_code VARCHAR(50) UNIQUE NULL AFTER password_hash");
      console.log("Columna referral_code añadida con éxito.");
    } catch (e) {
      // Ignorar si ya existe
    }

    // Migración para bases de datos existentes: Añadir referred_by
    try {
      await connection.execute("ALTER TABLE users ADD COLUMN referred_by VARCHAR(50) NULL AFTER referral_code");
      console.log("Columna referred_by añadida con éxito.");
    } catch (e) {
      // Ignorar si ya existe
    }

    const adminEmail = process.env.user_email || "cisnerosgranda14@gmail.com";
    const adminPass = process.env.user_pass || "cacG1404!";

    console.log(`Verificando usuario admin: ${adminEmail}`);
    const [rows] = await connection.execute(
      "SELECT id FROM users WHERE email = ? AND role = 'admin'",
      [adminEmail]
    );

    if (rows.length === 0) {
      console.log(`Hasheando contraseña...`);
      const hashedPassword = await bcrypt.hash(adminPass, 10);
      
      console.log(`Insertando admin en la tabla users...`);
      await connection.execute(
        `INSERT INTO users (name, email, role, password_hash) VALUES (?, ?, 'admin', ?)`,
        ["Administrador", adminEmail, hashedPassword]
      );
      console.log("Admin creado con éxito.");
    } else {
      console.log("El usuario administrador ya existe.");
    }

    console.log("Inicialización finalizada correctamente.");
  } catch (err) {
    console.error("Error durante la inicialización:", err);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

run();
