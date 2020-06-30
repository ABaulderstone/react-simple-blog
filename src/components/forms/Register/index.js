import React, { useState } from 'react';
import {useGlobalState} from '../../../config/globalState';
import {setUserInSessionStorage} from '../../../services/authServices'
import useForm from '../useForm';
import validate from './validationRules';
import Input from '../Input';
import inputStyles from './styles';

function Register({history}) {
    const {dispatch} = useGlobalState();
    const onSubmit = () => {
        setUserInSessionStorage(values.username);
        dispatch({type: "setLoggedInUser", data: values.username})
        history.push('/')
        
    }
    const {errors, values, handleSubmit, handleChange, buttonDisabled} = useForm(onSubmit, validate);
    
    function disableButton() {
        return Object.keys(errors).length > 0 ? 'disabled' : '';
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <Input styles={inputStyles} error={errors.username} type='text' label="Username" name='username' onChange={handleChange} value={values.username || ''} />
            <Input styles={inputStyles} error={errors.email} type='email' label="Email" name='email' onChange={handleChange} value={values.email || ''} />
            <Input styles={inputStyles} error={errors.password} type='password' label='Password' name='password' onChange={handleChange} value={values.password || ''} />
            <input disabled={disableButton()} type='submit' value='Register' />
            </form>
        </div>
    )
}

export default Register;
