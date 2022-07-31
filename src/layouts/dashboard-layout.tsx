import React from 'react'
import { useNavigate, useOutlet } from "react-router-dom";
import Sidebar from '~/components/sidebar/sidebar';
import { useAuthContext } from '~/context/auth-context';

const Dashboardlayout: React.FC = () => {
  const { token } = useAuthContext()
  const navigate = useNavigate()
  const outlet = useOutlet()
  React.useEffect(() => {
    if(!token){
      return navigate("/", { replace: true });
    }
  },[])
  return (
    <>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <main className="flex flex-col ml-16 py-3 px-5 flex-grow">
          {outlet}
        </main>
      </div>
    </>
  )
}

export default Dashboardlayout
