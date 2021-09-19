import React from 'react'
import Tarefa from './tarefa';


const Tarefas=({tarefas, quandoConcluir, quandoRemover})=>{
return (
    <>
        {tarefas.map((tarefa)=> (
        <Tarefa tarefa={tarefa} quandoConcluir={quandoConcluir} quandoRemover={quandoRemover} />
        ))}
    </>
)
};

export default Tarefas