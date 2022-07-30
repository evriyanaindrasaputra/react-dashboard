import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { listSidebar } from '~/constants/sidebar'
import SidebarItem from './sidebar-item'

const Sidebar: React.FC = () => {
  return (
    <aside
      className="w-16 shadow bg-white "
    >
      <Link to='/dashboard/home' className="flex items-center justify-center py-4">
        <FaGithub className="text-indigo-500 w-8 h-8" />
      </Link>
      <div>
        <ul className="flex flex-col w-full space-y-3">
          {listSidebar.map((item) => (
            <SidebarItem
              key={item.slug}
              name={item.name}
              slug={item.slug}
              Icon={item.Icon}
            />
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
