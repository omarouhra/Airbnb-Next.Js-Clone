import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon
} from '@heroicons/react/solid'


function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* left  */ }
            <div className='relative flex items-center justify-center h-10 cursor-pointer my-auto'>
                <Image src='https://links.papareact.com/qd3'
                    layout="fill"
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            {/* Middle */ }
            <div className="flex items-center  md:border-2 rounded-full py-2 md:shadow-sm ">
                <input className="pl-5 outline-none bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search" />
                <SearchIcon className=" hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2" />

            </div>
            {/* Right */ }
            <div className='flex items-center justify-end space-x-4 text-gray-500'>
                <p className='hidden md:inline'>Become a host</p>
                <GlobeAltIcon className='hidden md:inline-flex h-6 cursor-pointer' />

                <div className=' flex item-center space-x-2 border-2 border-gray-300 p-2 rounded-full'>
                    <MenuIcon className='h-6 cursor-pointer'/>
                    <UserCircleIcon className='h-6 cursor-pointer' />
                </div>
            </div>
        </header>
    )
}

export default Header
