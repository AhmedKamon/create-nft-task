function Certification({ handelChange }) {
  return (
    <div>
      <div className="md:grid  md:grid-cols-2 md:gap-4 flex flex-col space-y-4 ">
        <h1 className="text-[#0A8A97] font-medium ">Certification</h1>
        <div>
          <select
            onChange={handelChange}
            name="certification"
            id="certification"
            className="  w-full text-[#757575] font-normal font-[14px] py-3 px-2 focus:outline-none focus:outline-[#58DBBA] rounded-sm "
          >
            <option selected disabled className=" py-3 px-2" value=" Select Certification">
            Select Certification
            </option>
            <option
              className="font-medium text-black after:hover:bg-[#58DBBA] hover:text-white "
              value="Certified Emission Reduction (CER)"
            >
              Certified Emission Reduction (CER)
            </option>
            <option className=" font-medium text-black after:hover:bg-[#58DBBA] hover:text-white" value="Verified Carbon Units (VCU) ">
              Verified Carbon Units (VCU){" "}
            </option>
          </select>
        </div>
      </div>
      <div className="border-b-[1px] border-[#D9D9D9] mt-2 mb-7"></div>
    </div>
  );
}

export default Certification;
