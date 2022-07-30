import React from 'react'
import { NavLink } from "react-router-dom";
import { Sidebar } from '~/types/sidebar';
import clsx from 'clsx'


const SidebarItem: React.FC<Sidebar> = ({ slug, name, Icon }) => {
  return (
    <li>
      <NavLink
        to={slug}
        className={({ isActive }) => 
          clsx(isActive ? 'font-bold text-emerald-600 bg-emerald-100 border-l-4 border-emerald-300' : '', "flex items-center justify-center h-10 text-gray-700")
        }
      >
      <Icon className='w-5 h-5' />
    </NavLink>
    </li >
  )
}

export default SidebarItem
