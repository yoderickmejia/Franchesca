
import '../Styles/Footer.css';
import ImagenFondo from '../Images/123.png';

import Fade from 'react-awesome-reveal';

import '../Styles/Navbar.css';
function footer() {
    return (
<Fade>

 

            <footer>
            <img src={ImagenFondo} id='ImagenFondo' alt="ImagenFondo" />
                </footer> 


 </Fade>
    );
  }
  
  export default footer;