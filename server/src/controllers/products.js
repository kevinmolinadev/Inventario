import { connectionSQL, SQL, procedures } from "../db";

export const getProducts = async (req, res) => {
    try {
        const connection = await connectionSQL();
        const result = await connection.request().query(procedures.getAllProducts);
        res.json(result.recordset);
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const getProduct = async (req, res) => {
    const { code } = req.params;
    console.log(code);
    try {
        const connection = await connectionSQL();
        const result = await connection.request()
            .input('codigo_producto', SQL.VarChar, code)
            .query(procedures.getProductByCode);
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const newProduct = async (req, res) => {
    const { codigo_producto, nombre, existencia, precio, img } = req.body;
    if (codigo_producto == null || nombre == null || existencia == null) {
        return res.status(400).json({ msg: "Complete todos los campos" })
    }
    try {
        const connection = await connectionSQL();
        await connection.request()
            .input('codigo_producto', SQL.VarChar, codigo_producto)
            .input('nombre', SQL.VarChar, nombre)
            .input('existencia', SQL.Int, existencia)
            .input('precio', SQL.VarChar, precio)
            .input('img', SQL.VarChar, img)
            .query(procedures.insertProduct);
        res.json('Producto agregado');
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const updateProduct = async (req, res) => {
    const { codigo_producto, nombre, existencia, precio, img } = req.body;
    if (codigo_producto == null || nombre == null || existencia == null) {
        return res.status(400).json({ msg: "Complete todos los campos" })
    }
    try {
        const connection = await connectionSQL();
        await connection.request()
            .input('codigo_producto', SQL.VarChar, codigo_producto)
            .input('nombre', SQL.VarChar, nombre)
            .input('existencia', SQL.Int, existencia)
            .input('precio', SQL.VarChar, precio)
            .input('img', SQL.VarChar, img)
            .query(procedures.updateProduct);
        res.json('Producto actualizado');
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}

export const deleteProduct = async (req, res) => {
    const { code } = req.params;
    try {
        const connection = await connectionSQL();
        const result = await connection.request()
            .input('codigo_producto', SQL.VarChar, code)
            .query(procedures.deleteProductByCode);
        res.json(`El producto con codigo ${code} fue eliminado`);
    } catch (error) {
        res.status(500).json({ msg: "Estoy cansado jefe" })
        res.send(error.message);
    }
}