import Icons from '../img/Icons.png'
function Section2() {
  return<>
  <div className="text-white flex items-center justify-between p-[10px]" style={{backgroundColor:"#1E1F25"}}>
    <div className='flex items-center justify-around w-[14%]'>
    <p className="text-blue-800 border-b-4 border-blue-800 w-[40%]">About Event</p>
    <br />
    <p>Book Ticket</p>
    </div>
    <div className='flex items-center justify-around w-[30%]'>
      <p className="border-r-2 border-gray-500 w-[] pr-[10px]">800 Likes</p>
      <p>Share Event on-</p>
      <img src={Icons} alt="" />
    </div>
  </div>
  </>
}
export default Section2