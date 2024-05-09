import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignupForm({setIsLoggedIn}) {


  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    password: "",
    consfirmPassWord: "",
  });

  const [showPassword, setshowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    if(FormData.password!==FormData.consfirmPassWord){
      toast.error("password is not matching")
      return;
    }
    setIsLoggedIn(true);
    toast.success("account created");
    const accountData={
      ...FormData
    };
    console.log("printing account data")
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>

        <form onSubmit={submitHandler}>
          <div>
            <label>
              <p>
                First Name <sup>*</sup>
              </p>
              <input
                required
                type="text"
                name="firstName"
                onChange={changeHandler}
                placeholder="Enter your First Name"
                value={FormData.firstName}
              />
            </label>

            <label>
              <p>
                Last Name <sup>*</sup>
              </p>
              <input
                required
                type="text"
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter your First Name"
                value={FormData.lastName}
              />
            </label>
          </div>

          <label>
            <p>
              Email Address <sup>*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter your Email Address"
              value={FormData.email}
            />
          </label>

          <div>
            <label>
              <p>
                password <sup>*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                placeholder="Enter your paswword"
                value={FormData.password}
              />

              <span onClick={() => setshowPassword((prev) => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>
            <label>
              <p>
                Confirm Password <sup>*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="consfirmPassWord"
                onChange={changeHandler}
                placeholder="Confirm your password"
                value={FormData.consfirmPassWord}
              />
              <span onClick={() => setshowPassword((prev) => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>
          </div>


          <button>
            Create Account
          </button>


        </form>
      </div>
    </div>
  );
}

export default SignupForm;
