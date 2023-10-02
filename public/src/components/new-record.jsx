import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "./form";
import Input from "./input";
import Button from "./button";
import Message from "./message";
import { getProductByCode, newRecord } from "../api";
const NewRecord = () => {
    const { code } = useParams();
    const [message,setMessage]=useState(false);
    const [product, setProduct] = useState(null);
    const [cantidad, setCantidad] = useState(1);
    useEffect(() => {
        (async () => {
            setProduct(await getProductByCode(code));
        })();
    }, [])
    const sendForm = async (e) => {
        e.preventDefault();
        const record = {
            fecha_venta: new Date().toLocaleDateString().split('/').reverse().map(item => item < 10 ? `0${item}` : item).join('-'),
            producto_id: Number(product.id),
            cantidad: Number(cantidad),
            precio_unitario: Number(product.precio),
            user_id: JSON.parse(sessionStorage.getItem('user')).id
        }
        await newRecord(record);
        setMessage(!message);

    }
    return product && (
        <>
            < Form className="bg-transparent  m-auto shadow" event={sendForm} >
                <div>
                    <img className="w-full lg:w-3/5 lg:m-auto" src={product.img} alt={product.nombre} />
                    <div className=" flex flex-wrap justify-between lg:text-xl py-4">
                        <p className="w-full md:w-auto">Productos en almacen: {product.existencia}</p>
                        <p>Precio: {product.precio}$</p>
                    </div>
                </div>
                <p className="text-xl lg:text-2xl text-center font-semibold pb-4">Vender Producto</p>
                <Input className="text-black" title="Cantidad" placeholder="Ingrese la cantidad de productos a vender" type="number" value={cantidad} event={setCantidad} />
                <Button className="text-black bg-slate-500 hover:bg-slate-500/70 duration-300" title="Procesar venta" />
            </Form >
            {message && <Message title="OK" event={()=>setMessage(!message)} message="Transaccion procesada de manera exitosa!" />}
        </>
    )
}
export default NewRecord;