import React from "react";

function Token({ handelChange }) {
  return (
    <div>
      <div className="md:grid  md:grid-cols-2 md:gap-4 flex flex-col space-y-4">
        <h1 className="text-[#0A8A97] font-medium ">Token Issuer</h1>
        <div>
          <select
            onChange={handelChange}
            name="token"
            id="token"
            className="  w-full text-[#757575] font-normal font-[14px] py-3 px-2 focus:outline-none focus:outline-[#58DBBA] rounded-sm "
          >
            <option selected disabled className=" py-3 px-2" value="">
            Select a Token Issuer
            </option>
            <option className=" font-medium text-black after:hover:bg-[#58DBBA] hover:text-white" value="GreenTrade Impact GmbH">
              GreenTrade Impact GmbH
            </option>
          </select>
        </div>
      </div>
      <div className="border-b-[1px] border-[#D9D9D9] mt-2 mb-7"></div>
    </div>
  );
}

export default Token;
