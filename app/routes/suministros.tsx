import AppLayout from './layout/appLayout'
import SuministrosList from '~/components/suministrosList'

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
              <button className="btn bg-[#38c2cf] text-white px-2 py-1 border-none rounded-lg cursor-pointer hover:bg-[#7ecdd4]" onClick={() => {
                  const modal = document.getElementById('my_modal_4') as HTMLDialogElement | null;
                  if (modal) {
                    modal.show();
                  }
                }}>
                  Agregar Suministros
              </button>  
          </div>
          <SuministrosList />

          <dialog id="my_modal_4" className="modal ">
            <div className="modal-box w-11/12 max-w-5xl bg-[#ffff]">
              <h3 className="font-bold text-xl text-center mb-6">Agregar nuevo suministro</h3>
                <form method="dialog" className='grid grid-cols-2 gap-4'>
                  <div className="mb-4">
                    <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">
                      Código:
                    </label>
                    <input
                      type="text"
                      id="codigo"
                      name="codigo"
                      className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-gray-300 focus:ring focus:ring-[#38c2cf] focus:border focus:border-[#38c2cf]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="producto" className="block text-sm font-medium text-gray-700">
                      Producto:
                    </label>
                    <input
                      type="text"
                      id="producto"
                      name="producto"
                      className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-gray-300 focus:ring focus:ring-[#38c2cf] focus:border focus:border-[#38c2cf]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700">
                      Cantidad:
                    </label>
                    <input
                      type="text"
                      id="cantidad"
                      name="cantidad"
                      className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-gray-300 focus:ring focus:ring-[#38c2cf] focus:border focus:border-[#38c2cf]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="proveedor" className="block text-sm font-medium text-gray-700">
                      Proveedor:
                    </label>
                    <input
                      type="text"
                      id="proveedor"
                      name="proveedor"
                      className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-gray-300 focus:ring focus:ring-[#38c2cf] focus:border focus:border-[#38c2cf]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="fechaIngreso" className="block text-sm font-medium text-gray-700">
                      Fecha de Ingreso:
                    </label>
                    <input
                      type="date"
                      id="fechaIngreso"
                      name="fechaIngreso"
                      className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-gray-300 focus:ring focus:ring-[#38c2cf] focus:border focus:border-[#38c2cf]"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="fechaSalida" className="block text-sm font-medium text-gray-700">
                      Fecha de Salida:
                    </label>
                    <input
                      type="date"
                      id="fechaSalida"
                      name="fechaSalida"
                      className="mt-1 p-2 block w-full rounded-md bg-gray-100 border-gray-300 focus:ring focus:ring-[#38c2cf] focus:border focus:border-[#38c2cf]"
                    />
                  </div>                 
                  <div className="modal-action grid grid-cols-2 gap-4 col-span-2">
                    <div className="col-span-1 flex justify-center">
                      <button className="btn w-[50%]">
                        Cerrar
                      </button>
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <button
                        className="btn bg-[#38c2cf] border-none text-white w-[50%] px-2 py-1 rounded-lg cursor-pointer hover:bg-[#7ecdd4]"
                        type="submit"
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
          </dialog>
      </div>
      
    </AppLayout>
  )
}

export default DashboardSuministros