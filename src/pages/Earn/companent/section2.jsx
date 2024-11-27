import img17 from '../../Trade/img/Img (17).png'
function Section2() {
  let data =[
    {
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },{
      iage1: img17,
      p1:'20 Mar, 2022',
      p2:'New Delhi, India',
      name:'Crypto Trader Was New Update With...',
      p3:'Hindi, English',
      p4:'Free',
    },
  ]
  return<>
  <div className="p-[5%] text-white grid xl:grid-cols-4 sn:grid cols-1 sn: md:grid-cols-2 lg:grid-cols-3">{data.map((elem) =>{
    return (<>
    <div className="md:w-[80%] sm:w-[50%]  sm:m-auto sm:mt-32">
    <img src={elem.iage1} alt="" />
    <div style={{backgroundColor:'#1E1F25', padding:"10px"}}>
      <div className="text-gray-600 flex items-center justify-between">
        <p>{elem.p1}</p>
        <p>{elem.p2}</p>
      </div>
      <br />
      <h2 className="text-2xl">{elem.name}</h2>
    <br />
    <div className="text-gray-600 flex items-center justify-between">
        <p>{elem.p1}</p>
        <p>{elem.p2}</p>
      </div>
    </div>
    </div>
    </>)
  })}</div>
  </>
}
export default Section2