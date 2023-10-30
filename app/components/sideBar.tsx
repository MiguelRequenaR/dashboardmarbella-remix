import { Link } from "@remix-run/react"

function DashboardSideBar() {
      
  return (
    <div>    
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Abrir</label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-56 min-h-full bg-[#ffffff] text-base-content space-y-6 pt-20">
                    <Link to='/dashboard'>
                        <li>
                            <a href="" className="text-lg font-bold text-[#388e3c]">Panel Principal</a>
                        </li>
                    </Link>
                    <Link to='/suministros'>
                        <li>
                            <h1 className="text-lg font-bold text-[#363949]">Suministros</h1>
                        </li>
                    </Link>
                    <Link to='/project'>
                        <li>
                            <a href="" className="text-lg font-bold text-[#363949]">Proyectos</a>
                        </li>
                    </Link>           
                    <Link to='/reportes'>                
                        <li>
                            <a href="" className="text-lg font-bold text-[#363949]">Reportes</a>
                        </li>
                    </Link>
                    <Link to='/'>                   
                        <li>     
                            <a href="" className="text-lg font-bold text-[#ff6969]">Salir</a>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default DashboardSideBar