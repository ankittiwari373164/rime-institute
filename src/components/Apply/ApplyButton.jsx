import React from 'react'
import { Link } from 'react-router-dom';

const ApplyButton = ({setOpen}) => {
  return (
    <div onClick={()=> setOpen(true)} className='fixed lg:hidden lg:bottom-1/4 md:bottom-[70%] bottom-[40%] -left-12 z-3 bg-[#C9A961] shadow-lg hover:bg-[#b89851] transition-colors rotate-90 rounded-tl-xl rounded-tr-xl'>
        <Link to={'/apply'}>
        <button className='px-5 pb-3 pt-1 text-white font-semibold text-lg cursor-pointer'>
            Apply Now
        </button>
        </Link>
    </div>
  )
}

export default ApplyButton;