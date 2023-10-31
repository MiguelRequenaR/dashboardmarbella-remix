import React from 'react'

function HeaderProject() {
  return (
    
    <div className='flex items-center py-5'>
        <input 
            type="text" 
            placeholder="Buscar"
            className="mt-1 p-2 block w-[20%] rounded-md bg-gray-100 border border-[#38c2cf] text-[#313338] focus:outline-none"
        />
        <i className="ri-more-2-line text-[#131415] font-black text-2xl cursor-pointer"></i>
    </div>
  )
}

export default HeaderProject