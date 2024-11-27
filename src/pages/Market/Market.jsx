
import { Button, IconButton } from "@mui/material"
export default function Market() {
  let btc = [
    { title: 'BTC / INR', avatar: './src/assets/top.svg', desc: '₹ 28,214,25.341' },
    { title: 'BTC / INR', avatar: './src/assets/top.svg', desc: '₹ 28,214,25.341' },
    { title: 'BTC / INR', avatar: './src/assets/top.svg', desc: '₹ 28,214,25.341' },
    { title: 'BTC / INR', avatar: './src/assets/top.svg', desc: '₹ 28,214,25.341' },
    { title: 'BTC / INR', avatar: './src/assets/top.svg', desc: '₹ 28,214,25.341' },
    { title: 'BTC / INR', avatar: './src/assets/top.svg', desc: '₹ 28,214,25.341' },
    { title: 'BTC / INR', avatar: './src/assets/top.svg', desc: '₹ 28,214,25.341' },
  ]
  return (
    <div className="max-w-[1500px]">
      {/* section1 */}
      <div className="flex flex-wrap md:flex-nowrap items-center md:justify-evenly">
        <div className="md:text-start text-center">
          <p className="text-[#1B70F1]">Crypto Brains</p><br />
          <h1 className="md:text-[50px] text-[35px] font-[900] text-white">Buy & Sell Crypto Easy <br />
            With Crypto Brains</h1><br />
          <p className="text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when <br />
            looking at its layout.</p><br />
          <div className="flex md:w-[50%] justify-evenly">
        
          </div>
        </div>
        <div className="right">
          <img width={500} src="./src/assets/img1-market.svg" alt="" />
        </div>
      </div>

      {/* section2 */}
      <div className="flex flex-wrap justify-center">
        {btc.map((elem, i) => {
          return (
            <div className="text-white p-5" key={i}>
              <div className="flex items-center">
                <p>{elem.title}</p>
                <img src={elem.avatar} alt="" />
              </div>
              <p>{elem.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
