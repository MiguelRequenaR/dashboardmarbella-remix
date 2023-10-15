

function DashboardSideBar() {
  return (
    <div>
        <div className="pl-10 pt-20 h-screen">
            <ul className="space-y-8">
                <li className="border rounded-l-xl border-r-0 bg-[#eeeeee] border-[#eeeeee] py-2 px-2 ">
                    <i className="ri-dashboard-line text-xl font-bold mr-2 text-[#388e3c]"></i>
                    <a href="" className="text-lg font-bold text-[#388e3c]">Dashboard</a>
                </li>
                <li>
                    <i className='ri-line-chart-line text-xl font-bold mr-2 text-[#363949]'></i>
                    <a href="" className="text-lg font-bold text-[#363949]">Análisis</a>
                </li>
                <li>
                    <i className="ri-chat-3-line text-xl font-bold mr-2 text-[#363949]"></i>
                    <a href="" className="text-lg font-bold text-[#363949]">Mensaje</a>
                </li>
                <li>
                    <i className="ri-group-line text-xl font-bold mr-2 text-[#363949]"></i>
                    <a href="" className="text-lg font-bold text-[#363949]">Usuarios</a>
                </li>
                <li>    
                    <i className="ri-settings-2-line text-xl font-bold mr-2 text-[#363949]"></i>
                    <a href="" className="text-lg font-bold text-[#363949]">Configuración</a>
                </li>
            </ul>
            <ul className="mt-12">
                <li>
                    <i className="ri-logout-box-line text-xl font-bold mr-2 text-[#d5422f]"></i>
                    <a 
                        href="" 
                        className="text-lg font-bold text-[#d5422f]">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DashboardSideBar