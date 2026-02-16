import React from 'react'

const EnquiryButton = ({setOpen}) => {
  return (
    <div onClick={()=> setOpen(true)} className='fixed lg:bottom-1/2 md:bottom-[80%] bottom-[60%] -left-12 z-3 bg-[#C9A961] shadow-lg hover:bg-[#b89851] transition-colors rotate-90 rounded-tl-xl rounded-tr-xl'>
        <button className='px-5 py-2.5 text-white font-semibold text-lg cursor-pointer'>
            Enquiry Now
        </button>
    </div>
  )
}

export default EnquiryButton;