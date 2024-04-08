import './style.module.css'

export const Navbar = () => {
  return (
<> 
<header>
        <div id="header">
            <nav>
                <div className="menu-icon">
                    <div className={styles.bar}></div>
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
    </header>
</>

  )
}
