import React from 'react'
import Breadcrumb from '~/components/breadcrumb'

const DashboardCustomer: React.FC = () => {
  return (
    <>
      <Breadcrumb items={[
        { name: 'Customer', slug: 'dashboard/customer'},
      ]} />
      <p>Hello Dashboard Customer</p>
    </>
  )
}

export default DashboardCustomer
