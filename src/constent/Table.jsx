import React, { useState } from "react";
import Certification from "./Certification";
import CertificationStatus from "./CertificationStatus";
import Classification from "./Classification";
import Date from "./Date";
import Measurement from "./Measurement";
import Token from "./Token";

function Table() {
  const [formData, setFormData] = useState({
    certification_status: "pending",
    certification: "",
    date: "",
    token: "",
    classification: "avoidance",
    IoT_Sensor: "",
    Geosatellite: "",
    Drone_Footage: "",
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
    <div className=" ">
      <form action="" onSubmit={handelSubmit}>
        <div className="bg-[#58DBBA]/10 rounded-lg p-16">
          <CertificationStatus
            handelChange={handelChange}
            formData={formData}
          />
          <Certification handelChange={handelChange} />
          <Date formData={formData} />
          <Token handelChange={handelChange} />
          <Classification handelChange={handelChange} formData={formData} />
          <Measurement handelChange={handelChange} />
        </div>
        <div className="flex justify-end mt-8 mb-11">
          <button
            className="bg-gradient-to-r from-[#0A8A97] to-[#2ADBA7] text-white font-semibold px-6 rounded-md py-2 "
            type="submit"
          >
            Create Project NFT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Table;
