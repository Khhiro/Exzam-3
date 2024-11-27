

export default function Registration() {
  return <div className="reg text-white flex items-center ml-[165px]">
    <div>
        <h1 className="text-center text-5xl">Sign Up</h1>
        <div className="flex gap-[30px] mt-[50px]">
          <div>
            <p>First Name</p>
            <input className="w-[240px] pl-[20px] mt-[5px] h-[52px] bg-transparent border border-gray-500 rounded-md" type="text" placeholder="Type Here"/>
          </div>
          <div>
            <p>Last Name</p>
            <input className="w-[240px] pl-[20px] mt-[5px] h-[52px] bg-transparent border border-gray-500 rounded-md" type="text" placeholder="Type Here"/>  
          </div>
        </div>
        <p className="mt-[30px]">Phone</p>
        <input className="w-[510px] mt-[5px] pl-[20px] h-[52px] bg-transparent border border-gray-500 rounded-md" type="text" placeholder="Type Here"/>
        <p className="mt-[30px]">Email Address</p>
        <input className="w-[510px] mt-[5px] pl-[20px] h-[52px] bg-transparent border border-gray-500 rounded-md" type="text" placeholder="Type Here"/>
        <p className="mt-[30px]">Password</p>
        <input className="w-[510px] mt-[5px] pl-[20px] h-[52px] bg-transparent border border-gray-500 rounded-md" type="password" placeholder="Type Here"/>
        <h6 className="text-gray-400 text-end mt-[15px]">Password must be min 8 characters</h6>
        <h5 className="mt-[15px]"><input type="checkbox" /><span className="text-gray-400">i Agree To This Website</span> Terms & Conditions.</h5>
        <button  className="bg-blue-600 w-[510px] h-[56px] mt-[40px] rounded-md">Sign Up</button>
        <h4 className="text-center mt-[40px]"><span className="text-gray-500 mr-[10px] ">Have an Account?</span> Login Here</h4>
    </div>
    <img src="src/pages/Login/Img.png" alt="" />
  </div>
}
