import { connectionSQL, SQL, procedures } from "../db";

export const getUsers = async (req, res) => {
    try {
        const connection = await connectionSQL();
        const result = await connection.request().query(procedures.getAllUsers);
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const connection = await connectionSQL();
        const result = await connection.request()
            .input('id_user', SQL.Int, id)
            .query(procedures.getUser);
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getUserByName = async (req, res) => {
    const { name } = req.params;
    const connection = await connectionSQL();
    try {
        const result = await connection.request()
            .input('name', SQL.VarChar, name)
            .query(procedures.getUserByName);
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } finally {
        connection.close();
    }
}

export const newUser = async (req, res) => {
    const { nombre, apellido, clave } = req.body;
    const connection = await connectionSQL();
    try {
        await connection.request()
            .input('nombre', SQL.VarChar, nombre)
            .input('apellido', SQL.VarChar, apellido)
            .input('clave', SQL.VarChar, clave)
            .query(procedures.insertUser);
        res.json('Usuario agregado');
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } finally {
        connection.close();
    }
};