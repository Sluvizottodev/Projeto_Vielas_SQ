import './style.css'
import { Header } from './navbarStyle'

export const Navbar = () => {
  return (
<> 
<Header>
        <div id="header">
            <nav>
                <div className="menu-icon">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
            <div className="texto-container">
                <h3>VIELAS</h3>
                <h3 className="login">login</h3>
                <div id="circulo"></div>
            </div>
        </div>
    </Header>
</>

  )
}
