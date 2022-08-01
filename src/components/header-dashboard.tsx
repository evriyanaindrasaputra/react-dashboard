import React from 'react'
import clsx from 'clsx'
import { Menu, Transition } from '@headlessui/react'
import { BsBell, BsSearch } from 'react-icons/bs'
import { BreadcrumbItem } from "~/types/breadcrumb";
import Breadcrumb from './breadcrumb'

type HeaderDashboardProps = {
  breadcrumb: BreadcrumbItem[]
}

const HeaderDashboard: React.FC<HeaderDashboardProps> = ({ breadcrumb }) => {
  return (
    <header className="flex items-center justify-end sm:justify-between">
      <Breadcrumb items={breadcrumb} />
      <div className="flex items-center space-x-1">
        <button
          type="button"
          className=" p-1 rounded-full text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">View notifications</span>
          <BsSearch className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className=" p-1 rounded-full text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span className="sr-only">View notifications</span>
          <BsBell className="h-5 w-5" aria-hidden="true" />
        </button>
        {/* Profile dropdown */}
        <Menu as="div" className=" relative">
          <div>
            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }: { active: boolean }) => (
                  <a
                    href="#"
                    className={clsx(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Sign Out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

      </div>
    </header>
  )
}

export default HeaderDashboard
