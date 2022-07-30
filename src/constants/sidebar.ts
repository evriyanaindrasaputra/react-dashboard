import { RiHome8Line } from 'react-icons/ri'
import { BsPeopleFill } from 'react-icons/bs'
import { Sidebar } from '~/types/sidebar'

export const listSidebar : Array<Sidebar> = [
  { 
    name : 'Home',
    slug : '/dashboard/home',
    Icon : RiHome8Line
  },
  { 
    name : 'Customer',
    slug : '/dashboard/customer',
    Icon : BsPeopleFill
  },

]
