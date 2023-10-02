import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newProduct } from "../api/products";
import Form from "./form";
import Input from "./input";
import Message from '../components/message';
import Button from "./button";
const NewProduct = ({ handle, value }) => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [codigo, setCodigo] = useState('');
    const [existencia, setExistencia] = useState(0);
    const [img, setImg] = useState('');
    const [price, setPrice] = useState(0);
    const sendForm = async (e) => {
        e.preventDefault();
        const product = {
            nombre,
            codigo_producto: codigo.toUpperCase(),
            existencia: Number(existencia),
            img,
            precio: price
        };
        newProduct(product);
        handle(!value);

    }
    return (
        <>
            < Form className="bg-transparent m-auto" event={sendForm} >
                <p className="text-3xl text-center font-semibold pb-4">Agregar nuevo producto</p>
                <Input title="Nombre" placeholder="Ingrese el nombre del producto" value={nombre} event={setNombre} />
                <Input title="Codigo" placeholder="Ingrese el codigo del producto" value={codigo} event={setCodigo} />
                <Input title="Existencia" placeholder="Ingrese la cantidad de productos existentes" type="number" value={existencia} event={setExistencia} />
                <Input title="Imagen" placeholder="Ingrese la url del producto" type="url" value={img} event={setImg} />
                <Input title="Precio" placeholder="Ingrese el precio del producto" type="number" value={price} event={setPrice} />
                <Button className="bg-slate-500 hover:bg-slate-500/70 duration-300" title="Crear Producto" />
            </Form >
            {value && <Message title="Ir a productos" event={()=>{handle(!value);navigate("/dashboard/products")}} message="El producto fue agregado exitosamente"/>}
        </>
    )
}
export default NewProduct;