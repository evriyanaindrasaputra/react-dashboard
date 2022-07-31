import React from 'react'
import HeaderDashboard from '~/components/header-dashboard'
import { MdOutlineMapsHomeWork } from 'react-icons/md'
import { BsShare, BsTrash } from 'react-icons/bs'
import { BiPencil } from 'react-icons/bi'
import { SiVisa } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <HeaderDashboard
        breadcrumb={[
          { name: 'Dashboard', slug: '/dashboard/home', current: true }
        ]}
      />
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div className="bg-white shadow rounded p-4 row-span-3">
          <header>
            <span>Lokasi 1</span>
            <span>Lihat Semua</span>
          </header>
          <ol>
            <li className="bg-emerald-400 rounded-md px-3 py-4 flex items-center justify-between text-white">
              <MdOutlineMapsHomeWork className=" w-10 h-10" />
              <div>
                <p>20</p>
                <p>Induk</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="bg-white shadow rounded p-4 col-span-2">
          <header className="flex items-center justify-between py-3">
            <span className="font-semibold">Lokasi 2</span>
            <Link to="/dashboard/home" className=" text-emerald-600 text-base">Lihat semua</Link>
          </header>
          <ol className="grid grid-cols-3 gap-4 mt-2">
            <li className="bg-emerald-400 cursor-pointer rounded-md px-3 py-4 flex items-center justify-between text-white">
              <MdOutlineMapsHomeWork className=" w-10 h-10" />
              <div>
                <p>20</p>
                <p>Induk</p>
              </div>
            </li>
            <li className="bg-emerald-400 cursor-pointer rounded-md px-3 py-4 flex items-center justify-between text-white">
              <MdOutlineMapsHomeWork className=" w-10 h-10" />
              <div>
                <p>20</p>
                <p>Induk</p>
              </div>
            </li>
            <li className="bg-emerald-400 cursor-pointer rounded-md px-3 py-4 flex items-center justify-between text-white">
              <MdOutlineMapsHomeWork className=" w-10 h-10" />
              <div>
                <p>20</p>
                <p>Induk</p>
              </div>
            </li>
          </ol>
        </div>
        <div className="bg-white shadow rounded p-4">
          <header className="flex items-center justify-between py-3">
            <span className="font-semibold">Akun Bank</span>
            <button className=" bg-emerald-600 py-1 px-4 rounded transition-transform ease-in hover:scale-105 duration-150  ">
              <span className="text-white text-sm">+ Tambah Akun Bank</span>
            </button>
          </header>
          <ol className=" space-y-7 mt-2">
            <li className="flex items-start justify-between h-[100px]">
              <div className=" flex items-end justify-end p-2 w-[150px] h-full rounded-md bg-gradient-to-br from-yellow-200  to-emerald-600">
                <SiVisa className="w-10 h-10 text-white" />
              </div>
              <div className="flex flex-col h-full justify-between">
                <p className="font-bold">Bank KB Bukopin</p>
                <div className=" text-gray-400 text-sm">
                  <p>***** 5525 - Si Tampan</p>
                  <p className=" uppercase">USD</p>
                </div>
              </div>
              <div className='flex items-center space-x-2'>
                <button>
                  <BiPencil className="w-4 h-4 text-emerald-400" />
                </button>
                <button>
                  <BsTrash className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </li>
            <li className="flex items-start justify-between h-[100px]">
              <div className=" flex items-end justify-end p-2 w-[150px] h-full rounded-md bg-gradient-to-br from-yellow-200  to-emerald-600">
                <SiVisa className="w-10 h-10 text-white" />
              </div>
              <div className="flex flex-col h-full justify-between">
                <p className="font-bold">Bank KB Bukopin</p>
                <div className=" text-gray-400 text-sm">
                  <p>***** 5525 - Si Tampan</p>
                  <p className=" uppercase">USD</p>
                </div>
              </div>
              <div className='flex items-center space-x-2'>
                <button>
                  <BiPencil className="w-4 h-4 text-emerald-400" />
                </button>
                <button>
                  <BsTrash className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </li>
          </ol>
        </div>
        <div className="bg-white shadow rounded p-4 row-span-2">
          <header className="flex items-center justify-between py-3">
            <span className="font-semibold">Aktivitas</span>
          </header>
          <ol className="mt-2 space-y-5">
            <li>
              <p className=" text-base break-words text-gray-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis unde corrupti dolorem voluptatum, animi fugit!</p>
              <span className=" text-sm text-gray-300">Hari ini, 06:00</span>
            </li>
            <li>
              <p className=" text-base break-words text-gray-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis unde corrupti dolorem voluptatum, animi fugit!</p>
              <span className=" text-sm text-gray-300">Hari ini, 06:00</span>
            </li>
            <li>
              <p className=" text-base break-words text-gray-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis unde corrupti dolorem voluptatum, animi fugit!</p>
              <span className=" text-sm text-gray-300">Hari ini, 06:00</span>
            </li>
            <li>
              <p className=" text-base break-words text-gray-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis unde corrupti dolorem voluptatum, animi fugit!</p>
              <span className=" text-sm text-gray-300">Hari ini, 06:00</span>
            </li>
            <li>
              <p className=" text-base break-words text-gray-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis unde corrupti dolorem voluptatum, animi fugit!</p>
              <span className=" text-sm text-gray-300">Hari ini, 06:00</span>
            </li>
          </ol>
        </div>
        <div className="bg-white shadow rounded p-4">
          <header className="flex items-center justify-between py-3">
            <span className="font-semibold">Relasi</span>
            <Link to="/dashboard/home" className=" text-emerald-600 text-base">Lihat semua</Link>
          </header>
          <ol className="mt-3 space-y-6">
            <li className="flex items-center space-x-3">
              <BsShare className="w-5 h-5" />
              <div>
                <p className="text-xl font-bold leading-4">20</p>
                <span className="text-sm text-gray-400 font-medium ">Memiliki</span>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <BsShare className="w-5 h-5" />
              <div>
                <p className="text-xl font-bold leading-4">20</p>
                <span className="text-sm text-gray-400 font-medium ">Memiliki</span>
              </div>
            </li>
            <li className="flex items-center space-x-3">
              <BsShare className="w-5 h-5" />
              <div>
                <p className="text-xl font-bold leading-4">20</p>
                <span className="text-sm text-gray-400 font-medium ">Memiliki</span>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}

export default Dashboard
