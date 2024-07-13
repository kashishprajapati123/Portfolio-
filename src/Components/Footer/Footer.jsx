import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6"
import { Link } from "react-router-dom";
import { FaRegCopyright  } from "react-icons/fa";
import "./Footer.css"
function Footer() {
  return (
    <footer>
    <div className="footer-border">
      <div className="footer-rows">
        <div className="footer-row-1">
          <Link target="blank" to="https://x.com/Kashish90927918">
            <AiFillTwitterCircle className="footer-icons" />
          </Link>
          <Link target="blank" to="https://www.linkedin.com/in/kashish-prajapati-ab5064236/">
            < FaLinkedin  className="footer-icons" />
          </Link>
          <Link target="blank" to="https://github.com/kashishprajapati123">
            <FaGithubAlt className="footer-icons" />
          </Link>
        </div>

        <ul className="ul-items">
          <li>
            <Link className="li-item" to="/Aboutme">
              About Me
            </Link>
          </li>
          <li>
            <Link className="li-item" to="/Skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="li-item" to="/Portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="li-item" to="/Qualification">
              Education
            </Link>
          </li>
          <li>
            <Link id="" className="li-item" to="/Contactme">
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="Copyright">
        Copyright < FaRegCopyright /> 2024 Protfolio
        </div>
      </div>
     
    </div>
   
  </footer>
  )
}

export default Footer
