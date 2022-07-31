import React from 'react'
import HeaderDashboard from '~/components/header-dashboard'
import { MdOutlineMapsHomeWork, MdOutlineEmail } from 'react-icons/md'
import { BsShare, BsTrash, BsTelephone } from 'react-icons/bs'
import { BiPencil } from 'react-icons/bi'
import { SiVisa } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { TbWorld } from 'react-icons/tb'
import { Switch } from '@headlessui/react'
import clsx from 'clsx'

const Dashboard = () => {
  const [active, setActive] = React.useState<boolean>(true)
  return (
    <>
      <HeaderDashboard
        breadcrumb={[
          { name: 'Dashboard', slug: '/dashboard/home', current: true }
        ]}
      />
      <section className="grid grid-cols-1 xl:grid-cols-home-dashboard gap-5 mt-5">
        <div className="bg-white shadow rounded xl:row-span-3 overflow-hidden">
          <img
            className="w-full h-32 object-cover"
            src="https://images.unsplash.com/photo-1576496352276-9f1e2ed2fb2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80"
            alt="photo wall building"
          />
          <header className=" -mt-16 flex flex-col items-center">
            <img
              className="w-32 h-32 object-cover rounded-full shadow-lg"
              src="https://images.unsplash.com/photo-1641444556999-30742a0b8123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
              alt="profile customer"
            />
            <h2 className="mt-10 text-lg font-bold capitalize">mitramas infosys global</h2>
            <p className=" text-gray-500 text-sm">Layanan IT</p>
            <button className="text-emerald-600 space-x-1 mt-5">
              <BiPencil className=" w-4 h-4 inline-block " />
              <span className=" text-sm"> Sunting profil </span>
            </button>
          </header>
          <div className="px-4 pb-4 space-y-2 mt-10">
            <div>
              <p className="text-gray-500 text-sm">Status Perusahaan</p>
              <div className="flex items-center justify-between py-2">
                <span className={clsx(active ? "text-teal-700" : "text-gray-800",
                  " text-sm capitalize"
                )}>{active ? "active" : "not active"}</span>
                <Switch
                  checked={active}
                  onChange={setActive}
                  className={`${active ? 'bg-teal-700' : 'bg-gray-800'}
                  relative inline-flex h-5 w-8 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">status perusahaan</span>
                  <span
                    aria-hidden="true"
                    className={`${active ? 'translate-x-3' : 'translate-x-0'}
                    pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Singkatan</p>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-800 text-sm capitalize">MIG</span>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Alamat Perusahaan</p>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-800 text-sm capitalize">JL. Tebet Raya NO 42, Jakarta Selatan</span>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Penanggung Jawab (PIC)</p>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-800 text-sm capitalize">Jhon doe</span>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Tanggal PKP</p>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-800 text-sm capitalize">03 Maret 2021</span>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <div className="flex items-center py-2 text-emerald-500 space-x-2">
                <MdOutlineEmail className="w-4 h-4" />
                <span className=" text-sm underline">mig@mitrasolusi.group</span>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">No. Telp</p>
              <div className="flex items-center py-2 text-emerald-500 space-x-2">
                <BsTelephone className="w-4 h-4" />
                <span className="text-sm">021-5678-1234</span>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Situs Web</p>
              <div className="flex items-center py-2 text-emerald-500 space-x-2">
                <TbWorld className="w-4 h-4" />
                <span className="text-sm underline">mitramas.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded p-4 xl:col-span-2">
          <header className="flex items-center justify-between py-3">
            <span className="font-semibold">Lokasi</span>
            <Link to="/dashboard/home" className=" text-emerald-600 text-base">Lihat semua</Link>
          </header>
          <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-2">
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
          <ol className=" mt-2 grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5">
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
        <div className="bg-white shadow rounded p-4 xl:row-span-2">
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
