import img2 from "../img/Img (2).png";
function Section4() {
  return<>
  <div  className="p-[5%] text-white">
    <div style={{backgroundColor:'#1E1F25'}} className="p-[2%]">
      <br />
      <h1  className="text-3xl text-center">About Speaker</h1>
      <br />
      <div className="lg:flex items-center justify-between sm:block">
        <div className=" lg:w-[50%] sm:">
          <h2 className="text-3xl">Maria Decruze</h2>
          <br />
          <p className="p-[1%] border-b-2 border-gray-8 00 text-gray-500">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
          <br />
          <div className="flex items-center justify-between">
            <div className="flex items-center"><p>Email Address-</p><p className="text-gray-700 ml-2">dummyemail@gmail.com</p></div>
            <div className="flex items-center"><p>Website-</p><p className="text-gray-700 ml-2">www.dummylink.com</p></div>
          </div>
        </div>
        <div className=" lg:w-[30%] sm:m-auto sm:justify-center sm:w-[50%]">
          <br />
          <img src={img2} alt="" />
        </div>
      </div>
      <br />
      <div className="text-center">
        <h1 className="text-3xl">— <span className="text-gray-600">— — —</span></h1>
      </div>
    </div>
  </div>
  </>
}
export default Section4