import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBanner = async () => {
      try {
        const response = await axios.get('https://tackletips.in/api/index');
        if (response.data) {
          setData(response.data.data.slider);
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

  return (
    <div className='md:mt-10  md:px-16 border'>
      {data.length > 0 ? (
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.img_id} className='w-full h-40 md:h-96'>
              <img
                src={`https://tackletips.in/uploads/home-slider/${item.img_name}`}
                alt="Banner"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Banner;







