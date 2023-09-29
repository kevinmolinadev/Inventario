import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getProducts } from "../api/products";
import Product from "./product";
import NewProduct from "./new-product";

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log('entramos');
        (async () => {
            setProducts(await getProducts())
        })();
    }, []);
    return (
        products.length > 0 &&
        <>
            <div className="flex relative justify-center items-center">
                <h2 className="text-2xl font-semibold py-4">Productos</h2>
                <Link className="p-2 px-6 absolute right-0 mr-4 rounded-full bg-slate-500 text-white" to="new-product">Agregar Producto</Link>
            </div>
            <Routes>
                <Route>
                    <Route path=""
                        element={
                            <div className="grid grid-cols-5 gap-4 p-4">
                                {
                                    products.map(product => <Product key={product.codigo_producto} product={product} />)
                                }
                            </div>} />
                    <Route path="/:code" element={<div>Aqui estar el producto</div>} />
                    <Route path="/new-product" element={<NewProduct/>} />
                </Route>
            </Routes>
        </>
    )
}
export default Products;