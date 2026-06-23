import { React, useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [SignupData, setSignupData] = useState({});
  let [error, setError] = useState({});

  const HandleChange = (e) => {
    let { name, value } = e.target;
    setSignupData({ ...SignupData, [name]: value });
  };

  let FormError = {};

  let HandleValidate = (SignupData) => {
    if (!SignupData.name) {
      FormError.name = "name is required";
    } else if (!SignupData.email) {
      FormError.email = "email is required";
    } else if (!SignupData.password) {
      FormError.password = "password is required";
    } else if (!SignupData.confirmPassword) {
      FormError.ConfirmPassword = "ConfirmPassword is required";
    } else {
      console.log("API data", SignupData);
    }
    setError(FormError);
    console.log(FormError);
  };

  let handleClick = (e) => {
    HandleValidate(SignupData);
    // console.log(error.name);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-112.5 p-8 bg-white border border-gray-200 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="w-full h-10 px-3 border border-gray-300 rounded-md outline-none focus:border-indigo-500"
              onChange={HandleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full h-10 px-3 border border-gray-300 rounded-md outline-none focus:border-indigo-500"
              onChange={HandleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="w-full h-10 px-3 border border-gray-300 rounded-md outline-none focus:border-indigo-500"
              onChange={HandleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              name="ConfirmPassword"
              className="w-full h-10 px-3 border border-gray-300 rounded-md outline-none focus:border-indigo-500"
              onChange={HandleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full h-11 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            onClick={handleClick}
          >
            Sign Up
          </button>
        </div>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
