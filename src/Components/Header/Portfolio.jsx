import { useTypewriter } from "react-simple-typewriter";
// import Contactme from "./Components/Header/Contactme";
import { MdOutlineWavingHand } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Footer from "../Footer/Footer";

// import Typed from 'react-typed'
import "./Portfolio.css";
import { Link } from "react-router-dom";
// import { Cursor, useTypewriter } from "react-simple-typewriter";
function Portfolio() {
  const [typewiter] = useTypewriter({
    words: ["KASHISH", "KASHISH", "KASHISH"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 100,
  });
  const [typewiterss] = useTypewriter({
    words: ["End", "End", "End"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 100,
  });
  return (
    <div className="Portfolio">
      <div className="Portfolio-section">
        <div className="Portfolio-Text">
          <h1>
            <MdOutlineWavingHand className="hello" />
            Hi<span>!</span>
            <br /> I&#39;m <span>{typewiter}</span>
            <br /> Front-<span>{typewiterss}</span>
            <br />
            Web <span>Developer</span>
          </h1>
          <button>
            <Link id="Contact" className="navbar-item" to="/Contactme">
              Contact Me
            </Link>
          </button>
        </div>
        <div className="img-div">
          <img className="my-img" src="https://cdn.pixabay.com/photo/2021/03/15/07/03/programmers-6096322_640.png" alt="" />
        </div>
      </div>
      <div className="Project">
        <h1>My Projects</h1>
        <div className="Projectes">
          <div className="Projects-Detail">
            <h4>Hading Of The Web</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              facilis odio repellendus, sunt dicta pariatur ad. Sapiente ad
              voluptatem itaque temporibus consequatur aliquid obcaecati.
              Corrupti officia illum expedita magni doloribus?
            </p>
            <div>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://reactnative.dev/"
                >
                  React
                </Link>
              </button>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://developer.mozilla.org/en-US/docs/Web/CSS"
                >
                  CSS
                </Link>
              </button>
            </div>
            <div className="Lower-button">
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="https://github.com/kashishprajapati123"
                >
                  Code <FaGithub className="project-icons" />
                </Link>
              </button>
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="http://localhost:5173/Portfolio"
                >
                  Live Demo <HiExternalLink className="project-icons" />
                </Link>
              </button>
            </div>
          </div>
          <img
            className="iframe"
            src="https://images.pexels.com/photos/20211569/pexels-photo-20211569/free-photo-of-melbourne-baby-photographer-emma-pender-photography.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="Projectes">
          <img
            className="iframe"
            src="https://images.pexels.com/photos/19746165/pexels-photo-19746165/free-photo-of-cliff-on-seashore-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <div className="Projects-Detail">
            <h4>Hading Of The Web</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              facilis odio repellendus, sunt dicta pariatur ad. Sapiente ad
              voluptatem itaque temporibus consequatur aliquid obcaecati.
              Corrupti officia illum expedita magni doloribus?
            </p>
            <div>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://reactnative.dev/"
                >
                  React
                </Link>
              </button>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://developer.mozilla.org/en-US/docs/Web/CSS"
                >
                  CSS
                </Link>
              </button>
            </div>
            <div className="Lower-button">
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="https://github.com/kashishprajapati123"
                >
                  Code <FaGithub className="project-icons" />
                </Link>
              </button>
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="http://localhost:5173/Portfolio"
                >
                  Live Demo <HiExternalLink className="project-icons" />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="Projectes">
          <div className="Projects-Detail">
            <h4>Hading Of The Web</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              facilis odio repellendus, sunt dicta pariatur ad. Sapiente ad
              voluptatem itaque temporibus consequatur aliquid obcaecati.
              Corrupti officia illum expedita magni doloribus?
            </p>
            <div>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://reactnative.dev/"
                >
                  React
                </Link>
              </button>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://developer.mozilla.org/en-US/docs/Web/CSS"
                >
                  CSS
                </Link>
              </button>
            </div>
            <div className="Lower-button">
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="https://github.com/kashishprajapati123"
                >
                  Code <FaGithub className="project-icons" />
                </Link>
              </button>
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="http://localhost:5173/Portfolio"
                >
                  Live Demo <HiExternalLink className="project-icons" />
                </Link>
              </button>
            </div>
          </div>

          <img
            className="iframe"
            src="https://images.pexels.com/photos/11517781/pexels-photo-11517781.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
      </div>
     
      <Footer />
    </div>
  );
}

export default Portfolio;
