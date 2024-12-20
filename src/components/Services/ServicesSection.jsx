import React from 'react';
// import ArrowImg from '../../assets/HeroSection/arrow.png';
import Image from 'next/image';
import TextSlider from '../Slider/TextSlider';

// left side gradient stuff
import Shape from '../../assets/Service/shape.png';
import LeftBlobShape from '../../assets/Service/Blob-2.png';
import LeftArroundBlobShape from '../../assets/Service/Blob-11.png';

// right side gradient stuff
import RightShape from '../../assets/Service/right-shape.png';
import RightBlobShape from '../../assets/Service/Blob-12.png';
// import RightGreenBlobShape from '../../assets/Service/Blob-9.png';

import UpRightArrowImg from '../../assets/Service/up-right-arrow.png';

export default function ServicesSection() {
  return (
    <div className="relative bg-[#fef5ed] h-[1194px] overflow-hidden">
      <Image src={Shape} alt="shape" className="absolute pointer-events-none z-0" />
      <Image
        src={LeftBlobShape}
        alt="shape"
        className="absolute translate-x-[120px] translate-y-[350px] pointer-events-none"
      />
      <Image
        src={LeftArroundBlobShape}
        alt="shape"
        className="absolute translate-x-[30px] translate-y-[350px] pointer-events-none"
      />
      <div className="text-center mt-16">
        <span className="service-title uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
          Services
        </span>
      </div>
      <TextSlider />

      <div className="flex justify-center space-x-4 p-8 translate-x-0">
        {/* SEO & Analytics Box */}
        <div className="flex justify-between w-[770px] border border-orange-400 rounded-2xl shadow-md bg-white">
          <div className="flex flex-col pt-5 px-6 w-[75%]">
            <h2 className="text-xl font-bold text-[#000]">SEO & Analytics</h2>
            <p className="mt-4 text-sm text-[#000]">
              In Order To Scale New Customer Acquisition And Retention For E-Commerce Brands, We Work Across The Entire
              Customer Journey. Our Team Has A Successful
            </p>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-400 text-white rounded-full">
                <Image src={UpRightArrowImg} alt="up-right-arrow" />
              </div>
              <div className="ml-2 service-stylish-text font-bold text-xl">01</div>
            </div>
          </div>
          <div className="bg-[#C4C4C4] w-[252px] h-[226px] rounded-2xl"></div>
        </div>

        {/* Digital Strategy Box */}
        <div className="flex flex-col justify-between w-1/3 p-6 border border-green-400 rounded-2xl shadow-md bg-white translate-x-0">
          <h2 className="text-xl font-bold text-[#000]">Digital Strategy</h2>
          <p className="mt-4 text-sm text-[#000]">
            In Order To Scale New Customer Acquisition And Retention For E-Commerce Brands, We Work Across Thel
          </p>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full">
              <Image src={UpRightArrowImg} alt="up-right-arrow" />
            </div>
            <div className="ml-2 service-stylish-text text-gray-300 font-bold text-xl">02</div>
          </div>
        </div>
      </div>

      {/* <Image
        src={RightGreenBlobShape}
        alt="shape"
        className="right-[-100px] absolute translate-y-[-350px] pointer-events-none"
      /> */}
      <Image
        src={RightBlobShape}
        alt="shape"
        className="right-[0] absolute translate-x-[-80px] translate-y-[145px] pointer-events-none"
      />
      <Image src={RightShape} alt="shape" className="absolute right-[-30px] bottom-0 pointer-events-none" />
    </div>
  );
}
