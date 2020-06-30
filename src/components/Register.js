import React, { useState } from 'react';
import {useGlobalState} from '../config/globalState';
import {setUserInSessionStorage} from '../services/authServices'
import useForm from '../config/useForm';
import validate from '../config/RegisterFormValidationRules';
import Input from './Input';

function Register({history}) {
    const {dispatch} = useGlobalState();
    const onSubmit = () => {
        setUserInSessionStorage(values.username);
        dispatch({type: "setLoggedInUser", data: values.username})
        history.push('/')
        console.log(values, errors);
        
    }
    const {errors, values, handleSubmit, handleChange} = useForm(onSubmit, validate);

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Input error={errors.username} type='text' label="Username" name='username' onChange={handleChange} value={values.username } />
            <Input error={errors.email} type='email' label="Email" name='email' onChange={handleChange} value={values.email} />
            <Input error={errors.password} type='password' label='Password' name='password' onChange={handleChange} value={values.password} />
            <input type='submit' value='Register' />
            </form>
        </div>
    )
}

export default Register;
