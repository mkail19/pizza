// import { SortLabelSvg } from "../../svg/svg"

import { useState } from "react";

const ContentTop = ({items, onClickCategories, onFilter}) => { 
  const [active, setActive] = useState('')
  const onSelectCategories = (index) => {
    onClickCategories(index);
    setActive(index);
    onFilter(index)
  }
    return(
        
            <div className="categories">
              <ul>
              <li className={active === '' ? 'active' : ''}
              onClick={() => onSelectCategories('')}
              >Все</li>
                {items.map((item, index) => (
                  <li className={active === index ? 'active' : ''}
                  key={item}
                  onClick={() => onSelectCategories(index)}>
                    {item}
                    </li>
                ))}
               
              </ul>
            </div>
         
         
    );
};
export default ContentTop