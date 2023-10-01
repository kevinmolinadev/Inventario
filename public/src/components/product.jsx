import { Link } from "react-router-dom";
import { deleteProductByCode } from "../api";
const Product = ({ product, handle, value }) => {
    const { codigo_producto, nombre, existencia, precio, img } = product;
    const deleteProduct = async () => {
        await deleteProductByCode(codigo_producto);
        handle(!value);
    }
    return (
        <article className={` text-sm md:text-base 2xl:text-lg w-full min-h-full relative ${Number(existencia) ? "opacity" : "opacity-40"} rounded-lg bg-slate-200 overflow-hidden border-2`}>
            <div onClick={deleteProduct} className="absolute flex justify-center items-center top-0 right-0 mt-1 mr-1 shadow rounded-full cursor-pointer hover:bg-slate-500 transition-transform duration-300 hover:scale-110 shadow-white bg-slate-700 w-7 h-7 before:absolute before:content-['X'] before:scale-x-125  before:text-white " />
            <div className="w-full h-3/5 bg-white">
                <img className="w-full h-full object-cover object-center" src={img} alt={nombre} />
            </div>
            <div className="flex flex-col p-2 h-2/5 justify-around">
                <p className="whitespace-nowrap text-ellipsis">{nombre}</p>
                <p>Precio: {precio}$</p>
                <p className="">{Number(existencia) ? "En Stock" : "Sin Stock"}</p>
                <Link className="bg-slate-500 ml-auto text-white px-4 py-2 rounded-lg" to={`${codigo_producto}`} >Vender</Link>
            </div>
        </article>
    )
}
export default Product;