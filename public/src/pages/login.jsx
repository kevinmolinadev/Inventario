import { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import Form from '../components/form'
import Input from '../components/input';
import Button from '../components/button';
import {getUser, newUser} from '../api';
const Login = ({ handle }) => {
    sessionStorage.setItem('isLogin', 'false');
    const navigate = useNavigate();
    const [isCreateAcount, setIsCreateAcount] = useState(false);
    const [usuario, setUsuario] = useState('');
    const [apellido, setApellido] = useState('');
    const [clave, setClave] = useState('');
    const sendForm = async (e) => {
        e.preventDefault();
        console.log("bueno");
        try {
            const user = await getUser(usuario);
            if (user.clave === clave) {
                saveSesion(user);
                handle(true)
                navigate("/dashboard/products");
            }
        } catch (error) {
            console.error(error);
            alert("usuario o contraseña incorrecto")
        }
    }
    const sendNewUser = async (e) => {
        e.preventDefault();
        try {
            const user = {
                nombre: usuario,
                apellido,
                clave
            }
            await newUser(user);
            saveSesion(user);
            handle(true);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    }
    const saveSesion = (user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('isLogin', 'true');
    }
    return (
        <section className="h-screen flex relative">
            <div className="absolute md:relative md:w-1/2 h-full">
                <img className='w-full h-full object-cover' src="https://media.wired.com/photos/625070b91aa975b72e029965/master/w_1600%2Cc_limit/Build-a-PC-Guide-1249969209.jpg" alt="img" />
            </div>
            <div className='relative z-10 flex-grow flex justify-center items-center' >
                <Form className="bg-black/30 text-white" event={isCreateAcount ? sendNewUser : sendForm}>
                    <p className="font-prata text-xl font-medium text-center mb-4 md:text-2xl lg:text-3xl">Inicio de sesion</p>
                    <Input title="Nombre" placeholder="Ingrese su nombre" value={usuario} event={setUsuario} />
                    {isCreateAcount &&
                        <Input title="Apellido" placeholder="Ingrese su apellido" value={apellido} event={setApellido} />
                    }
                    <Input title="Contraseña" placeholder="Ingrese su contraseña" type="password" value={clave} event={setClave} />
                    <Button title={isCreateAcount ? "Crear Cuenta" : "Inicias Sesion"} />
                    <p className='mt-4 text-right'>{!isCreateAcount ? "Nuevo por aqui: " : "Ya estas registrado: "} <span className='font-semibold cursor-pointer' onClick={() => setIsCreateAcount(!isCreateAcount)}>{isCreateAcount ? "Iniciar Sesion" : "Crear Cuenta"}</span></p>
                </Form>
            </div>
        </section>
    )
}
export default Login;