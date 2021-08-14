import React from 'react';
import './botao.css'

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick}className='botaoadd'>
            {children}
        </button>

    )
    
}
 
export default Button;