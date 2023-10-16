
function DashboardContent() {
  return (
    <main className='w-full bg-[#eeeeee] rounded-tl-xl'>
        <div className='flex justify-between items-center pr-5'>
            <div className='pt-5 pl-5'>
                <h2 className='text-4xl font-bold text-[#363949]'>Dashboard</h2>
                <p className='mt-4 text-[#aaaaaa]'>Dashboard / <span className='text-[#1976d8]'>Análisis</span></p>
            </div>
            <div className='flex items-center justify-center h-10 px-4 rounded-full bg-[#1976d8] text-white font-semibold text-md'>
                <button>
                    <i className="ri-download-cloud-2-line"></i>
                </button>
                <p className='pl-2'>Descargar CSV</p>
            </div>
        </div>
        <div className='grid grid-cols-4 gap-[24px] mt-[26px] p-[24px]'>
            <div className='flex items-center bg-[#f6f6f9] p-5 rounded-2xl'>
                <i className="ri-calendar-line  bg-[#cfe8ff] text-[#4882d3] font-semibold text-3xl p-6 rounded-xl"></i>
                <div className='ml-5'>
                    <h3 className='text-2xl font-bold text-[#363949]'>1074</h3>
                    <span className='text-[#363949]'>Orden de Pago</span>
                </div>
            </div>
            <div className='flex items-center bg-[#f6f6f9] p-5 rounded-2xl'>
                <i className="ri-slideshow-line  bg-[#fff2c6] text-[#fbc02d] font-semibold text-3xl p-6 rounded-xl"></i>
                <div className='ml-5'>
                    <h3 className='text-2xl font-bold text-[#363949]'>1074</h3>
                    <span className='text-[#363949]'>Orden de Pago</span>
                </div>
            </div>
            <div className='flex items-center bg-[#f6f6f9] p-5 rounded-2xl'>
                <i className="ri-line-chart-line  bg-[#bbf7d0] text-[#388e3c] font-semibold text-3xl p-6 rounded-xl"></i>
                <div className='ml-5'>
                    <h3 className='text-2xl font-bold text-[#363949]'>1074</h3>
                    <span className='text-[#363949]'>Orden de Pago</span>
                </div>
            </div>
            <div className='flex items-center bg-[#f6f6f9] p-5 rounded-2xl'>
                <i className="ri-money-dollar-box-line  bg-[#fecdd3] text-[#d32f2f] font-semibold text-3xl p-6 rounded-xl"></i>
                <div className='ml-5'>
                    <h3 className='text-2xl font-bold text-[#363949]'>1074</h3>
                    <span className='text-[#363949]'>Orden de Pago</span>
                </div>
            </div>
        </div>
        <div className="flex">
            <div className='p-5 m-6 bg-[#f6f6f9] w-[55%] rounded-2xl'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <i className="ri-list-ordered text-lg"></i>
                        <p className='text-2xl text-[#363949] font-bold pl-4'>
                            Proyectos Recientes
                        </p>
                    </div>
                    <div>
                        <i className="ri-filter-3-line text-lg pr-4"></i>
                        <i className="ri-search-line text-lg"></i>
                    </div>
                </div>
                <table className='w-full text-start mt-5'>
                    <thead>
                        <tr>
                            <th className='text-start text-[#363949] text-lg'>Usuarios</th>
                            <th className='text-start text-[#363949] text-lg'>Fecha</th>
                            <th className='text-start text-[#363949] text-lg'>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <td className='flex pb-5 pt-5'>
                                <img 
                                    src="/img/userIMG.webp"
                                    alt="logo"
                                    width={35}
                                    height={10}
                                    className="rounded-full object-contain"
                                />
                                <p className='text-lg pl-4'>Angel</p>
                            </td>
                            <td className='pb-5'>20-09-2023</td>
                            <td className='pb-5'>
                                <span className='border bg-[#388e3c] px-3 py-1 rounded-full text-white'>Completado</span>
                            </td>
                        </tr>
                        <tr> 
                            <td className='flex pb-5 pt-5'>
                                <img 
                                    src="/img/userIMG.webp"
                                    alt="logo"
                                    width={35}
                                    height={10}
                                    className="rounded-full object-contain"
                                />
                                <p className='text-lg pl-4'>Miguel</p>
                            </td>
                            <td className='pb-5'>20-09-2023</td>
                            <td className='pb-5'>
                                <span className='border bg-[#fbc02d] px-3 py-1 rounded-full text-white'>Pendiente</span>
                            </td>
                        </tr>
                        <tr> 
                            <td className='flex pb-5 pt-5'>
                                <img 
                                    src="/img/userIMG.webp"
                                    alt="logo"
                                    width={35}
                                    height={10}
                                    className="rounded-full object-contain"
                                />
                                <p className='text-lg pl-4'>Pedro</p>
                            </td>
                            <td className='pb-5'>20-09-2023</td>
                            <td className='pb-5'>
                                <span className='border bg-[#1976d2] px-3 py-1 rounded-full text-white'>En Proceso</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="p-5 m-6 bg-[#f6f6f9] w-[45%] rounded-2xl">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <i className="ri-list-ordered text-lg"></i>
                        <p className='text-2xl text-[#363949] font-bold pl-4'>
                            Recordatorio
                        </p>
                    </div>
                    <div>
                        <i className="ri-filter-3-line text-lg pr-4"></i>
                        <i className="ri-search-line text-lg"></i>
                    </div>
                </div>
                <div className="pt-5 space-y-5">
                    <div className="flex justify-between items-center bg-[#eeeeee] py-2 px-2 rounded-xl">
                        <div className="flex">
                            <i className="ri-checkbox-line text-lg font-semibold mr-2"></i>
                            <h3>Comenzar una reunión</h3>
                        </div>
                        <i className="ri-list-ordered text-lg"></i>
                    </div>
                    <div className="flex justify-between items-center bg-[#eeeeee] py-2 px-2 rounded-xl">
                        <div className="flex">
                            <i className="ri-checkbox-line text-lg font-semibold mr-2"></i>
                            <h3>Analizar Proyecto</h3>
                        </div>
                        <i className="ri-list-ordered text-lg"></i>
                    </div>
                    <div className="flex justify-between items-center bg-[#eeeeee] py-2 px-2 rounded-xl">
                        <div className="flex">
                            <i className="ri-checkbox-blank-line text-lg font-semibold mr-2"></i>
                            <h3>Verificar Proyecto</h3>
                        </div>
                        <i className="ri-list-ordered text-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default DashboardContent