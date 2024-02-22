// import React from 'react'
import { Link } from "react-router-dom";
import "./Aboutme.css";
import { SiOnlyoffice } from "react-icons/si";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { MdSimCardDownload } from "react-icons/md";
import Footer from "../Footer/Footer";
function Aboutme() {
  return (
    <div className="About-Section">
      <h3>About Me</h3>
      <p>My Introduction</p>
      <div className="About-Content">
        <img
          src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_640.jpg"
          alt=""
        />
        <div className="About-Content-1">
          <div className="About-Content-2">
            <div className="About-Content-3">
              <SiOnlyoffice className="Icons" />
              <p>Experience</p>
              <p className="peragraph">0 Years</p>
            </div>
            <div className="About-Content-3">
              <MdOutlineIncompleteCircle className="Icons" />
              <p>Completed </p>
              <p className="peragraph">2 Projects</p>
            </div>
            <div className="About-Content-3">
              <BiSupport className="Icons" />
              <p>Support</p>
              <p className="peragraph">Online 24/7</p>
            </div>
          </div>
         
          <p className="About-Me">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            laboriosam perspiciatis a cupiditate nemo numquam tempora ipsam.
            Libero, quo vel!
          </p>
          <button>
            {" "}
            <Link id="CV" className="C-V" target="blank" to="https://drive.google.com/file/d/1b71LiZCj-NTGeyYiQrKZCJi2hsWZFbfL/view?usp=sharing">
              Download CV <MdSimCardDownload className="Icons"/>
            </Link>
          </button>
          </div>
        </div>
        <Footer/>
      </div>
 
  );
}
export default Aboutme;
