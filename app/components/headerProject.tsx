import React from 'react'

function HeaderProject() {
  return (
    
    <div className='flex items-center justify-between py-5'>
      <div className='flex py-5 items-center'>
        <input 
            type="text" 
            placeholder="Buscar"
            className="mt-1 p-2 block w-[300px] rounded-md bg-gray-100 border border-[#38c2cf] text-[#313338] focus:outline-none"
        />
        <i className="ri-more-2-line text-[#131415] font-black text-2xl cursor-pointer"></i>
      </div>
      <div>
        <button className='btn bg-[#38c2cf] text-white px-2 py-1 border-none rounded-lg cursor-pointer hover:bg-[#7ecdd4] mr-6'>
            Crear una nueva tarea
        </button>
      </div>
    </div>
  )
}

export default HeaderProject