import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/form'
import Input from '../components/input';
import Button from '../components/button';
const Login = ({ handle}) => {
    const navigate = useNavigate();
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
        handle(true);
        navigate("/dashboard");
    }
    return (
        <section className="h-screen flex">
            <div className="w-1/2 h-full">
                <img className='w-full h-full object-cover' src="https://media.wired.com/photos/625070b91aa975b72e029965/master/w_1600%2Cc_limit/Build-a-PC-Guide-1249969209.jpg" alt="img" />
            </div>
            <div className='flex-grow self-center' >
                <Form event={sendForm}>
                    <p className="font-prata text-xl font-medium text-center mb-4 md:text-2xl lg:text-3xl">Inicio de sesion</p>
                    <Input title="Nombre" placeholder="Ingrese su nombre" value={nombre} event={setNombre} />
                    <Input title="Existencia" placeholder="Ingrese la cantidad de productos existentes" type="number" value={existencia} event={setExistencia} />
                    <Input title="Imagen" placeholder="Ingrese la url del producto" type="url" value={img} event={setImg} />
                    <Input title="Precio" placeholder="Ingrese el precio del producto" type="number" value={price} event={setPrice} />
                    <Button title="Crear Producto" />
                </Form>
            </div>
        </section>
    )
}
export default Login;