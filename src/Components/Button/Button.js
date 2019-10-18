import React from 'react';
import { Link } from 'react-router-dom';



const Button = (props) => {

    return (
        <Link className={`btn rounded-0 px-5 py-3 text-uppercase ${props.className}`} role = "button" to="/" target = "_parent">{props.name}</Link>
    )
}

export default Button;