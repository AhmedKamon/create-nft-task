import React from "react";

function Measurement({ handelChange }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        <h1 className="text-[#0A8A97] font-medium ">Measurement</h1>
        <div className="space-y-6">
          <div className="flex flex-col items-start ">
            <label
              htmlFor="IoT_Sensor"
              className="font-normal text-sm text-[#344054] mb-2"
            >
              IoT_Sensor
            </label>
            <input
              className="w-full p-3  accent-[#2ADBA7] focus:outline-none focus:outline-[#2ADBA7] rounded-md bg-white border-gray-300"
              type="text"
              id="IoT_Sensor"
              name="IoT_Sensor"
              placeholder="Data XY"
              required={true}
              //   value={formData.first_name}
              onChange={handelChange}
            />
          </div>
          <div className="flex flex-col items-start ">
            <label
              htmlFor="IGeosatellite"
              className="font-normal text-sm text-[#344054] mb-2"
            >
              Geosatellite
            </label>
            <input
              className="w-full p-3  accent-[#2ADBA7] focus:outline-none focus:outline-[#2ADBA7] rounded-md bg-white border-gray-300"
              type="text"
              id="Geosatellite"
              name="Geosatellite"
              placeholder="Location XY..."
              required={true}
              //   value={formData.first_name}
              onChange={handelChange}
            />
          </div>
          <div className="flex flex-col items-start ">
            <label
              htmlFor="Drone_Footage"
              className="font-normal text-sm text-[#344054] mb-2"
            >
              Drone Footage
            </label>
            <input
              className="w-full p-3  accent-[#2ADBA7] focus:outline-none focus:outline-[#2ADBA7] rounded-md bg-white border-gray-300"
              type="text"
              id="Drone_Footage"
              name="Drone_Footage"
              placeholder="Data XY"
              required={true}
              //   value={formData.first_name}
              onChange={handelChange}
            />
          </div>
          <div className="flex justify-end">
            <button className="text-white font-medium bg-[#0A8A97] px-5 py-3 rounded-md cursor-pointer md:mb-5 ">
              Other Measurement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Measurement;
