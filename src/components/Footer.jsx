import bg from "../utils/Background.png";
import LOGGO from "../utils/Logomark_1_.png";
import upArrow from '../utils/Vector-4.png'

function Footer() {
  return (
    <div className="  ">
      <img
        src={bg}
        alt=""
        className="bg-gradient-to-r from-[#0A8A97] to-[#2ADBA7] absolute "
      />
      
      <div className="relative md:px-20 px-7 py-52 ">
        <div className="grid grid-cols-4  ">
          <div className="">
            <div className="flex">
              <img src={LOGGO} alt="" className="w-7 h-7" />
              <h1 className="text-white font-bold ml-2">GREENTRADE</h1>
            </div>
          </div>
          <div className=" space-y-4 ">
            <h1 className="text-white font-normal text-lg  ">Ludwig-Sandberg-Str. 1a, <br /> 16225 Berlin, Germany.</h1>
            <p className="text-white font-normal text-sm" >(434) 546-4356</p>
            <p className="text-white font-normal text-sm" >infor@greentrade.com</p>
            <p className="text-white font-normal text-sm" >www.greentrade.com</p>
          </div>
          <div className="flex justify-around">
            <ul className="space-y-5">
              <li className="text-white font-semibold ">About</li>
              <li className="text-white font-semibold ">Growers</li>
              <li className="text-white font-semibold ">Merchants</li>
              <li className="text-white font-semibold ">Partners</li>
              <li className="text-white font-semibold ">Contacts</li>
            </ul>
            <ul className="space-y-5">
              <li className="text-white font-semibold ">Facebook</li>
              <li className="text-white font-semibold ">Twitter</li>
              <li className="text-white font-semibold ">Linkedin</li>
              <li className="text-white font-semibold ">Instagram</li>
            </ul>
            
          </div>
          <div className="flex justify-center items-center">
              <img src={upArrow} className='w-9 h-9' alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
