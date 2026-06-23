import { cloneElement, React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [loginData, setLoginData] = useState({});
  let [error, setError] = useState({});
  let navigate = useNavigate();

  let HandleChange = (e) => {
    let { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  let FormError = {};

  let HandleValidate = (loginData) => {
    if (!loginData.username) {
      FormError.username = "Username is required";
    } else if (!loginData.password) {
      FormError.password = "Password is required";
    } else {
      console.log("API data", loginData);
      navigate("/Panel");
    }
    setError(FormError);
  };
  let handleClick = (e) => {
    HandleValidate(loginData);
  };

  console.log(error.username);
  console.log(error.password);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="m-auto">
          <div className="card w-100 h-150 border-4 border-indigo-500 shadow-lg shadow-amber-50 rounded-md">
            <h1 className="Card-header text-3xl font-bold text-center mb-8">
              Login
            </h1>
            <div className="space-y-4">
              <div className="card-body w-80 h-100 m-auto mt-8">
                <div className="username mb-4">
                  <label htmlFor="username">UserName</label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="w-full border border-gray-300 rounded-md h-8 px-2"
                    placeholder="Abc@123"
                    onChange={HandleChange}
                  />
                </div>

                <div className="password mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    className="w-full border border-gray-300 rounded-md h-8 px-2"
                    onChange={HandleChange}
                  />
                </div>
                <div className="my-5">
                  <button
                    className="w-full border border-gray-300 rounded-md h-8 bg-indigo-500 text-white hover:bg-indigo-600 transition duration-300"
                    onClick={handleClick}
                  >
                    Submit
                  </button>
                </div>

                <div className="other-links">
                  <Link to="/signup" className="text-red-500 hover:underline">
                    Do not have any account 🥺
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
