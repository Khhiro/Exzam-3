
export default function Login() {
  return <div className="log text-white flex items-center ml-[165px]">
    <div className="w-[510px] ">
      <h1 className="text-center text-5xl">Login</h1>
      <p className="mt-[40px]">Email or Phone</p>
      <input className="w-[510px] mt-[5px] pl-[20px] h-[52px] bg-transparent border border-gray-500 rounded-md" type="text" placeholder="Type Here"/>
      <p className="mt-[50px]">Password</p>
      <input className="w-[510px] mt-[5px] pl-[20px] h-[52px] bg-transparent border border-gray-500 rounded-md " type="password" placeholder="Type Here"/>
      <button className="bg-blue-600 w-[510px] h-[56px] mt-[40px] rounded-md" >Login</button>
      <h4 className="text-center mt-[20px]">Forgot Password?</h4>
      <h5 className="text-center mt-[40px]"><span className="text-gray-500 mr-[10px] ">Don’t Have an Account? </span>Sign Up Here</h5>     
    </div>
    <img src="src/pages/Login/Img.png" alt="" />
  </div>
}
