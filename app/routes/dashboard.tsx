import 'remixicon/fonts/remixicon.css'
import type { MetaFunction } from "@remix-run/node";
import DashboardHeader from '~/components/dashboardHeader'
import DashboardSideBar from '~/routes/dashboard/dashboardSideBar';
import DashboardPP from '~/routes/dashboard/dashboardPP';

export const meta: MetaFunction = () => {
    return [
      { title: "Dashboard - Marbella" },
      { name: "description", content: "Bienvenido al Login" },
    ];
  };

function Dashboard() {
  return (
    <div>
        <DashboardHeader />
        <div className='flex h-screen'>
          <DashboardSideBar />
          <DashboardPP />
        </div>
    </div>
  )
}

export default Dashboard