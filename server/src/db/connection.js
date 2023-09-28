import sql from "mssql";
import config from "../config";

const DB = {
    server: config.db_server,
    authentication: {
        type: 'default',
        options: {
            userName: config.db_user,
            password: config.db_password,
        },
    },
    options: {
        port: 1433,
        database: config.db_database,
        trustServerCertificate: true
    },
};

export const connectionSQL = async () => {
    try {
        const connection = await sql.connect(DB);
        console.log("Conexion existosa");
        return connection;
    } catch (error) {
        console.log("Error al conectar: " + error);
    }
};

export const SQL = sql;