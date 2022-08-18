import { useState } from "react";
import clalenderIcon from "../utils/Vector-3.png";
import DatePicker from "sassy-datepicker";

function Date({ formData }) {
  const [show, setshow] = useState("false");
  const onChange = (date) => {
    formData.date = date.toString();
  };
  return (
    <div>
      <div className="md:grid  md:grid-cols-2 md:gap-4 flex flex-col space-y-4">
        <h1 className="text-[#0A8A97] font-medium ">Certificate Issued date</h1>
        <div>
          <div className="bg-white w-full flex items-center ">
            <input
              onClick={() => setshow(!show)}
              placeholder='Select Certificate Issued date'
              className="h-11  bg-white w-full focus:outline-none p-2 rounded-sm focus:outline-[#58DBBA] "
            ></input>
            <img
              src={clalenderIcon}
              alt=""
              className="w-8 h-8 bg-black rounded-full
             p-1 mr-2 "
            />
          </div>
          {!show && (
            <div className="mt-3">
              <DatePicker
                onChange={onChange}
                className="!w-full !p-3 !border-none text-black  drop-shadow-lg "
              />
            </div>
          )}
        </div>
      </div>
      <div className="border-b-[1px] border-[#D9D9D9] mt-2 mb-7"></div>
    </div>
  );
}

export default Date;
