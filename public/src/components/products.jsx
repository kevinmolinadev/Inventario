import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Product from "./product";

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        (async () => {
            setProducts(await getProducts())
        })();
    }, []);
    return (
        products.length > 0 &&
        <>
            <h2 className="text-2xl font-semibold text-center py-4">Productos</h2>
            <div className="grid grid-cols-5 gap-4 p-4">
                {
                    products.map(product => <Product key={product.codigo_producto} product={product} />)
                }
            </div>
        </>
    )
}
export default Products;