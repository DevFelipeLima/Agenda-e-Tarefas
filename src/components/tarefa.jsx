import React from 'react';
import "./tarefa.css"

const Tarefa = ({tarefa, quandoConcluir}) => {
    return (
            <div 
                className='task-container'    
                style={tarefa.completed ? {borderLeft: '6px solid rgb(61, 181, 236)'} : {}} 
            >
                <div className ='titulo' onClick={()=>quandoConcluir(tarefa.id)}>
                {tarefa.title}
                </div>
            </div>
    )
}
// return (<div className='task-container'>{Tarefa.title}</div>);
 
export default Tarefa;