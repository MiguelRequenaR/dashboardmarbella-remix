
function DashboardHeader() {
  return (
    <div className="flex justify-between">
        <div className="flex">
            <div className='flex flex-row items-center p-4 space-x-3'>
                <i className="ri-building-2-fill lg:text-4xl sm:text-2xl font-bold text-[#1976d2]"></i>
                <h1 className='lg:text-4xl sm:text-2xl font-bold text-[#363949]'>Marbella</h1>
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