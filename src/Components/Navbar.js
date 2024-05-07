import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
// import { useState } from "react";

const Navbar = (props) => {
  const isLoggedIn=props.isLoggedIn;
  const setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className="flex  justify-evenly">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
      </Link>

      <nav className="">
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="#">About</Link>
          </li>

          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex ml-5 mr-3 gap-3">
        { !isLoggedIn && 
          <Link to="/login">
            <button>Login</button>
          </Link>
        }

        { !isLoggedIn &&
          <Link to="/signup">
            <button >SignUp</button>
          </Link>
        }

        { isLoggedIn &&
          <Link to="/">
            <button onClick={()=>{
              setIsLoggedIn(false);
              toast.success("logged Out");
            }}>LogOut</button>
          </Link>
        }

        {   isLoggedIn &&
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
