import React from 'react'
import Breadcrumb from '~/components/breadcrumb'

const Dashboard = () => {
  return (
    <>
      <Breadcrumb items={[
        { name: 'Dashboard', slug: 'dashboard', current: true }
      ]} />
      <p>Hello Dashboard</p>
    </>
  )
}

export default Dashboard
