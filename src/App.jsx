import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'

import Tarefas from './components/tarefas.jsx'
import AddTask from './components/AddTarefa.jsx';
import "./App.css";




const App =() => {

  const [tarefas, setTarefas] = useState([
      {
        id: '1',
        title:'estudando react',
        completed: false,
      },
      {
        id: '2',
        title:'Ler livros',
        completed: true,
      },
  ]);
  const quandoConcluir =(tarefaId)=>{
      const novatarefa = tarefas.map(tarefa=>{
        if (tarefa.id ===tarefaId) return{... tarefa, completed: !tarefa.completed}
        return tarefa

      })
      setTarefas(novatarefa)
  }


  const qunadoAdicionar = (tarefaTitle) =>{
    const novaTarefas = [... tarefas, {
            title: tarefaTitle,
            id: uuidv4(),
            completed: true,
    }]
    
    setTarefas(novaTarefas)
  }

  return (
    <>
      <div className='container'>
        <AddTask quandoAddTarefa={qunadoAdicionar} />
        <Tarefas tarefas={tarefas} quandoConcluir={quandoConcluir}/>
        
      </div>
    </>
  )
}
export default App;