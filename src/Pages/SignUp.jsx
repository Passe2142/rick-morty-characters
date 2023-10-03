import { useState } from "react";
import {Form} from 'react-bootstrap'; 
import {useForm} from "react-hook-form"
import './SignUp.css'
import * as auth  from '../Services/authService'
import { messageRegistry } from "../Utils/errorMessage";
import AlertNavigation from "../Components/AlertNavigation";
import ButtonWithLoading from "../Components/ButtonWithLoading";
import Input from "../Components/Input";


function SignUp () {
const{
        register,
        handleSubmit,
        formState: { errors} ,
    } = useForm( {mode:"onChange"})

const [alert, setAlert] = useState({
        variant:"",
        text:"",
        duration: 0,
        link:""
})

const [loading, setLoading] = useState(false)

const onSubmit = async (data) => {
    setLoading(true)
    try {
        console.log(data);
        await auth.register(data);
        setAlert(
        {
            variant: 'success',
            text:'Usuario creado correctamente!',
            duration: 2000,
            link: "/SignIn"
        });
        setLoading(false)
    } 
    catch (error) {
        console.log(error)
        if (error.code==='auth/email-already-in-use'){
            setAlert(
            {
            variant:'danger',
            text: messageRegistry[error.code] || 'Ha ocurrido un error.',
            duration: 0,
        }
            )
        }
        setLoading(false)
    }
}


    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type="text"
                label="Nombre"
                placeholder="Ingrese su nombre"
                register={{...register("nombre", {required: true})}} 
                errors={errors} name="name"
                />
                
                <Input type="text"
                label="Apellido"
                placeholder="Ingrese su apellido"
                register={{...register("apellido")}} 
                errors={errors} name="name"
                />

                <Input type="email"
                label="Email"
                placeholder="Ingrese su email"
                register={{...register("email", {required: true})}} 
                errors={errors} name="email"
                />

                <Input type="password"
                label="Contraseña"
                placeholder="Ingrese su contraseña"
                register={{...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength:12,
                    })}} 
                errors={errors}
                name="password"
                >
                    <Form.Text className="text-muted">
                        {errors?.password?.type === "minLength" && (<div>Introducir como minimo 6 caracteres.</div>)}
                        {errors?.password?.type === "maxLength" && (<div>Introducir como maximo 12 caracteres.</div>)}
                    </Form.Text>
                </Input>
                
                    <ButtonWithLoading type="submit" variant="primary" loading={loading}>
                        Registrarse
                    </ButtonWithLoading>
            </Form>

        <AlertNavigation {...alert}/>
        
        </div>
        );
    }


export default SignUp