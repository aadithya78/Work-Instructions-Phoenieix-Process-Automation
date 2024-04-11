import { Link } from "react-router-dom";
import logo from "./phoenix.jpg"
import { useHistory } from "react-router-dom";

import "./Navbar.css"
const Navbar = () => {
  const history = useHistory();
 return (
 <nav className="navbar navbar-expand-lg p-2 navbar-dark bg-dark shadow rounded">
 <div className="container">
 <Link className="navbar-brand" to="/home">
 <img className="phoimg" src={logo} alt="Phoenix Image" height="40px" width="40px" ></img> Phoenix Automation
 <div className="surname">
   <p> Concepts to Reality </p></div>
 </Link>    
 <div>
 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
 <li className="nav-item mt-1">
 <Link className="btn btn-secondary btn-sm me-2" to="/add">
 Add
 </Link>
 <Link className="btn btn-secondary btn-sm me--2" to="/" >
 Back
 </Link>
 </li>
 </ul>
 </div>
 </div>
 </nav>
 );
};
export default Navbar;