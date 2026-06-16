import { Link } from "react-router-dom";
import { useState } from "react";
import LineThroughText from "../../components/LineThroughText";
import { HugeiconsIcon } from '@hugeicons/react'
import { Mail01Icon, UserIcon } from '@hugeicons/core-free-icons'
import InputGroup from "../../components/ui/InputGroup";

const RegisterPage = () => {

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  return (
    <>
      <div className="auth-wrapper">
        <div className="">
          <h1 className="text-3xl">Create Account</h1>
        </div>

        <div className="border rounded py-2 flex gap-2 justify-center items-center cursor-pointer hover:bg-white hover:text-black transition duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="currentColor" fill="none">
              <defs></defs>
              <path fill="currentColor" d="M12,1.25 C17.937,1.25 22.75,6.063 22.75,12 C22.75,17.937 17.937,22.75 12,22.75 C6.063,22.75 1.25,17.937 1.25,12 C1.25,6.063 6.063,1.25 12,1.25 Z M2.75,12 C2.75,17.109 6.891,21.25 12,21.25 C17.109,21.25 21.25,17.109 21.25,12 C21.25,6.891 17.109,2.75 12,2.75 C6.891,2.75 2.75,6.891 2.75,12 Z M7.75,12 C7.75,14.347 9.653,16.25 12,16.25 C14.091,16.25 15.83,14.74 16.184,12.75 L12,12.75 C11.586,12.75 11.25,12.414 11.25,12 C11.25,11.586 11.586,11.25 12,11.25 L17,11.25 C17.414,11.25 17.75,11.586 17.75,12 C17.75,15.176 15.176,17.75 12,17.75 C8.824,17.75 6.25,15.176 6.25,12 C6.25,8.824 8.824,6.25 12,6.25 C13.588,6.25 15.026,6.894 16.066,7.934 C16.359,8.227 16.359,8.702 16.066,8.995 C15.773,9.288 15.298,9.288 15.005,8.995 C14.235,8.225 13.174,7.75 12,7.75 C9.653,7.75 7.75,9.653 7.75,12 Z"></path>
          </svg>
          <span>Google</span>
          
        </div>

        <LineThroughText text="or continue with email" />

        <form className="space-y-4" action="">
          <InputGroup label="Name" icon={<HugeiconsIcon icon={UserIcon} size={20} />} placeholder="John Doe" />
          
          <InputGroup label='Email' type='email' placeholder='Enter your email' icon={<HugeiconsIcon icon={Mail01Icon} size={20} color="currentColor" />}  />

          <div className="flex flex-col gap-2">
            <label className="input-label" htmlFor="">Password</label>
            <div className="relative">
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  color="currentColor"
                  fill="none"
                >
                  <path
                    d="M12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5V9.2998C18.7869 10.716 19.75 12.7454 19.75 15C19.75 19.2802 16.2802 22.75 12 22.75C7.71979 22.75 4.25 19.2802 4.25 15C4.25 12.7454 5.21314 10.716 6.75 9.2998V6.5C6.75 3.6005 9.10051 1.25 12 1.25ZM12 8.75C8.54822 8.75 5.75 11.5482 5.75 15C5.75 18.4518 8.54822 21.25 12 21.25C15.4518 21.25 18.25 18.4518 18.25 15C18.25 11.5482 15.4518 8.75 12 8.75ZM10 14C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15C9 14.4477 9.44771 14 10 14ZM14 14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15C13 14.4477 13.4477 14 14 14ZM12 2.75C9.92893 2.75 8.25 4.42893 8.25 6.5V8.2168C9.3613 7.60111 10.6396 7.25 12 7.25C13.3604 7.25 14.6387 7.60111 15.75 8.2168V6.5C15.75 4.42893 14.0711 2.75 12 2.75Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <input
                className="w-full border border-gray-200 py-2 px-8 outline-0 focus:border-primary transition duration-150 rounded"
                type={showPassword ? "text" : "password"}
              />
              <div onClick={toggleShowPassword} className="absolute top-1/2 right-2 transform -translate-y-1/2">
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    color="currentColor"
                    fill="none"
                  >
                    <defs></defs>
                    <path
                      fill="currentColor"
                      d="M12.281,4.25 C14.852,4.25 17.055,5.381 18.761,6.713 C20.468,8.046 21.73,9.62 22.436,10.609 L22.489,10.684 C22.742,11.036 23.031,11.438 23.031,12 C23.031,12.562 22.742,12.964 22.489,13.316 L22.436,13.391 C21.73,14.38 20.468,15.954 18.761,17.287 C17.055,18.619 14.852,19.75 12.281,19.75 C9.711,19.75 7.507,18.619 5.802,17.287 C4.094,15.954 2.833,14.38 2.127,13.391 L2.073,13.316 C1.82,12.964 1.531,12.562 1.531,12 C1.531,11.438 1.82,11.036 2.073,10.684 L2.127,10.609 C2.833,9.62 4.094,8.046 5.802,6.713 C7.507,5.381 9.711,4.25 12.281,4.25 Z M3.348,11.481 C3.185,11.71 3.107,11.821 3.061,11.91 C3.031,11.967 3.031,11.982 3.031,11.998 L3.031,12 L3.031,12.002 C3.031,12.018 3.031,12.033 3.061,12.09 C3.107,12.179 3.185,12.29 3.348,12.519 C4.008,13.445 5.174,14.894 6.725,16.105 C8.277,17.317 10.163,18.25 12.281,18.25 C14.4,18.25 16.285,17.317 17.838,16.105 C19.389,14.894 20.554,13.445 21.215,12.519 C21.378,12.29 21.456,12.179 21.502,12.09 C21.531,12.033 21.531,12.018 21.531,12.003 L21.531,12.002 L21.531,12 L21.531,11.998 L21.531,11.997 C21.531,11.982 21.531,11.967 21.502,11.91 C21.456,11.821 21.378,11.71 21.215,11.481 C20.554,10.555 19.389,9.106 17.838,7.895 C16.285,6.683 14.4,5.75 12.281,5.75 C10.163,5.75 8.277,6.683 6.725,7.895 C5.174,9.106 4.008,10.555 3.348,11.481 Z M12.281,15.75 C10.21,15.75 8.531,14.071 8.531,12 C8.531,9.929 10.21,8.25 12.281,8.25 C14.352,8.25 16.031,9.929 16.031,12 C16.031,14.071 14.352,15.75 12.281,15.75 Z M10.031,12 C10.031,13.243 11.039,14.25 12.281,14.25 C13.524,14.25 14.531,13.243 14.531,12 C14.531,10.757 13.524,9.75 12.281,9.75 C11.039,9.75 10.031,10.757 10.031,12 Z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    color="currentColor"
                    fill="none"
                  >
                    <defs></defs>
                    <path
                      fill="currentColor"
                      d="M8.176,13.885 C6.813,13.303 5.631,12.497 4.662,11.681 L2.812,13.531 C2.666,13.677 2.474,13.751 2.282,13.751 L2.281,13.751 C2.089,13.751 1.897,13.678 1.751,13.531 C1.458,13.238 1.458,12.763 1.751,12.47 L3.555,10.665 C2.392,9.502 1.725,8.517 1.658,8.416 C1.428,8.071 1.52,7.606 1.865,7.376 C2.21,7.146 2.675,7.239 2.905,7.584 C2.943,7.64 6.763,13.25 12.281,13.25 C17.799,13.25 21.619,7.64 21.657,7.583 C21.888,7.239 22.354,7.146 22.698,7.376 C23.042,7.606 23.135,8.071 22.906,8.415 C22.838,8.516 22.171,9.501 21.007,10.665 L22.812,12.47 C23.105,12.763 23.105,13.238 22.812,13.531 C22.666,13.677 22.474,13.751 22.282,13.751 L22.281,13.751 C22.089,13.751 21.897,13.678 21.751,13.531 L19.901,11.681 C18.932,12.496 17.749,13.303 16.386,13.884 L17.424,15.614 C17.637,15.969 17.522,16.43 17.167,16.643 C17.046,16.715 16.913,16.75 16.782,16.75 C16.527,16.75 16.279,16.62 16.138,16.386 L14.94,14.389 C14.106,14.616 13.218,14.749 12.281,14.749 L12.281,14.75 C11.345,14.75 10.456,14.617 9.622,14.39 L8.424,16.386 C8.283,16.62 8.035,16.75 7.78,16.75 C7.649,16.75 7.516,16.716 7.395,16.643 C7.04,16.43 6.925,15.969 7.138,15.614 Z"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>

          <button className="bg-primary text-white w-full py-3 rounded cursor-pointer hover:opacity-85 mt-4">Sign Up</button>
        </form>

        <div className="text-center">
          Already have an account? <Link to="/login" className="text-primary">Login</Link>
        </div>
      </div>
    </>
  )
}

export default RegisterPage