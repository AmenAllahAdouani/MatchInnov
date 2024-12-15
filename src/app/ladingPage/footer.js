import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const footer = () => {
  return (
    <div>
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-cyan-500 uppercase dark:text-white">Contact</h2>
                            <ul className="text-indigo-900 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    contact@matchinnov.co
                                </li>
                                <li className="mb-4">
                                    support@matchinnov.co
                                </li>
                                <li>
                                    +216 21559612
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-cyan-500 uppercase dark:text-white">About us</h2>
                            <ul className="text-indigo-900 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">What is Machinnov</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blogs</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Matchinnov Community</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-cyan-500 uppercase dark:text-white">Support</h2>
                            <ul className="text-indigo-900 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Help center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-cyan-500 uppercase dark:text-white">Subscribe to our newsletter</h2>
                            <div className="flex items-center">
                                <Input placeholder='Email address' />
                                <Button className='ml-1'>
                                    <SendIcon className='text-white h-6 w-6'/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default footer