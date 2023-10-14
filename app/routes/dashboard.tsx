import 'remixicon/fonts/remixicon.css'
import DashboardHeader from '~/components/dashboardHeader'
import type { MetaFunction } from "@remix-run/node";

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
    </div>
  )
}

export default Dashboard