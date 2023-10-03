/* eslint-disable react/prop-types */
import {Form} from 'react-bootstrap'; 
import {useForm} from "react-hook-form"
import './SignUp.css'
import * as auth  from '../Services/authService'
import ButtonWithLoading from "../Components/ButtonWithLoading";
import Input from "../Components/Input";
import AlertNavigation from "../Components/AlertNavigation";
import { messageLogin } from '../Utils/errorMessage';
import { useState } from 'react';


function SignIn ({setSignIn}) {
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
        const response = await auth.login(data);
        console.log("🚀 ~ file: SignUp.jsx:17 ~ onSubmit ~ response:", response)
        setAlert(
            {
                variant: 'success',
                text:`Ha ingresado correctamente, bienvenide ${response?.name}!`,
                duration: 2000,
                link: "/"
            });
        setSignIn(true)
        setLoading(false)

    } catch (error) {
        console.log(error)
        setAlert(
            {
            variant:'danger',
            text: messageLogin[error.code] || 'Ha ocurrido un error.',
            duration: 0,
            }
        )
        setLoading(false)

    }
}

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                        Ingresar
                    </ButtonWithLoading>
            </Form>

        <AlertNavigation {...alert}/>

        </div>
        );
    }


export default SignIn