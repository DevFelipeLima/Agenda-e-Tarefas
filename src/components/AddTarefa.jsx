import React, { useState } from 'react'
import './AddTarefa.css'
import Button from './botao.jsx'


const AddTask = ({quandoAddTarefa}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange =(e)=>{
        setInputData(e.target.value) //encontra o valor digitado no input e seta no useState
    }
    const quandoClicar=()=>{
        quandoAddTarefa(inputData)
        setInputData('')
    }

    return (
        <>
        <div className='add-t-container'>
            <input 
                onChange={handleInputChange} 
                value={inputData}
                className='add-t-input' 
                type="text" 
            />
            <div className="add-t-space-cont">
                <Button onClick={quandoClicar}>Adicionar</Button>
            </div>

        </div>
    
    </>
    )   
}
 
export default AddTask;