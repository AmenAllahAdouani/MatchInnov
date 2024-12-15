import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BroadcastOnPersonalIcon from '@mui/icons-material/BroadcastOnPersonal';

const navBar = () => {
  return (
    <div className="mb-28">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <BroadcastOnPersonalIcon className='bg-violet-700 text-white rounded-3xl h-10 w-10 p-2' />
                    <span className="self-center text-2xl font-pacifico font-bold not-italic text-violet-700">Rezilla</span>
                </a>

                <div className="flex space-x-8 rtl:space-x-reverse text-violet-700 font-pacifico font-medium">
                    <a href="#home" className="hover:text-violet-500">Home</a>
                    <a href="#blogs" className="hover:text-violet-500">About</a>
                    <a href="#listening" className="hover:text-violet-500">Services</a>
                    <a href="#services" className="hover:text-violet-500">Listening</a>
                    <a href="#about" className="hover:text-violet-500">Blogs</a>
                </div>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-violet-700 hover:bg-gray-800 font-pacifico not-italic rounded-3xl text-base px-4 py-2 text-center"><KeyboardArrowRightIcon className='text-white h-8 w-8'/> Get started</button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default navBar


