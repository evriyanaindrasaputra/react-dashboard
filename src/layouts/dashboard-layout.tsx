import React from 'react'
import { useOutlet } from "react-router-dom";
import Sidebar from '~/components/sidebar/sidebar';

const Dashboardlayout: React.FC = () => {
  const outlet = useOutlet()
  return (
    <>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          {outlet}
        </main>
      </div>
    </>
  )
}

export default Dashboardlayout
