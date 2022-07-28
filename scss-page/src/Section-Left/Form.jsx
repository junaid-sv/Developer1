import React from 'react';
import '../Section-Left/Form.scss';

const Form = (props) => {
    return (
        <>
            <div className='enter-data'>
                <div className='input-data'>
                    <div className="input-field"> {props.text} </div>
                    <div className="input-icon"> <i className={props.icon}></i> {props.icon_name} </div>
                </div>
                <span>{props.label}</span>
            </div>
        </>
    );
}

export default Form;