'use client';

import Image from 'next/image';
import ExperienceImage from '../../assets/AboutUs/experiance.png';
import SpiralImage from '../../assets/AboutUs/Spiral.png';
import HeavyWavesImage from '../../assets/AboutUs/Heavy-Waves.png';
import CircelImage from '../../assets/AboutUs/circel.png';
import ArrowImg from '../../assets/HeroSection/arrow.png';

export default function AboutUs() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute">
        <Image src={SpiralImage} alt="Spiral Image" />
      </div>

      <section className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between py-20 gap-5">
        {/* Left Side - Image */}
        <div className="relative flex-shrink-0 w-full lg:w-1/2 h-auto">
          <Image src={ExperienceImage} alt="Experience Image" />
        </div>

        {/* Right Side - Content */}
        <div className="relative lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left pr-[114px]">
          <span className="title font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F29F5C] to-[#6461FC]">
            About Us
          </span>

          <div class="headline">
            <span>We’re A Strategic</span> <span class="highlight brown">Digital</span>
            <br />
            <span class="highlight orange">Media</span> <span>Agency</span>
          </div>

          <p className="text-gray-600 mt-6 text-base md:text-lg leading-relaxed">
            In order to scale new customer acquisition and retention for e-commerce brands, we work across the entire
            customer journey. Our team has a successful track record of helping brands scale.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-8 mt-8">
            {/* Stats */}
            <div>
              <h4 className="text-3xl md:text-4xl font-bold text-gray-800 stylish-text">200+</h4>
              <p className="text-[#000] max-w-[200px]">Successful Marketing Campaigns</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-4xl font-bold text-gray-800 stylish-text">75%</h4>
              <p className="text-[#000] max-w-[200px]">Average Increase In Website Traffic</p>
            </div>

            <Image src={CircelImage} alt="arrow" />
          </div>
          {/* Button */}
          <div className="mt-8 flex items-center">
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-lg">
              About us
            </a>
            <Image src={ArrowImg} alt="arrow" />
          </div>
        </div>
      </section>
      <div className="absolute right-[20px] bottom-20">
        <Image src={HeavyWavesImage} alt="Heavy Waves Image" />
      </div>
    </div>
  );
}
