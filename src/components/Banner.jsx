import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bag from '../assets/images/bag.png'

const Banner = () => {
  const [data, setData] = useState([]);
  const [logoData, setLogoData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
    const getBanner = async () => {
      try {
        const response = await axios.get('https://tackletips.in/api/index');
        if (response.data) {
          setData(response.data.data.slider);
          console.log(response);
          setLogoData(response.data.data.brands);
          console.log(logoData,"hhhhh")
        } else {
          console.log("No slider data found in the response.");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBanner();
  }, []);

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed (in ms)
  };


  const handleNext = () => {
    if (currentIndex + 1 < logoData.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  

  return (
    <div className='md:mt-10  md:px-16 group'>
     <div className='relative'>
      {data.length > 0 ? (
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.img_id} className='w-full'>
              <img
                src={`https://tackletips.in/uploads/home-slider/${item.img_name}`}
                alt="Banner"
                // style={{ width: '100%', height: 'auto' }}
                className="w-full h-full"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p className='flex items-center justify-center text-base md:text-xl'>Loading...</p>
      )}
      <button className='flex items-center gap-1 bg-black text-white text-[7px] sm:text-[10px] md:text-sm px-2 sm:px-4 md:px-6 py-[5px] sm:py-[7px] md:py-[10px] rounded-[2px] absolute bottom-5 left-0 md:bottom-28 md:left-28 opacity-0 group-hover:opacity-100 transition-opacity duration-300'><img src={bag} alt="img" className='w-[10px] sm:w-[13px] md:w-[20px]' /> START SHOPPING</button>
    </div>

    <div className='relative px-10 sm:px-0 border'>
    <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center gap-1 max-w-6xl mx-auto border'>
        {logoData.length > 0 ? logoData?.slice(currentIndex, currentIndex + 6 ).map((item, index)=>(
            <div key={index} className='border border-stone-700 w-[w-100px]  sm:w-[140px]  md:w-[180px] flex items-center justify-center '>
                {/* <img src={`https://tackletips.in/uploads/brands/logo/${item?.brand_image}`} alt="img" className='w-[150px] object-cover' /> */}
                <img src={`https://tackletips.in/uploads/brands/logo/${item.brand_image}`} alt="img" className=' w-[70px] sm:w-[100px] md:w-[150px] h-[80px] md:h-[100px] object-contain' />
            </div>
        )): <h1>no data</h1>}
    </div>
    <div className='absolute top-0 bottom-0 left-0 right-0 w-full flex justify-between items-center px-5 border'>
          <button onClick={handlePrev} disabled={currentIndex === 0} className='px-5 py-2 bg-black text-white'>left</button>
          <button onClick={handleNext} disabled={currentIndex + 1 >= logoData.length} className='px-5 py-2 bg-black text-white'>right</button>
        </div>
    </div>
    
    </div>

  );
};

export default Banner;







