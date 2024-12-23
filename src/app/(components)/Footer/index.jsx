import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-[#fef8f2] h-auto md:h-[596px] relative overflow-hidden">
      <div className="absolute left-0 hidden md:block">
        <Image src="/assets/footer/Ellipse.png" alt="" width={976} height={976} />
      </div>
      <div className="absolute hidden md:block">
        <Image src="/assets/footer/left.png" alt="" width={134} height={130} />
      </div>
      <div className="container mx-auto relative z-30 px-5">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap justify-start md:justify-around py-10 px-10 md:py-40 gap-10">
            {/* Logo and Social Links */}
            <div className="flex flex-col gap-5 items-start">
              <Image src="/assets/footer/logo.png" alt="logo" width={160} height={24} />
              <div className="flex gap-5 flex-col md:flex-row items-center md:items-start">
                <span className="text-[#000] footer-title relative">
                  <span className="absolute bottom-[11px] left-[-35px] w-6 h-[1px] bg-black hidden md:block" />
                  Digital Engineers
                </span>
                <div className="flex items-center gap-4 text-xl">
                  <a href="#">
                    <Image src="/assets/footer/facebook.png" alt="FaceBook" width={10} height={16} />
                  </a>
                  <a href="#">
                    <Image src="/assets/footer/twitter.png" alt="Twitter" width={16} height={16} />
                  </a>
                  <a href="#">
                    <Image src="/assets/footer/linkedinIn.png" alt="LinkedIn" width={14} height={14} />
                  </a>
                  <a href="#">
                    <Image src="/assets/footer/youtube.png" alt="YouTube" width={18} height={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-semibold mb-4 footer-title relative">
                <span className="text-black">Quick Links</span>
                <span className="absolute bottom-[-8px] left-0 w-5 h-[1px] bg-orange-500" />
                <span className="absolute bottom-[-8px] left-7 w-16 h-[1px] bg-black" />
              </h3>
              <ul className="space-y-2 text-center md:text-left">
                <li className="flex items-center gap-2 justify-start">
                  <Image src="/assets/footer/___icon.png" alt="" width={18} height={18} />
                  <a href="#" className="text-[#101010] hover:text-orange-500">
                    About
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-start">
                  <Image src="/assets/footer/___icon.png" alt="" width={18} height={18} />
                  <a href="#" className="text-[#101010] hover:text-orange-500">
                    Contact Us
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-start">
                  <Image src="/assets/footer/___icon.png" alt="" width={18} height={18} />
                  <a href="#" className="text-[#101010] hover:text-orange-500">
                    Blog & News
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-start">
                  <Image src="/assets/footer/___icon.png" alt="" width={18} height={18} />
                  <a href="#" className="text-[#101010] hover:text-orange-500">
                    FAQ's
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-start">
                  <Image src="/assets/footer/___icon.png" alt="" width={18} height={18} />
                  <a href="#" className="text-[#101010] hover:text-orange-500">
                    Login / Register
                  </a>
                </li>
              </ul>
            </div>
            {/* Our Services */}
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-semibold mb-4 footer-title relative">
                <span className="text-black">Our Services</span>
                <span className="absolute bottom-[-8px] left-0 w-5 h-[1px] bg-orange-500" />
                <span className="absolute bottom-[-8px] left-7 w-16 h-[1px] bg-black" />
              </h3>
              <ul className="space-y-2 text-center md:text-left">
                <li className="flex items-center gap-2 justify-start">
                  <Image src="/assets/footer/___icon.png" alt="" width={18} height={18} />
                  <a href="#" className="text-[#101010] hover:text-orange-500">
                    Digital Marketing
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-start">
                  <Image src="/assets/footer/___icon.png" alt="" width={18} height={18} />
                  <a href="#" className="text-[#101010] hover:text-orange-500">
                    Web Development
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-start">
                  <Image src="/assets/footer/___icon.png" alt="" width={18} height={18} />
                  <a href="#" className="text-[#101010] hover:text-orange-500">
                    SEO Optimized
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-start">
                  <Image src="/assets/footer/___icon.png" alt="" width={18} height={18} />
                  <a href="#" className="text-[#101010] hover:text-orange-500">
                    App Development
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-start">
                  <Image src="/assets/footer/___icon.png" alt="" width={18} height={18} />
                  <a href="#" className="text-[#101010] hover:text-orange-500">
                    Email Marketing
                  </a>
                </li>
              </ul>
            </div>
            {/* Newsletter */}
            <div className="flex flex-col gap-5 items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4 footer-title max-w-[235px] relative">
                <span className="text-black">Keep Abreast With Latest In Digital Transformation</span>
                <span className="absolute bottom-[-8px] left-0 w-5 h-[1px] bg-orange-500" />
                <span className="absolute bottom-[-8px] left-7 w-16 h-[1px] bg-black" />
              </h3>
              <div className="relative w-full max-w-[300px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-4 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="absolute top-1/2 transform -translate-y-1/2 right-[6px] text-white rounded-lg hover:bg-orange-600">
                  <Image src="/assets/footer/send.png" alt="send" width={48} height={48} />
                </button>
              </div>
            </div>
            {/* Message Image */}
            <div className="flex-col gap-5 hidden md:flex">
              <Image src="/assets/footer/message.png" alt="" width={116} height={95} />
            </div>
          </div>
          <hr className="border-[#c4c4c4]" />
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-5 mb-5 space-y-2 md:space-y-0">
            <span className="text-[#000] footer-title text-center">© All Copyright 2024 by Webxcell Digital</span>
            <span className="text-[#000] footer-title text-center">
              Privacy Notice | Terms & Conditions | Cookies Policy
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden md:block">
        <Image src="/assets/footer/right.png" alt="" width={134} height={130} />
      </div>
    </div>
  );
};

export default Footer;
