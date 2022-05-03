import React from "react";
import style from './Input.module.css'
import PropTypes from "prop-types";
function Input  ({ type, name, pattern, title, ...props }) {
   return <input 
        type={type}
        name={name}
        pattern={pattern}
        title={title} 
        className={style.input}
        required
        {...props}
    />
}
export default Input;
Input.propTypes= {
    text: PropTypes.string,
    name: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
}