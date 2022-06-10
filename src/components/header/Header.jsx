import { Link } from 'react-router-dom'
import { HeaderSvg } from '../svg/svg'
import Button from '../../button/Button'
import logo from './images/pizza.png'

function Header(){
    return (
        <div className="header">
          <div className="container">
            <Link to='/'>
              <div className="header__logo">
                <img  src={logo} alt="" />
                <div>
                  <h1>React Pizza</h1>
                  <p>самая вкусная пицца во вселенной</p>
                </div>
              </div>
            </Link>
       
        <div className="header__cart">
          <Link to='/basket'>
            <Button className="button--cart">
              <span>520 ₽</span>
              <div className="button__delimiter" />
              <HeaderSvg />
              <span>3</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
    )
}

export default Header