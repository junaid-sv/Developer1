import React from 'react';
import './Form.scss';

const Form = (props) => {
    return (
        <>
            <form action="#">
                <div className='left-input-field'>
                    <input type="text" className='left-input-field' placeholder={props.placeholder}/>
                    <div className={props.class}> <a href="/"><i className={props.icon}></i> {props.name}</a></div>
                    <label htmlFor="self-introduction">{props.label}</label>
                </div>
            </form>
        </>
    );
}
export default Form;