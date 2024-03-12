
import '../Styles/Navbar.css';

import ImagenLogo from '../Images/logo1.jpg'

import Fade from 'react-awesome-reveal';

function MiComponente() {
    return (
<Fade>

  

            <nav>
                <div id='div-Logo'>     
                    <img src={ImagenLogo} id='ImagenLogo' alt="ImagenFondo" />
                    <p>La Profe Educativa</p>
                </div>

                <div id='navbar-div'>
                    <a href="#">Home</a>
                    <a href="#">About me</a>
                    <a href="#">Products</a>
                    <a href="#">Contact me</a>
                    <span></span>
                </div>
            </nav>
        


        </Fade>
    );
  }
  
  export default MiComponente;