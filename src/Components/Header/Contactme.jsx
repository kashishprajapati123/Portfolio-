// import React from 'react'
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./Contacte.css";
function Contactme() {
  return (
    <>
    <div className="Contact-section">
      <img
        src="https://cdn.pixabay.com/photo/2017/02/25/23/52/connections-2099068_640.png"
        alt=""
      />

      <div className="Contact-form-section">
        <h3>Get In Touch</h3>
        <form action="">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" /> <br />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone No." />
          <br />
          <textarea cols="30" rows="10" placeholder="Message"></textarea> <br />
          <button>
            <Link id="Contactss" className="navbar-item" to="/Contactme">
              Submit
            </Link>
           </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}

export default Contactme;
