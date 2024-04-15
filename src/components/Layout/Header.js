import React, {useState} from "react";
import { Fragment } from "react";
import mainheaderImage from "../../assests/headerBanner.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = (props) => {

  const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    const handleClick =()=> {
        setClick(!click);
    }

    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

  return (
    <Fragment>
      <header className={classes.header}> 
        <h1>Food Ordering App</h1>
        <ul className={click ? classes["nav-menu active"] : classes["nav-menu"]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/adminlogin">Admin</Link>
            </li>
                
        </ul>
        
        <div className={classes["hamburger"]} onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{color: "#fff"}} />
            ) : (
                <FaBars size={20} style={{color: "#fff"}} /> 
            )}   
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainheaderImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
