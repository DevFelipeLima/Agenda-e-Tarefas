import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from './botao';
import './informações.css'


const Informacoes = () => {
    const params = useParams()
    const history=useHistory()

    const btnvoltar =()=>{
        history.goBack()
    }
     //hook
    
    return ( 
        <>
            <div className='voltar-botao'>
                <Button onClick={btnvoltar}>Voltar</Button>
            </div>
            <div className="infoDetalhes">
            <h2>{params.tarefaTitle}</h2>
                <input className='anotarMsg' type="text" />

            </div>
        </>
     );
}
 
export default Informacoes;