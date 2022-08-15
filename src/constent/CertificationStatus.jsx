import React from "react";

function CertificationStatus({handelChange,formData}) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        <h1 className="text-[#0A8A97] font-medium ">Certification Status</h1>
        <div className="flex  justify-between items-end ">
          <div className="flex items-center">
            <input
              id="yes"
              type="radio"
              value="yes"
              name="certification_status"
              className="w-5 h-5 accent-[#2ADBA7] bg-transparent border-gray-300 "
              onChange={handelChange}
              checked={formData.certification_status === "yes"}
            />
            <label  htmlFor="yes" className="ml-2  font-medium text-[#5C5C5C] ">
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="pending"
              type="radio"
              name="certification_status"
              className="w-5 h-5 accent-[#2ADBA7] bg-transparent border-gray-300 "
              value={"pending"}
              onChange={handelChange}
              checked={formData.certification_status === "pending"}
            />
            <label htmlFor="pending" className="ml-2 font-medium text-[#5C5C5C] ">
              Pending
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="no"
              type="radio"
              value={"no"}
              name="certification_status"
              className="w-5 h-5 accent-[#2ADBA7] bg-transparent border-gray-300 "
              onChange={handelChange}
              checked={formData.certification_status === "no"}
            />
            <label htmlFor="no" className="ml-2 font-medium text-[#5C5C5C] ">
              No
            </label>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-[#D9D9D9] mt-2 mb-7"></div>
    </div>
  );
}

export default CertificationStatus;
