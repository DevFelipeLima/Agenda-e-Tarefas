import React from 'react'
import Tarefa from './tarefa';


const Tarefas=({tarefas, quandoConcluir})=>{
return (
    <>
        {tarefas.map((tarefa)=> (
        <Tarefa tarefa={tarefa} quandoConcluir={quandoConcluir} />
        ))}
    </>
)
};

export default Tarefas