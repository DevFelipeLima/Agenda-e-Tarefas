import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tarefas from './components/tarefas.jsx'
import AddTask from './components/AddTarefa.jsx';
import Cabeçalho from './components/cabeçalho.jsx';
import Informacoes from './components/informações.jsx';
import Calendario from './components/calendario.jsx';


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
        completed: false,
      }, // useState = hook
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
            completed: false,
    }]
    setTarefas(novaTarefas)
  }

  const quandoRemover=(tarefaId)=>{
    const novaTarefas = tarefas.filter(tarefa => tarefa.id != tarefaId)

    setTarefas(novaTarefas)
  }

  return (
    <Router>
      <div className='container'>
        <Cabeçalho />
        <Route path='/' exact render={()=>{
          return (
          <>
          <AddTask quandoAddTarefa={qunadoAdicionar} />
          <Tarefas 
                tarefas={tarefas} 
                quandoConcluir={quandoConcluir}
                quandoRemover={quandoRemover} 
                />
          </>
        )}}/>
      <Route path ='/:tarefaTitle' exact component={Informacoes}/>
      </div>
      <div className='CalendarioCont'>
        <Calendario />
      </div>
    </Router>
  )
}
export default App;