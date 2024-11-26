import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center text-[20px] text-white justify-between md:ml-10 md:mr-10 mt-10 mb-10">
      <div>
        <img className="w-100" src="./src/assets/logo.svg" alt="Logo" />
      </div>
      <div className="md:flex md:w-[40%] hidden justify-between">
        <Link to="/">Market</Link>
        <Link to="/trade">Trade</Link>
        <Link to="/earn">Earn</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className=" md:w-[13%] w-[40%] flex justify-between items-center">
        <Link to="/login">Log In</Link>
        <Link className="p-1 md:p-2 bg-blue-600 rounded-xl" to="/signup">Sign Up</Link>
      </div>
      <div className="md:hidden flex items-center">
      </div>
    </div>
  );
}
