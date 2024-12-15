import React from 'react';
import Image from 'next/image';
import Pers from '../../assets/pers.png';

const aboutUs = () => {
  return (
    <div>
            <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6 ">
                <h3 className="text-xl text-cyan-500 leading-none mb-3">WHO WE ARE</h3>
                <p className="text-indigo-900 mb-8 pt-2">
                    We are a dynamic platform that bridges the gap between freelancers, businesses, 
                    and investors. Our mission is to create a thriving ecosystem where skills meet 
                    opportunities, ideas find funding, and collaborations drive success. Whether you're 
                    a creative professional, a growing company, or an ambitious investor, we are here 
                    to connect you and help you achieve your goals."
                  <br />
                  <br />
                </p>
            </div>
            <div className="w-full sm:w-1/2 pb-6 pl-56">
                <Image src={Pers} alt={''} height={190} width={270} />
            </div>
            </div>
    </div>
  )
}

export default aboutUs