import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/form'
import Input from '../components/input';
import Button from '../components/button';
import { getUser } from '../api/users';
const Login = ({ handle }) => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const sendForm = async (e) => {
        e.preventDefault();
        try {
            const user = await getUser(usuario);
            if (user.clave === clave) {
                handle(true)
                navigate("/dashboard");
            }
        } catch (error) {
            console.error(error);
            alert("usuario o contraseña incorrecto")
        }
    }
    return (
        <section className="h-screen flex">
            <div className="w-1/2 h-full">
                <img className='w-full h-full object-cover' src="https://media.wired.com/photos/625070b91aa975b72e029965/master/w_1600%2Cc_limit/Build-a-PC-Guide-1249969209.jpg" alt="img" />
            </div>
            <div className='flex-grow self-center' >
                <Form event={sendForm}>
                    <p className="font-prata text-xl font-medium text-center mb-4 md:text-2xl lg:text-3xl">Inicio de sesion</p>
                    <Input title="Usuario" placeholder="Ingrese su usuario" value={usuario} event={setUsuario} />
                    <Input title="Contraseña" placeholder="Ingrese su contraseña" type="password" value={clave} event={setClave} />
                    <Button title="Iniciar sesion" />
                </Form>
            </div>
        </section>
    )
}
export default Login;