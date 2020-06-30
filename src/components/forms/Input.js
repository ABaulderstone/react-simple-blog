import React, {useState} from 'react';

function Input(props) {

    const [touched, setTouched] = useState(false);

    const {styles, label, error, ...rest} = props;
    const {divStyles,labelStyles,inputStyles,warningStyles} = styles;
    
    return (
        <div style={divStyles}>
        <label style={labelStyles}>{label}</label>
        <input style={inputStyles}  {...rest} onBlur={() => setTouched(true)}></input>
        {error && touched && <p style={warningStyles}>{error}</p>}
        </div>
    )
}

export default Input;
