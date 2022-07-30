import React from 'react'
import { listSidebar } from '~/constants/sidebar'
import SidebarItem from './sidebar-item'

const Sidebar: React.FC = () => {
  return (
    <aside
      className="w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white "
    >
      <div className="flex items-center justify-center py-4">
        <span className="leading-10 text-indigo-500 text-2xl font-bold ml-1 uppercase">Brandname</span>
      </div>
      <div className="px-4 py-6">
        <ul className="flex flex-col w-full space-y-3">
          {listSidebar.map((item) => (
            <SidebarItem 
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
