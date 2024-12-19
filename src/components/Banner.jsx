// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { RxDotFilled } from "react-icons/rx";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

// const Banner = () => {

//     const [data, setData] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(null);

//     useEffect(()=>{
//         const getBanner = async()=>{
//             try {
//                 const response = await axios.get('https://tackletips.in/api/index')
//                 if(response.data){
//                     setData(response.data.data.slider)
//                     setCurrentIndex(response.data.data.slider.img_id)
//                 }else{
//                     console.log("No slider data found in the response.");
//                 }
//                 console.log(data, "gggg")
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         getBanner();
//     },[]);

    

//     const previousSlide = ()=>{
//         setCurrentIndex(prev => prev === 0 ? bannerSlides.length - 1 : prev - 1);
//     }

//     const nextSlide = ()=> {
//         setCurrentIndex(prev => prev === bannerSlides.length - 1 ? 0 : prev + 1);
//       };

//       useEffect(()=>{
//         const interval = setInterval(()=>{
//             nextSlide();     
//         }, 3000)
//         return ()=> clearInterval(interval)
//       },[currentIndex])

//     return (
//         // <div className='flex'>
//         //   {data.length > 0 ? data.map((item, index) => (
//         //     <div key={index} className='w-full'>
//         //       <img src={`https://tackletips.in/uploads/home-slider/${item.img_name}`} alt="img.jpg" className='w-[w-full] h-[200px]' />
//         //     </div>
//         //   )) : <h1>Loading...</h1>}
//         // </div>

//         <div className='py-2 px-3'>
//         <div className='max-w-[1490px] h-96 mx-auto overflow-hidden relative group rounded'>
//         {data.map((item)=>(
//             <div>
//                 <img src={`https://tackletips.in/uploads/home-slider/${item.img_name[currentIndex]}`} alt="img" className='w-full h-full bg-center bg-cover transition ease-in-out duration-500 ' />
//             </div>
//         ))}
//         </div>
//     </div>
//       );
      
// }

// export default Banner






