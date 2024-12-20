import React from 'react';
import Image from 'next/image';

import Frame1 from '../../assets/Slider/Frame-1.png';
import Frame2 from '../../assets/Slider/Frame-2.png';
import Frame3 from '../../assets/Slider/Frame-3.png';
import Frame4 from '../../assets/Slider/Frame-4.png';

const sliderImages = [{ logo: Frame1 }, { logo: Frame2 }, { logo: Frame3 }, { logo: Frame4 }];

const TextSlider = () => {
  return (
    <div className="overflow-hidden mt-5">
      <div className="flex space-x-[90px] animate-scroll">
        {sliderImages.map((partner, index) => (
          <div key={index} className="flex-shrink-0 rounded-full flex items-center justify-center">
            <Image src={partner.logo} alt={partner.name} />
          </div>
        ))}

        {/* Duplicate the items to create a seamless loop */}
        {sliderImages.map((partner, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 rounded-full flex items-center justify-center">
            <Image src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
