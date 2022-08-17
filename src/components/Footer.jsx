import bg from "../utils/Background.png";
import LOGGO from "../utils/Logomark_1_.png";

function Footer() {
  return (
    <div className=" ">
      <img
        src={bg}
        alt=""
        className="bg-gradient-to-r from-[#0A8A97] to-[#2ADBA7] absolute "
      />
      <div className="relative md:px-20 px-7">
        <div className="grid grid-cols-4 ">
          <div className="">
            <div className="flex">
              <img src={LOGGO} alt="" className="w-7 h-7" />
              <h1 className="text-white font-bold ml-2">GREENTRADE</h1>
            </div>
          </div>
          <div className=" space-y-4 ">
            <h1 className="text-white font-medium text-lg">Strassburger Strasse 55 <br /> 10405 Berlin <br /> Germany</h1>
            <p className="text-white font-normal text-sm" >(434) 546-4356</p>
            <p className="text-white font-normal text-sm" >infor@greentrade.com</p>
          </div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
