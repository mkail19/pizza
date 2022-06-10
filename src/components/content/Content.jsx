// import { type } from '@testing-library/user-event/dist/type'
import { useState } from 'react'
import SliderSlick from '../../commons/slider/Slider'
import ContentTop from "./contentTop/contentTop"
import PizzaBlock from "./PizzaBlock/PizzaBlock"
import Sort from './sort/Sort'

function Content({pizzas, setPizzas}){
  const [categories, setCategories]= useState(null);
  const [sort, setSort]= useState({
    type: 'rating'
  });

  const[filter, setFilter] = useState(pizzas)

  

  
  const onClickCategories = (index) => {
    setCategories(index);
  };
  const onClickSort = (type) => {
    
    setSort(type)
    const sortedPizzas = pizzas.sort ((a,b) => a[type.type]?.localeCompare(b[type.type]));
    setPizzas(sortedPizzas);
    console.log(sortedPizzas);
  };

  const onFilter = (categoryItem) => {
    if (categoryItem === '') {
      setFilter(pizzas)
      return
    }
    const result = pizzas.filter((currentItem) => {
      return currentItem.category === categoryItem
    })
    setFilter(result);
  };



    return (
        <div className="content">
           <div className="container">
              <SliderSlick />
       
        <div className="content__top">
          <ContentTop onFilter={onFilter} onClickCategories={onClickCategories} items={['Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']}/>
          <Sort 
          activeSortType={sort.type}
          onClickSort={onClickSort}
          items={[
            {name: 'популярности',type: 'rating'},
            {name: 'Цене',type: 'price'},
            {name: 'алфавит',type: 'name'},
            ]}/>
        </div>
          
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {filter.map((pizza) => (
              <PizzaBlock 
                key={pizza.id}
                {...pizza}
                pizzas={pizzas} 
                pizza={pizza} 
                setPizzas={setPizzas}/>
          ))}</div>
          
        </div>
      </div>
    )
}
export default Content