'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/Header/logo.png';
import Phone from '../../assets/Header/phone.png';
import Message from '../../assets/Header/message.png';
import FaceBook from '../../assets/Header/facebook.png';
import Twitter from '../../assets/Header/twitter.png';
import LinkedIn from '../../assets/Header/linkedinIn.png';
import YouTube from '../../assets/Header/youtube.png';
import Search from '../../assets/Header/search.png';

export default function Header() {
  return (
    <header className="bg-white fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1350px] z-50 text-white shadow-lg rounded-bl-[20px] rounded-br-[20px]">
      {/* Top Bar */}
      <div className="bg-black rounded-bl-[20px] rounded-br-[20px]">
        <div className="max-w-[1350px] mx-auto flex items-center justify-between px-4 lg:px-16 py-2">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span>
                <Image src={Phone} alt="phone" />
              </span>{' '}
              <a href="tel:+448001957512">+44 800 195 7512</a>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Image src={Message} alt="message" />
              </span>{' '}
              <a href="mailto:team@webxcell.com">team@webxcell.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-orange-500">
              <Image src={FaceBook} alt="FaceBook" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Image src={Twitter} alt="Twitter" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Image src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Image src={YouTube} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-[#eff1fe] text-black rounded-bl-[20px] rounded-br-[20px]">
        <div className="max-w-[1350px] mx-auto flex items-center justify-between py-4 px-4 lg:px-16 rounded-bl-[20px] rounded-br-[20px]">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Image src={Logo} alt="webxcell" />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex gap-8 font-medium">
            <a href="#" className="hover:text-orange-500">
              Home
            </a>
            <a href="#" className="hover:text-orange-500">
              About Us
            </a>
            <a href="#" className="hover:text-orange-500">
              Services
            </a>
            <a href="#" className="hover:text-orange-500">
              Portfolio
            </a>
            <a href="#" className="hover:text-orange-500">
              Blog
            </a>
            <a href="#" className="hover:text-orange-500">
              Contact Us
            </a>
            <div className="flex items-center">
              <Image src={Search} alt="search" />
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm bg-gradient-to-r from-[#ff6700] to-[#00bfff] text-white px-6 py-2 rounded-lg shadow-lg">
              WORK WITH US
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
