import React from 'react';
import CounterUseState from './components/CounterUseState';
import StepUseStatePrev from './components/StepUseStatePrev';
import ThemeToggleUseState from './components/ThemeToggleUseState';
import SimpleFormUseState from './components/SimpleFormUseState';
import ToDoStoringArraysUseState from './components/ToDoStoringArraysUseState';
import ManagingObjectsUseState from './components/ManagingObjectsUseState';


function App() {
  

  return ( 
    <div className="App">   
            <CounterUseState />
            <StepUseStatePrev />
            <ThemeToggleUseState />
            <SimpleFormUseState />
            <ToDoStoringArraysUseState />
            <ManagingObjectsUseState />
        </div>
   )
}

export default App
