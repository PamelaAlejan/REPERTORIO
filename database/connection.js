// conexion con pg

import 'dotenv/config'
import pg from 'pg';

const { Pool } = pg;

const connectionString = process.env.CONNECTION_STRING

export const pool = new Pool({
    allowExitOnIdle: true,
    connectionString
});

try {
    await pool.query("SELECT NOW()")
    console.log("conexion a postgres ok")
} catch (error) {
    console.log(error)
}

// probar con : node database/connection.js