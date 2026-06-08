import mysql from "mysql2/promise";
import { initializeDatabase } from "./db-init";

// Dispara la inicialización de la base de datos de manera asíncrona
initializeDatabase().catch(err => {
  console.error("Fallo inicialización de base de datos en arranque:", err);
});

let internalPool: mysql.Pool | null = null;

function getPool(): mysql.Pool {
  if (!internalPool) {
    const host = process.env.db_url || "localhost";
    const port = Number(process.env.db_port) || 3306;
    const user = process.env.db_user || "root";
    const password = process.env.db_pass || "";
    const database = process.env.db_name || "biopepht";

    internalPool = mysql.createPool({
      host,
      port,
      user,
      password,
      database,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 10000,
      connectTimeout: 30000,
      maxIdle: 5,
      idleTimeout: 60000,
    });
  }
  return internalPool;
}

// Proxy para inicializar el pool bajo demanda (lazy-loading)
export const pool = new Proxy({} as mysql.Pool, {
  get(target, prop, receiver) {
    const p = getPool();
    const value = Reflect.get(p, prop, receiver);
    if (typeof value === "function") {
      return value.bind(p);
    }
    return value;
  },
});

export default pool;
