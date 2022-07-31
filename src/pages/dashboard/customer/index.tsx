import React from 'react'
import HeaderDashboard from '~/components/header-dashboard'
import TableCustomer from '~/components/table/table-customer'

const DashboardCustomer: React.FC = () => {
  return (
    <>
      <HeaderDashboard 
        breadcrumb={[
          { name: 'Customer', slug: '/dashboard/customer'},
        ]}
      />
      <TableCustomer />
    </>
  )
}

export default DashboardCustomer
