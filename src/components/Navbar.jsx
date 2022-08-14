import LOGGO from '../utils/Logomark_1_.png'
import GLOVE from '../utils/Vector-3.png'

function Navbar() {
  return (
    <div className='h-20 bg-gradient-to-r from-[#0A8A97]  to-[#2ADBA7] flex items-center justify-between md:px-20 px-7'>
        <div className='flex'>
            <img src={LOGGO} alt="" className='w-7 h-7' />
            <h1 className='text-white font-bold ml-2'>GREENTRADE</h1>
        </div>
        <div className='lg:flex space-x-7 text-white font-semibold hidden' >
            <p>Home</p>
            <p>Marketplace</p>
            <p>Launchpad</p>
        </div>
        <div className='flex space-x-4'>
            <div className='flex items-center space-x-2'>
                <img className='w-7 h-7' src={GLOVE} alt="" />
                <h1 className=' text-white font-bold '>EN</h1>
            </div>
            <button className='bg-white text-[#2ADBA7] px-8 py-[10px] rounded-[8px] font-medium'>Log out</button>
        </div>
    </div>
  )
}

export default Navbar