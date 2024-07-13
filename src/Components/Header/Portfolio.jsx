import { useTypewriter } from "react-simple-typewriter";
// import Contactme from "./Components/Header/Contactme";
import { MdOutlineWavingHand } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
// import Footer from "../Footer/Footer";
import Qualification from "./Qalification";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Contactme from "./Contactme";
import "./Portfolio.css";
import { Link } from "react-router-dom";

// import { Cursor, useTypewriter } from "react-simple-typewriter";
function Portfolio() {
  const [typewiter] = useTypewriter({
    words: ["KASHISH", "KASHISH", "KASHISH"],
    loop: {},
    typeSpeed: 130,
    deleteSpeed: 100,
  });
  const [typewiterss] = useTypewriter({
    words: ["End", "End", "End"],
    loop: {},
    typeSpeed: 130,
    deleteSpeed: 100,
  });
  return (
    <>
     <div className="Portfolio">
      <div className="Portfolio-section">
        <div className="Portfolio-Text">
          <h1 className="anim">
            <MdOutlineWavingHand className="hello" />
            Hi<span>!</span>
            <br /> I&#39;m <span>{typewiter}</span>
            <br /> Front-<span>{typewiterss}</span>
            <br />
            Web <span>Developer</span>
          </h1>
          <button>
            <Link id="Contact" className="navbar-item anim" to="/Contactme">
              Contact Me
            </Link>
          </button>
        </div>
        <div className="img-div">
          <img className="my-img anim" src="https://cdn.pixabay.com/photo/2018/08/10/11/08/blog-3596548_640.png" alt="" />
        </div>
      </div>
      <div className="Project">
        <h1 className="anim">My Projects</h1>
        <div className="Projectes">
          <div className="Projects-Detail animationss">
            <h4>PortFolio</h4>
            <p>
            A portfolio Website is an Online Platform Or Online Resume that allow
            you to hire me for Front Web Development. The Portfolio Website Provides an Information 
           About Me, About My Skills, About My Qualifications and Many More Way to Contact Me.
            </p>
            <div>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://github.com/kashishprajapati123/Portfolio-/tree/main/src"
                >
                  React
                </Link>
              </button>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://github.com/kashishprajapati123/Portfolio-/tree/main/src"
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
                  to="https://github.com/kashishprajapati123/Portfolio-"
                >
                  Code <FaGithub className="project-icons" />
                </Link>
              </button>
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="https://meripahchan.netlify.app/"
                >
                  Live Demo <HiExternalLink className="project-icons" />
                </Link>
              </button>
            </div>
          </div>
          <img
            className="iframe animation"
            src="./portfolio.png"
            alt=""
          />
        </div>
        <div className="Projectes">
          <img
            className="iframe animationss"
            src="./pokemon.png"
            alt=""
          />
          <div className="Projects-Detail animation">
            <h4>Pokémon Website</h4>
            <p>
            The Pokémon Details Fetching Website is an online platform that offers comprehensive information about various Pokémon through APIs. This single-page application is developed using React. For more details, please visit my Pokémon Website at YourPortfolioLink.com.
            </p>
            <div>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://pokeapi.co/api/v2/pokemon"
                >
                  React ApI
                </Link>
              </button>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://github.com/kashishprajapati123/API_Project/tree/main/src"
                >
                Tailwind Css
                </Link>
              </button>
            </div>
            <div className="Lower-button">
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="https://github.com/kashishprajapati123/API_Project"
                >
                  Code <FaGithub className="project-icons" />
                </Link>
              </button>
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="https://pokemonpoke.netlify.app/"
                >
                  Live Demo <HiExternalLink className="project-icons" />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="Projectes">
          <div className="Projects-Detail animationss">
            <h4>Artify</h4>
            <p>
            The Artify is an online platform that provides images of various subjects through an API. This single-page application is developed using React.
            </p>
            <div>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://pixabay.com/api/?key=38752569-c3faa11ca13f059b35696c7a0"
                >
                  React API
                </Link>
              </button>
              <button>
                <Link
                  className="Project-buttons"
                  target="blank"
                  to="https://github.com/kashishprajapati123/API_Project/tree/main/src"
                >
                Tailwind CSS
                </Link>
              </button>
            </div>
            <div className="Lower-button">
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="https://github.com/kashishprajapati123/API-Image-Project"
                >
                  Code <FaGithub className="project-icons" />
                </Link>
              </button>
              <button>
                <Link
                  className="Project-button"
                  target="blank"
                  to="https://artifyweb.netlify.app/"
                >
                  Live Demo <HiExternalLink className="project-icons" />
                </Link>
              </button>
            </div>
          </div>

          <img
            className="iframe animation"
            src="./image.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <Aboutme/>
    <Qualification/>
    <Skills/>
    <Contactme/>
    </>
   
  );
}

export default Portfolio;
