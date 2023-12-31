import React from 'react'

function CaseCard() {
  return (
    <div>
        <div className="bg-[#ffff] rounded-3xl mt-5">
                  <div className="flex justify-between p-5 ">
                      <div className="flex">
                          <p className="text-white bg-[#005cff] mr-4 py-1 px-2 rounded-xl">Dribble</p>
                          <p className="text-white bg-[#ee8e49] py-1 px-3 rounded-xl">Diseño</p>                      
                      </div>
                      <div>
                          <i className="ri-more-2-line text-[#131415] font-black"></i>
                      </div>
                  </div>
                  <div className="px-5">
                      <h2 className="text-[#131415] font-bold text-lg">Food Delivery App Case</h2>
                      <p>
                          Create a porfolio case on Behance. The project is a mobile application for food delivery from supermarkets and cafes.
                      </p>
                      <div className="flex border rounded-xl w-[30%] mt-5 py-1 px-2">
                          <i className="ri-calendar-line text-[#131415] font-bold"></i>
                          <p className="pl-4">4 Agos</p>
                      </div>
                  </div>
                  <div className="border text-white w-[90%] mx-auto mt-5"></div>
                  <div className="flex justify-end p-5">
                      <i className="ri-message-3-line mr-5 text-lg"></i>
                      <i className="ri-attachment-line text-lg"></i>
                  </div>
        </div>
    </div>
  )
}

export default CaseCard