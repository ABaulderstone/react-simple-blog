import React, {useState} from 'react';

function TextArea(props) {
    const [touched, setTouched] = useState(false);

    const {styles, label, error, ...rest} = props;
    const {divStyles,labelStyles,textAreaStyles,warningStyles} = styles;
    
    return (
        <div style={divStyles}>
        <label style={labelStyles}>{label}</label>
        <textarea style={textAreaStyles}  {...rest} onBlur={() => setTouched(true)}></textarea>
        {error && touched && <p style={warningStyles}>{error}</p>}
        </div>
    )
}

export default TextArea;
