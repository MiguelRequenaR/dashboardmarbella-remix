import 'remixicon/fonts/remixicon.css'
import type { MetaFunction } from "@remix-run/node";
import DashboardHeader from '~/components/dashboardHeader'
import DashboardSideBar from '~/components/dashboardSideBar';

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
        <DashboardSideBar />
    </div>
  )
}

export default Dashboard