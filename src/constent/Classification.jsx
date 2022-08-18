import React from 'react'

function Classification({handelChange, formData}) {
  return (
    <div>
      <div className="md:grid  md:grid-cols-2 md:gap-4 flex flex-col space-y-4 ">
        <h1 className="text-[#0A8A97] font-medium ">Certification Status</h1>
        <div className="flex  justify-between items-end ">
          <div className="flex items-center">
            <input
              id="avoidance"
              type="radio"
              value="avoidance"
              name="classification"
              className="w-5 h-5 accent-[#2ADBA7] bg-transparent border-gray-300 "
              onChange={handelChange}
              checked={formData.classification === "avoidance"}
            />
            <label  htmlFor="yes" className="ml-2  font-medium text-[#5C5C5C] ">
            Avoidance
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="removal"
              type="radio"
              value="removal"
              name="classification"
              className="w-5 h-5 accent-[#2ADBA7] bg-transparent border-gray-300 "
              onChange={handelChange}
              checked={formData.classification === "removal"}
            />
            <label  htmlFor="yes" className="ml-2  font-medium text-[#5C5C5C] ">
            Removal
            </label>
          </div>
          
          
        </div>
      </div>
      <div className="border-b-[1px] border-[#D9D9D9] mt-2 mb-7"></div>
    </div>
  )
}

export default Classification