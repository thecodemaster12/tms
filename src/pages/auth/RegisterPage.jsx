import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="auth-wrapper min-w-1/4 rounded-md space-y-8 bg-secondary text-white px-12 py-20">
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

        <div className="flex items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="mx-4 text-sm text-gray-100 whitespace-nowrap uppercase">
            or continue with email
          </span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        <form className="space-y-4" action="">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Name</label>
            <input className="border border-gray-200 py-2 px-4 outline-0 focus:border-primary transition duration-150 rounded" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input className="border border-gray-200 py-2 px-4 outline-0 focus:border-primary transition duration-150 rounded" type="email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Password</label>
            <input className="border border-gray-200 py-2 px-4 outline-0 focus:border-primary transition duration-150 rounded" type="password" />
          </div>

          <button className="bg-primary w-full py-3 rounded cursor-pointer hover:opacity-85 mt-4">Sign In</button>
        </form>

        <div className="text-center">
          Already have an account? <Link to="/login" className="text-primary">Login</Link>
        </div>
      </div>
    </>
  )
}

export default RegisterPage