import { connectionSQL, SQL, procedures } from "../db";

export const getAllRecords = async (req, res) => {
    const connection = await connectionSQL();
    try {
        const result = await connection.request().query(procedures.getAllRecords);
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const newRecords=async(req,res)=>{
    const { fecha_venta, producto_id, cantidad, precio_unitario, user_id } = req.body;
    const connection = await connectionSQL();
    try {
        await connection.request()
            .input('date', SQL.Date, fecha_venta)
            .input('product_id', SQL.Int, producto_id)
            .input('user_id', SQL.Int, user_id)
            .input('count', SQL.Int, cantidad)
            .input('price', SQL.Int, precio_unitario)
            .query(procedures.insertRegistro);
        res.json('Registro agregado');
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } finally {
        connection.close();
    }
}