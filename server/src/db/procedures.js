export const procedures = {
    //Product
    getAllProducts: 'exec sp_GetAllProducts',
    getProductByCode:'exec sp_GetProduct @code=@codigo_producto',
    insertProduct: 'exec sp_InsertProduct @code=@codigo_producto, @name=@nombre, @exist=@existencia,@price=@precio, @img=@img;',
    updateProduct: 'exec sp_UpdateProduct @code=@codigo_producto, @name=@nombre, @exist=@existencia,@price=@precio, @img=@img;',
    deleteProductByCode:'exec sp_DeleteProduct @code=@codigo_producto',
    //User
    getAllUsers: 'exec GetAllUsers',
    getUser: 'exec GetUser @id=@id_user',
    insertUser:'exec InsertUser @nombre=, @apellido=, @clave=;',
    //Registro
    insertRegistro:''
}