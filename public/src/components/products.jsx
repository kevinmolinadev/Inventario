import { useEffect, useState } from "react";
import { Routes, Route, Link, useResolvedPath } from "react-router-dom";
import { getProducts } from "../api";
import Product from "./product";
import NewRecord from "./new-record";
import NewProduct from "./new-product";

const Products = () => {
    const [products, setProducts] = useState(null)
    const [change, setChange] = useState(false);
    useEffect(() => {
        (async () => {
            setProducts(await getProducts());
        })();
    }, [change]);
    return products && (
        products.length > 0 &&
        <Routes>
            <Route>
                <Route path="/"
                    element={
                        <>
                            <div className="flex w-full relative px-4 justify-between md:justify-center items-center">
                                <h2 className="text-xl lg:text-2xl font-semibold py-4">Productos</h2>
                                <Link className="px-2 py-1 md:p-2 md:px-6 md:absolute md:right-0 md:mr-4 rounded-full bg-slate-500 text-white" to="new-product">Agregar Producto</Link>
                            </div>
                            <div className="flex-grow md:overflow-y-auto">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-4 p-4 ">
                                    {
                                        products.map(product => <Product value={change} handle={setChange} key={product.codigo_producto} product={product} />)
                                    }

                                </div>
                            </div>
                        </>
                    } />
                <Route path="/:code" element={<NewRecord />} />
                <Route path="/new-product" element={<NewProduct value={change} handle={setChange} />} />
            </Route>
        </Routes>
    )
}
export default Products;