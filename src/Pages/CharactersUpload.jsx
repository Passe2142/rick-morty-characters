import {Form} from 'react-bootstrap'; 
import {useForm} from "react-hook-form"
import './SignUp.css'
import ButtonWithLoading from "../Components/ButtonWithLoading";
import Input from "../Components/Input";
import AlertNavigation from "../Components/AlertNavigation";
import { useState } from 'react';
import { create } from './../Services/charactersServices';


function CharacterUpload () {
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
        const document = await create(data)
        console.log("🚀 ~ file: CharactersUpload.jsx:34 ~ onSubmit ~ document:", document)
        setAlert(
            {
                variant: 'success',
                text:`Ha guardado al personaje correctamente!`,
                duration: 2000,
            });
        setLoading(false)

    } catch (error) {
        console.log(error)
        setLoading(false)

    }
}

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type="text"
                label="Nombre del Personaje"
                placeholder="Ingrese el nombre"
                register={{...register("character", {required: true})}} 
                errors={errors} name="character"
                />

                <Input type="text"
                label="Imagen"
                placeholder="Ingrese la imagen"
                register={{...register("image", {required: true})}} 
                errors={errors} name="image"
                />

                <Input type="text"
                label="Estado"
                placeholder="Ingrese el estado"
                register={{...register("status", {required: true})}} 
                errors={errors} name="status"
                />

                
                    <ButtonWithLoading type="submit" variant="primary" loading={loading}>
                        Guardar
                    </ButtonWithLoading>
            </Form>

        <AlertNavigation {...alert}/>

        </div>
        );
    }


export default CharacterUpload