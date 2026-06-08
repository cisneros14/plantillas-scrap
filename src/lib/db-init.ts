import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

let isInitialized = false;

export async function initializeDatabase() {
  if (isInitialized) return;

  const host = process.env.db_url || "localhost";
  const port = Number(process.env.db_port) || 3306;
  const user = process.env.db_user || "root";
  const password = process.env.db_pass || "";
  const database = process.env.db_name || "biopepht";

  let connection: mysql.Connection | null = null;
  try {
    // 1. Conectarse a MySQL para asegurar que la base de datos existe
    connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
    await connection.end();
    connection = null;

    // 2. Conectarse directamente a la base de datos específica
    connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
      database,
    });

    // 3. Crear la tabla de usuarios
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
    } catch (e) {
      // Ignorar si ya existe
    }

    // Migración para bases de datos existentes: Añadir referred_by
    try {
      await connection.execute("ALTER TABLE users ADD COLUMN referred_by VARCHAR(50) NULL AFTER referral_code");
    } catch (e) {
      // Ignorar si ya existe
    }

    // 4. Sembrar el administrador por defecto
    const adminEmail = process.env.user_email || "cisnerosgranda14@gmail.com";
    const adminPass = process.env.user_pass || "cacG1404!";

    const [rows]: any = await connection.execute(
      "SELECT id FROM users WHERE email = ? AND role = 'admin'",
      [adminEmail]
    );

    if (rows.length === 0) {
      console.log(`Sembrando usuario administrador: ${adminEmail}`);
      const hashedPassword = await bcrypt.hash(adminPass, 10);
      
      await connection.execute(
        `INSERT INTO users (name, email, role, password_hash) VALUES (?, ?, 'admin', ?)`,
        ["Administrador", adminEmail, hashedPassword]
      );
      console.log("Usuario administrador sembrado con éxito.");
    }

    isInitialized = true;
    console.log("Base de datos inicializada de forma exitosa.");
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.end();
      } catch (err) {
        // Ignorar si ya estaba cerrada
      }
    }
  }
}
