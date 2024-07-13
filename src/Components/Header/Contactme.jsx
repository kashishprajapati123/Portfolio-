
import "./Contacte.css";
function Contactme() {

  return (
    <>
    <div className="Contact-section">
      <img className="animationss"
        src="./Contact-img.pnj.png"
        alt=""
      />

      <div className="Contact-form-section animation">
        <h3>Get In Touch</h3>
        <form action="https://formspree.io/f/xdoqzglg" method="POST">
          <input name="First-Name" type="text" placeholder="First Name" autoComplete="off" required />
          <input name="Last-Name" type="text" placeholder="Last Name" autoComplete="off" required /> <br />
          <input name="Email" type="text" placeholder="Email Address" autoComplete="off" required />
          <input name="Phone-Number" type="text" placeholder="Phone No." autoComplete="off" required />
          <br />
          <textarea name="Message" cols="30" rows="10" placeholder="Message" autoComplete="off" required></textarea> <br />
          <button id="Contactss">              Submit
           </button>
        </form>
      </div>
    </div>
    </>
    
  );
}

export default Contactme;
