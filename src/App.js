import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/Basket/Basket';
import Content from './components/content/Content';

import Header from './components/header/Header';
import { pizzaBlock, pizzasInBusket, Slider} from './components/Data/Data';





function App(){

  const[pizzas, setPizzas]=useState(pizzaBlock)
  const [pizzasBusket, setPizzasBusket]=useState(pizzasInBusket)
 

  return (
    <div className="wrapper">
      <Header />
      <Routes> 
        <Route path='/' element={<Content pizzas={pizzas} setPizzas={setPizzas}/>}></Route>
        <Route path="/basket" element={<Basket pizzasBusket={pizzasBusket} setPizzasBusket={setPizzasBusket}/>} />
       </Routes>
    
   
  </div>
  )
}
export default App;
