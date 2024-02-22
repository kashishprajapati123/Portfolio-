// import { useState } from "react";

// import "./Navbar.css";
// import { IoReorderThree } from "react-icons/io5";
// import { ImCross } from "react-icons/im"
// import { Link, NavLink } from "react-router-dom";
// function Navbar() {
//   const [MenuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div>
//         <Link id="Port" to="./Portfolio">
//           Portfolio
//         </Link>
//       </div>
//       <ul id={MenuOpen ? "Open" : ""} className="navbar-items">
//         <li>
//           <NavLink className="navbar-item" to="./Aboutme">
//             About Me
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className="navbar-item" to="./Skills">
//             Skills
//           </NavLink>
//         </li>
//         <li className="portfoliohide">
//           <NavLink className="navbar-item" id="Portfolio" to="./Portfolio">
//             Portfolio
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className="navbar-item" to="./Education">
//             Education
//           </NavLink>
//         </li>
//         <li>
//           <NavLink id="Contacts" className="navbar-item" to="./Contactme">
//            Contact Me
//           </NavLink>
//         </li>
//       </ul>
//       <div className="Menu">
//         {MenuOpen ? (
//           <span>
//             <ImCross
//               className="Cross"
//               onClick={() => setMenuOpen(!MenuOpen)}
//             />
//           </span>
//         ) : (
//           <span>
//             <IoReorderThree
//               className="Threelines"
//               onClick={() => setMenuOpen(!MenuOpen)}
//             />
//           </span>
//         )}
//       </div>
//     </nav>
//   );
// }
// export default Navbar;





import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import { ImCross } from "react-icons/im"
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar" style={{ height: menuOpen ? '330px' : '90px' }}>
            <div>
                <Link id="Port" to="/">
                    Portfolio
                </Link>
            </div>
            <ul id={menuOpen ? "Open" : ""} className="navbar-items">
            <li className="portfoliohide">
                    <NavLink className="navbar-item" id="Portfolio" to="./Portfolio">
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navbar-item" to="./Aboutme">
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navbar-item" to="./Skills">
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navbar-item" to="./Qualification">
                    Qualification
                    </NavLink>
                </li>
                <li>
                    <NavLink id="Contacts" className="navbar-item" to="./Contactme">
                        Contact Me
                    </NavLink>
                </li>
            </ul>
            <div className="Menu">
                {menuOpen ? (
                    <span>
                        <ImCross
                            className="Cross"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                    </span>
                ) : (
                    <span>
                        <IoReorderThree
                            className="Threelines"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                    </span>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
