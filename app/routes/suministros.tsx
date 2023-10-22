import AppLayout from './layout/appLayout'
import SuministrosList, { loader } from '~/components/suministrosList'


function DashboardSuministros() {
  return (
    <AppLayout>
      <div>
          <div className='pt-5 pl-5'>
              <h2 className='text-4xl font-bold text-[#363949]'>Suministros</h2>
          </div>
          <div className='flex justify-between items-center p-6'>
            <div className='flex'>
              <p className='text-xl mr-5'>              
                Cantidad
              </p>
              <input 
                type="text" 
                placeholder='Buscar...'
                className='bg-white px-2 py-1 rounded-lg w-[80%] mb-5 border border-gray-300 focus:outline-none'
              />
            </div>
            <div className='flex bg-[#38c2cf] text-white px-2 py-1 rounded-lg cursor-pointer hover:bg-[#7ecdd4]'>
              <p className='mr-2'>
                Agregar
              </p>
              <i className="ri-add-line"></i>
            </div>
          </div>
          <SuministrosList />
      </div>
    </AppLayout>
  )
}

export default DashboardSuministros