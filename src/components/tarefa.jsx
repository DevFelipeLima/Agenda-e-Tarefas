import React from 'react';
import{CgClose, CgInfo} from 'react-icons/cg'
import { useHistory } from 'react-router-dom';

import "./tarefa.css"

const Tarefa = ({tarefa, quandoConcluir, quandoRemover}) => {

    const history = useHistory()
    const quandoClicarAbas =()=>{
        history.push(`/${tarefa.title}`)
    }

    return (
            <div 
                className='task-container'    
                style={tarefa.completed ? {borderLeft: '6px solid rgb(61, 181, 236)'} : {}} 
            >
                <div className ='titulo' onClick={()=>quandoConcluir(tarefa.id)}>
                {tarefa.title}
                </div>
                <div className='botoesContainer'>
                    <button className='removerTarefa'onClick={()=>quandoRemover(tarefa.id)}>
                    <CgClose />
                    </button>
                    <button className='informacoesTarefa' onClick={quandoClicarAbas}>
                    <CgInfo />
                    </button>


                </div>
            </div>
    )
}
// return (<div className='task-container'>{Tarefa.title}</div>);
 
export default Tarefa;