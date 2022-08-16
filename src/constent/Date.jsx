import { useState } from 'react';
import clalenderIcon from '../utils/Vector-3.png'

function Date() {
    const[show,setshow] = useState('false')
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        <h1 className="text-[#0A8A97] font-medium ">Certificate Issued date</h1>
        <div>
          <div className="bg-white w-full flex items-center ">
            <input onClick={()=>setshow(!show)} className="h-11 bg-white w-full focus:outline-none p-2 "></input>
            <img src={clalenderIcon} alt="" className='w-8 h-8 bg-black rounded-full
             p-1 mr-2 ' />
          </div>
          {!show && <div>
                show
          </div>}
        </div>
      </div>
      <div className="border-b-[1px] border-[#D9D9D9] mt-2 mb-7"></div>
    </div>
  );
}

export default Date;
