import { Button } from "@mui/material"


export default function Market() {
  return (
    <div>
      {/* section1 */}
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="md:text-start text-center">
          <p className="text-[#1B70F1]">Crypto Brains</p><br />
          <h1 className="md:text-[50px] text-[35px] font-[900] text-white">Buy & Sell Crypto Easy <br />
            With Crypto Brains</h1><br />
          <p className="text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when <br />
            looking at its layout.</p><br />
          <div className="flex md:w-[50%] justify-evenly">
            <Button variant="contained">Start Now</Button>
            <Button variant="text">Beginner’s Guide</Button>
          </div>
        </div>
        <div className="right">
          <img src="./src/assets/img1-market.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
