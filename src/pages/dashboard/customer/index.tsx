import React from 'react'
import HeaderDashboard from '~/components/header-dashboard'

const DashboardCustomer: React.FC = () => {
  return (
    <>
      <HeaderDashboard 
        breadcrumb={[
          { name: 'Customer', slug: '/dashboard/customer'},
        ]}
      />
      <p>Hello Dashboard Customer</p>
    </>
  )
}

export default DashboardCustomer
