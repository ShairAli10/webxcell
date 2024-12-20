'use client';

import Image from 'next/image';
import bgImage from '../../assets/HeroSection/bg.png';
import ArrowImg from '../../assets/HeroSection/arrow.png';
import FBImg from '../../assets/HeroSection/fb.png';
import InstagramImg from '../../assets/HeroSection/instagram.png';
import TwitterImg from '../../assets/HeroSection/twitter.png';
import YoutubeImg from '../../assets/HeroSection/youtube.png';
import PatternsImg from '../../assets/HeroSection/patterns.png';
import VideoIcon from '../../assets/HeroSection/video_icon.png';

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center px-40"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}>
      {/* Content */}
      <div className="relative text-white max-w-3xl px-4">
        <h1 className="text-5xl md:text-8xl font-extrabold leading-tight">
          Your Digital Future <br />
          <span className="mt-10 block">Designed Today</span>
        </h1>

        <p className="mt-20 text-lg md:text-xl">
          Transforming Visions Into Digital Experiences That Inspire And Engage
        </p>
        <div className="mt-8 flex items-center">
          <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-lg">
            View Services
          </a>
          <Image src={ArrowImg} alt="arrow" />
        </div>
      </div>

      {/* Side Social Icons */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-4">
        <a
          href="#"
          className="w-10 h-10 border border-[#fff] rounded-full flex items-center justify-center hover:bg-orange-500">
          <Image src={FBImg} alt="facebook" />
        </a>
        <a
          href="#"
          className="w-10 h-10 border border-[#fff] rounded-full flex items-center justify-center hover:bg-orange-500">
          <Image src={InstagramImg} alt="instagram" />
        </a>
        <a
          href="#"
          className="w-10 h-10 border border-[#fff] rounded-full flex items-center justify-center hover:bg-orange-500">
          <Image src={TwitterImg} alt="instagram" />
        </a>
        <a
          href="#"
          className="w-10 h-10 border border-[#fff] rounded-full flex items-center justify-center hover:bg-orange-500">
          <Image src={YoutubeImg} alt="youtubeImg" />
        </a>
      </div>
      <div className="absolute right-[293px]">
        <Image src={VideoIcon} alt="VideoIcon" />
      </div>
      <div className="absolute left-0 bottom-3">
        <Image src={PatternsImg} alt="youtubeImg" />
      </div>
    </section>
  );
}
