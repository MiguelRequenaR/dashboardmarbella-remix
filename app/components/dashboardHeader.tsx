
function DashboardHeader() {
  return (
    <div className="flex justify-between">
        <div className="flex">
            <div className='flex flex-row items-center p-4 space-x-3'>
                <i className="ri-building-2-fill text-3xl font-bold text-[#1976d2]"></i>
                <h1 className='text-2xl font-bold text-[#363949]'>Marbella</h1>
            </div>
            <div className="flex items-center ml-14">
                <i className="ri-menu-line text-xl font-bold text-[#363949] pr-8"></i>
                <form action="">
                    <input 
                        type="text"
                        placeholder="Buscar..."
                        className="bg-[#eeeeee] px-2 py-2 w-[300px] rounded-l-full focus:outline-none"
                    />
                    <button>
                        <i className="ri-search-line p-2.5 px-4 rounded-r-full text-xl bg-[#1976d2] text-white"></i>
                    </button>
                </form>
            </div>
        </div>
        <div className="flex items-center space-x-5">
            <i className="ri-notification-fill text-xl text-[#363949]"></i>
            <img
                src="/img/logoCM.png"
                alt="logo"
                width={40}
                height={10}
                className="rounded-full object-contain"
            />
        </div>
    </div>
  )
}

export default DashboardHeader