// import React from 'react'
import { Link } from "react-router-dom";
import "./Aboutme.css";
import { SiOnlyoffice } from "react-icons/si";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdSimCardDownload } from "react-icons/md";

function Aboutme() {
  return (
    <div className="About-Section">
      <h3 className="anim">About Me</h3>
      <p className="anim">My Introduction</p>
      <div className="About-Content">
        <img  className="img animationss"
          src="./port.jpeg"
          alt=""
        />
      
        <div className="About-Content-1 animation">
          <div className="About-Content-2">
            <div className="About-Content-3">
              <SiOnlyoffice className="Icons" />
              <p>Experience</p>
              <p className="peragraph">Fresher</p>
            </div>
            <div className="About-Content-3">
              <MdOutlineIncompleteCircle className="Icons" />
              <p>Completed </p>
              <p className="peragraph">3 Project</p>
            </div>
            <div className="About-Content-3">
              <BiSupport className="Icons" />
              <p>Support</p>
              <p className="peragraph">Online 24/7</p>
            </div>
          </div>
         
          <p className="About-Me">
          Passionate front-end web developer skilled in HTML, CSS, Tailwind, Bootstrap, JavaScript, React, Git and Github. Eager to create engaging user experiences and collaborate on innovative projects.
          </p>
          <button>
            {" "}
            <Link id="CV" className="C-V" target="blank" to="https://app.luminpdf.com/viewer/668f8f25240ceed3a543fc4a">
            Download CV<MdSimCardDownload className="Icons"/>
            </Link>
          </button>
          </div>
        </div>
      </div>
  );
}
export default Aboutme;
