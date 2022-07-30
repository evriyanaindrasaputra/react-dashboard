import React from 'react'
import { useOutlet } from "react-router-dom";
import Sidebar from '~/components/sidebar/sidebar';

const Dashboardlayout: React.FC = () => {
  const outlet = useOutlet()
  return (
    <>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <main className="flex flex-col py-3 px-5 flex-grow">
          {outlet}
        </main>
      </div>
    </>
  )
}

export default Dashboardlayout
