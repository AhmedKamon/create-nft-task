import React, { useState } from "react";
import Certification from "./Certification";
import CertificationStatus from "./CertificationStatus";
import Date from "./Date";

function Table() {
  const [formData, setFormData] = useState({
    certification_status: "pending",
    certification: "",
  });
  const handelChange = (e) => {
    console.log(e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "e");
  };
  return (
    <div className="p-16 ">
      <form action="" onSubmit={handelSubmit}>
        <CertificationStatus handelChange={handelChange} formData={formData} />
        <Certification handelChange={handelChange}  />
        <Date/>
        <input
          type="submit"
          name=""
          value="Create Project NFT"
          id=""
          className="bg-gray-500 px-4 py-2 "
        />
      </form>
    </div>
  );
}

export default Table;
