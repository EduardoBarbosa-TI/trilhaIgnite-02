import './styles/global.css';

import { Habit } from "./components/Habit";

function App() {

  return (
    <>
      <Habit completed={3}/>
      <Habit completed={5}/>
      <Habit completed={4}/>
      <Habit completed={30}/>
    </>
    
  )
}

export default App

// Componente : Reaproveitar / isolar 
// Propriedade: Uma informação enviada pra modificar um componente visual ou comportamental