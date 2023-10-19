import React from 'react'
import DashboardHeader from '~/components/dashboardHeader'
import DashboardSideBar from '~/components/sideBar'


function AppLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <DashboardHeader />
        <div className='flex h-screen'>
          <DashboardSideBar />
          <main className='w-full bg-[#eeeeee] rounded-tl-xl'>
            {children}
          </main>
        </div>
    </div>
  )
}

export default AppLayout