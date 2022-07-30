import React from 'react'
import { Link } from "react-router-dom";
import { Sidebar } from '~/types/sidebar';


const SidebarItem : React.FC<Sidebar> = ({slug, name, Icon}) => {
  return (
    <li>
      <Link
        to={slug}
        className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
      >
        <Icon className='w-5 h-5' />
        <span className="ml-3">{name}</span>
      </Link>
    </li>
  )
}

export default SidebarItem
