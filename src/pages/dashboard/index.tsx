import React from 'react'
import Breadcrumb from '~/components/breadcrumb'
import HeaderDashboard from '~/components/header-dashboard'

const Dashboard = () => {
  return (
    <>
      <HeaderDashboard
        breadcrumb={[
          { name: 'Dashboard', slug: 'dashboard', current: true }
        ]}
      />
      <p>Hello Dashboard</p>
    </>
  )
}

export default Dashboard
