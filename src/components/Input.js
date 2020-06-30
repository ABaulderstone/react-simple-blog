import React from 'react';

function Input(props) {
    const divStyles = {
        display: 'grid',
        width: '100vw',
    }
    const inputStyles = {
        width: '70vw',
        margin: '0.5em'
    }
    const labelStyles = {
        fontSize: '1.2em'
    }
    const warningStyles = {
        margin: '0.5em',
        color: 'red'
    }

    const {type, name, onChange, value, error, label} = props;

    
    return (
        <div style={divStyles}>
        <label style={labelStyles}>{label}</label>
        <input style={inputStyles} type={type} name={name} onChange={onChange} value={value || ''}></input>
        {error && <p style={warningStyles}>{error}</p>}
        </div>
    )
}

export default Input;
