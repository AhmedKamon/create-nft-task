import React from "react";

function Table() {
  return (
    <div className="p-16 ">
      <div className="grid grid-cols-2 gap-4 ">
        <h1 className="text-[#0A8A97] font-medium ">Certification Status</h1>
        <div className="flex  justify-between items-end ">
          <div class="flex items-center">
            <input
              id="yes"
              type="radio"
              value={"yes"}
              name="choose"
              className="w-5 h-5 accent-[#2ADBA7] bg-transparent border-gray-300 "
            />
            <label for="yes" class="ml-2  font-medium text-[#5C5C5C] ">
              Yes
            </label>
          </div>
          <div class="flex items-center">
            <input
              id="pending"
              type="radio"
              value={"pending"}
              name="choose"
              className="w-5 h-5 accent-[#2ADBA7] bg-transparent border-gray-300 "
            />
            <label for="no" class="ml-2 font-medium text-[#5C5C5C] ">
              Pending
            </label>
          </div>
          <div class="flex items-center">
            <input
              id="no"
              type="radio"
              value={"no"}
              name="choose"
              className="w-5 h-5 accent-[#2ADBA7] bg-transparent border-gray-300 "
            />
            <label for="no" class="ml-2 font-medium text-[#5C5C5C] ">
              No
            </label>
          </div>
        </div>
      </div>
      <div class="border-b-[1px] border-[#D9D9D9] mt-3">
</div>
    </div>
  );
}

export default Table;
