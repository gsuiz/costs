
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default () => (
    <footer>
        <ul className='iconsList'>
          <li className='iconsList__item'><FaFacebook/></li>
          <li className='iconsList__item'><FaInstagram/></li>
          <li className='iconsList__item'><FaLinkedin/></li>
        </ul>
        <p><span>Costs</span> © 2025</p>
    </footer>
)