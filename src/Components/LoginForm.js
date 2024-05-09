import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast/headless";

const LoginForm=({setIsLoggedIn}) =>{
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setshowPassword] = useState(false);
  const navigate=useNavigate();

  function changeHandler(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function SubmitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In Successfully");
    navigate("/dashboard")
  }
  return (
    <form onSubmit={SubmitHandler}>
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          placeholder="Enter Your Email Address"
          onChange={changeHandler}
          name="email"
        />
      </label>

      <label>
        <p>
          Password <sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          placeholder="Enter Your Password"
          onChange={changeHandler}
          name="password"
        />

        <span onClick={()=>setshowPassword((prev)=>!prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>


        <Link to="#">
          <p>
            Forgot Password
          </p>
        </Link>
      </label>

      <button>
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
