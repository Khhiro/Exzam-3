import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center text-[20px] text-white justify-between ml-10 mr-10 mt-10 mb-10">
      <div>
        <img className="w-100" src="./src/assets/logo.svg" alt="Logo" />
      </div>
      <div className="flex w-[40%] justify-between">
        <Link to="/">Market</Link>
        <Link to="/trade">Trade</Link>
        <Link to="/earn">Earn</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>

      <div className="w-[13%] flex justify-between items-center">
        <Link to="/login">Log In</Link>
        <Link className="p-2 bg-blue-600 rounded-xl" to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
