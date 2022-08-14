import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function Progress() {
  return (
    <div className='font-medium text-4xl'>
        <h1 className='my-11'>Create Project NFT</h1>
        <ProgressBar completed={70} bgColor='#22D6AC' borderRadius='5px' height='40px' baseBgColor='#ECECEC' labelAlignment='center' />
    </div>
  )
}

export default Progress