/* eslint-disable react/prop-types */
import {Form} from 'react-bootstrap'; 

function Input ({label, type='text', name, register, placeholder, errors, children}){

        
    return(
    <>
    <Form.Group className="mb-3" controlId={name}>
        <Form.Label className='input'>{label}</Form.Label>
            <Form.Control 
            type={type}
            className="input"
            placeholder={placeholder} 
            {...register} 
            />

        {errors && errors[name]?.type === "required" && (
        <Form.Text className="text-muted">El campo es obligatorio.</Form.Text>)}
    {children && children}
    </Form.Group>   
    </>
    )
}

export default Input;