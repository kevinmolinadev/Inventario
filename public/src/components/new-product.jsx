import { useState } from "react";
import Form from "./form";
import Input from "./input";
import Button from "./button";
const NewProduct = () => {
    const [nombre, setNombre] = useState('');
    const [existencia, setExistencia] = useState(0);
    const [img, setImg] = useState('');
    const [price, setPrice] = useState(0);
    const sendForm = (e) => {
        e.preventDefault();
        const product = {
            nombre,
            existencia: Number(existencia),
            img,
            precio: Number(price)
        };
        console.log(product);
    }
    return (

        < Form event={sendForm} >
            <p className="text-3xl text-center font-semibold pb-4">Agregar nuevo producto</p>
            <Input title="Nombre" placeholder="Ingrese el nombre del producto" value={nombre} event={setNombre} />
            <Input title="Existencia" placeholder="Ingrese la cantidad de productos existentes" type="number" value={existencia} event={setExistencia} />
            <Input title="Imagen" placeholder="Ingrese la url del producto" type="url" value={img} event={setImg} />
            <Input title="Precio" placeholder="Ingrese el precio del producto" type="number" value={price} event={setPrice} />
            <Button className="bg-slate-500 hover:bg-slate-500/70 duration-300" title="Crear Producto" />
        </Form >
    )
}
export default NewProduct;