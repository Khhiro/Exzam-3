
import { Button, ButtonBase, IconButton } from "@mui/material"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AccordionTransition from "../../components/footer/Acardion";
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
  let section4 = [
    { title: 'Create Account', avatar: './src/assets/section4-market/profil.svg', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Verify Bank Account', avatar: './src/assets/section4-market/bunk.svg', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Add Fund in Wallet', avatar: './src/assets/section4-market/koshelek.svg', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Start Trading', avatar: './src/assets/section4-market/top.svg', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  ]

  let kurs = [
    { cripto: './src/assets/section3-market/Btc.svg', title: 'Bitcoin / BTC', status: './src/assets/top.svg', desc: '₹ 28,214,25.341', boloPoyon: './src/assets/bolo.svg' },
    { cripto: './src/assets/section3-market/Bts.svg', title: 'BTS / BTC', status: './src/assets/minus.svg', desc: '₹ 28,214,25.341', boloPoyon: './src/assets/poyon.svg' },
    { cripto: './src/assets/section3-market/Dgd.svg', title: 'DGD / BTC', status: './src/assets/top.svg', desc: '₹ 28,214,25.341', boloPoyon: './src/assets/bolo.svg' },
    { cripto: './src/assets/section3-market/Ethos.svg', title: 'Ethos / BTC', status: './src/assets/minus.svg', desc: '₹ 28,214,25.341', boloPoyon: './src/assets/poyon.svg' },
    { cripto: './src/assets/section3-market/Etp.svg', title: 'KMD / BTC', status: './src/assets/top.svg', desc: '₹ 28,214,25.341', boloPoyon: './src/assets/bolo.svg' },
    { cripto: './src/assets/section3-market/Kmd.svg', title: 'Etp / BTC', status: './src/assets/minus.svg', desc: '₹ 28,214,25.341', boloPoyon: './src/assets/poyon.svg' },
  ]

  let obj = [
    { number: '01', title: 'Easy Trading ', desc: 'Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.' },
    { number: '02', title: '24/7 Help Service', desc: 'Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.' },
    { number: '03', title: 'Fast Service', desc: 'Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.' },
    { number: '04', title: 'Low Charges', desc: 'Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.' },
  ]

  let section6 = [
    { title: 'John Doe', avatar: './src/assets/people.svg', desc: '“ Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”' },
    { title: 'John Doe', avatar: './src/assets/people.svg', desc: '“ Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ”' },
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
      <div className="flex flex-wrap justify-center ">
        {btc.map((elem, i) => {
          return (
            <div className="text-white p-5" key={i}>
              <div className="flex items-center">
                <p className="text-gray-400">{elem.title}</p>
                <img src={elem.avatar} alt="" />
              </div>
              <p>{elem.desc}</p>
            </div>
          )
        })}
      </div>

      {/* section3 */}
      <div className="mb-28">
        <div className="flex md:justify-between justify-center flex-wrap m-10">
          <div><h1 className="text-white text-[35px] font-[700]">Market Trends</h1></div>
          <div className="text-gray-400 flex w-[90%] md:w-[40%] text-center justify-evenly md:justify-between md:m-0 m-10">
            <p>All</p>
            <p>Top Gainers</p>
            <p>Top Losers</p>
            <p>New Listing</p>
            <p>Defi</p>
            <p>Metaverse</p>
          </div>
        </div>
        <div className="flex md:justify-evenly w-[100%] md:flex-nowrap flex-wrap">
          {kurs.map((elem, i) => {
            return <div className="text-white w-[51%] md:w-[13.5%] text-center m-auto border rounded-xl gap-2 hover:scale-110 transition-transform" key={i}>
              <img className="m-auto" src={elem.cripto} alt="" />
              <p>{elem.title}</p>
              <img className="m-auto" src={elem.status} alt="" />
              <p>{elem.desc}</p>
              <img className="m-auto" src={elem.boloPoyon} alt="" />
            </div>
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
          <Button sx={{ margin: 'auto' }} variant="contained">See All Market</Button>
        </div>

      </div>

      {/* section4 */}
      <div className="bg-[#1E1F25] w-[100%] md:h-[650px] h-[2000px] mb-32">
        <div className="text-center pt-10 pb-10">
          <h1 className="text-white text-[35px] font-[700]">Start Trading In Simple Process</h1><br />
          <p className="text-gray-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.</p>
        </div>

        <div className="flex md:justify-evenly w-[100%] md:flex-nowrap flex-wrap ">
          {section4.map((elem, i) => {
            return (
              <div className=" bg-gray-800 text-white w-[80%] md:w-[23%] p-[50px] text-center m-auto border rounded-xl gap-2 hover:scale-110 transition-transform" key={i}>
                <img className="m-auto" src={elem.avatar} alt="" /><br /><br />
                <p className="text-white">{elem.title}</p><br />
                <p className="text-gray-400">{elem.desc}</p><br />
                <Button color="" variant="text">Sign Up Now</Button>
              </div>
            )
          })}
        </div>

      </div>

      {/* section5 */}
      <div>
        <div className="text-center pt-10 pb-10">
          <h1 className="text-white text-[35px] font-[700]">Why Choose Crypto Brains!</h1><br />
          <p className="text-gray-400">When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="md:ml-20 w-full md:w-2/3">
            {obj.map((elem, i) => {
              return (
                <div key={i} className="mb-10">
                  <div className="flex flex-wrap md:flex-nowrap justify-center text-center items-center gap-10">
                    {/* left-Box */}
                    <div className="flex justify-center items-center">
                      <h1 className="text-[35px] text-[#00C97B] md:w-1/12 sm:w-1/4">{elem.number}</h1>
                    </div>
                    {/* right-Box */}
                    <div className="w-full md:w-10/12 sm:w-3/4">
                      <p className="text-white md:text-left text-center">{elem.title}</p>
                      <p className="w-full text-gray-400 md:text-left sm:text-left">{elem.desc}</p>
                      <div>
                        <Button color="warning" variant="outlined">Start Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-1/3 mt-10 md:mt-0">
            <img className="w-full md:w-[600px] mx-auto" src="./src/assets/section5-market/section-5.svg" alt="Illustration" />
          </div>
        </div>


      </div>

      {/* section6 */}
      <div className="bg-[#1E1F25] w-[100%] md:h-[700px] h-[1500px] mb-32">
        <div className="flex md:justify-between justify-center flex-wrap p-10 pt-20 pb-20">
          <div><h1 className="text-white text-[35px] font-[700]">What Traders Saying <br /> About Us! </h1></div>
          <div className="text-gray-400 flex w-[90%] md:w-[40%] md:text-left text-center justify-evenly md:justify-between md:m-0 m-10">
            <p>Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled type specimen book.</p>
          </div>
        </div>

        <div className="flex md:justify-evenly w-[100%] md:flex-nowrap flex-wrap ">
          {section6.map((elem, i) => {
            return (
              <div className=" bg-gray-800 text-white w-[80%] md:w-[40%] p-[20px] text-center m-auto border rounded-xl gap-2 hover:scale-110 transition-transform" key={i}>
                <img className="m-auto" src={elem.avatar} alt="" />
                <p className="text-white">{elem.title}</p><br />
                <p className="text-gray-400 md:text-justify">{elem.desc}</p><br />
              </div>
            )
          })}
        </div>

      </div>

      {/* section7 */}
      <div className="flex flex-wrap md:flex-nowrap items-center md:justify-evenly pb-32">
        <div className="md:text-start text-center">
          <h1 className="md:text-[50px] text-[35px] font-[900] text-white">Never Miss Trading, Download <br /> Our Application</h1><br />
          <p className="text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when <br />
            looking at its layout.</p><br />
          <div className="flex md:w-[50%] justify-evenly">
            <Button color="secondary" variant="outlined" startIcon={<LaptopMacIcon />}>
            App Store
            </Button>
            <Button color="secondary" variant="outlined" startIcon={<PlayArrowIcon />}>
            Play Store
            </Button>
            <Button color="secondary" variant="outlined" startIcon={<QrCodeIcon />}></Button>
          </div>
        </div>
        <div className="right">
          <img width={500} src="./src/assets/macBook.svg" alt="" />
        </div>
      </div>

      {/* section8 */}
      <div>
      <div className="text-center pt-10 pb-10">
          <h1 className="text-white text-[35px] font-[700]">Why Choose Crypto Brains!</h1><br />
          <p className="text-gray-400">When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>

      <AccordionTransition />


    </div>)
}
