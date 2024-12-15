import React from 'react';
import Image from 'next/image';
import Google from '../../assets/google.png';
import Amazon from '../../assets/amazon.webp';
import Logitech from '../../assets/Logitech.png';
import Netflix from '../../assets/Netflix.png';
import Spotify from '../../assets/Spotify.png';
import Samsung from '../../assets/samsung.webp';
import Solution from '../../assets/solution.svg';

const Infos = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Gradient Background */}
      <div className="absolute mb-52 inset-0 bg-gradient-to-b from-white to-blue-100 rounded-b-[40rem]"></div>

      {/* Header Section */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center lg:text-left">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-violet-700 leading-tight">
              Bring together talents, businesses, and investors on one platform to turn ideas into reality and achieve success together
            </h1>
          </div>

          <div className="relative w-full max-w-sm lg:max-w-md mx-auto mt-10 lg:mt-0">
            <Image
              src={Solution}
              alt="Illustration of people collaborating"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-16">
        <div className="bg-white shadow-lg rounded-full py-4 px-6 flex items-center justify-center">
          <p className="text-gray-900 font-semibold">72k+ Freelancers</p>
        </div>
        <div className="bg-white shadow-lg rounded-full py-4 px-6 flex items-center justify-center">
          <p className="text-gray-900 font-semibold">200+ Investors</p>
        </div>
        <div className="bg-white shadow-lg rounded-full py-4 px-6 flex items-center justify-center">
          <p className="text-gray-900 font-semibold">72k+ Freelancers</p>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <footer className="bg-white py-10 mt-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by 100+ Companies across the globe!</p>
          <div className="flex justify-center items-center space-x-6">
            <Image src={Google} alt="Google" width={100} height={40} />
            <Image src={Amazon} alt="Amazon" width={100} height={40} />
            <Image src={Logitech} alt="Logitech" width={100} height={40} />
            <Image src={Spotify} alt="Spotify" width={100} height={40} />
            <Image src={Samsung} alt="Samsung" width={100} height={40} />
            <Image src={Netflix} alt="Netflix" width={100} height={40} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Infos;
