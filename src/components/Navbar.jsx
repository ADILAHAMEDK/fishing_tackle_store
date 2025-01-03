import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import arrowDown3 from '../assets/images/arrowDown3.svg'
import arrowDown from '../assets/images/arrowDown.png'
// import user from '../assets/images/user.svg'
import user from '../assets/images/user.png'
import search from '../assets/images/search.svg'
import smallLogo from '../assets/images/smallLogo.png'
import tab from '../assets/images/tab.png'
import tabWhite from '../assets/images/tabwhite.png'
import bigLogo from '../assets/images/logo.png'
import tabArrowDown from '../assets/images/tabArrowDown.png'
import arrowRightIcon from '../assets/images/righticon.svg'

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const [rod, setRod] = useState(false);
    const [line, setLine] = useState(false);
    const [lore, setLore] = useState(false);
    const [accessories, setAccessories] = useState(false);
    const [terminal, setTerminal] = useState(false);
    const [apparel, setApparel] = useState(false);
    const [brand, setBrand] = useState(false);
    const [arrival, setArrival] = useState(false);
    const [subBar, setSubBar] = useState(false);

    const handleMenu = ()=>{
        setMenu(!menu);
        console.log("clicked")
    }

    const handleSubMenu = (name)=>{
        if(name === "reels"){
            setSubMenu(!subMenu)
        }else if(name === "rod"){
            setRod(!rod)
        }else if(name === "line"){
            setLine(!line)
        }else if(name === "lore"){
            setLore(!lore)
        }else if(name === "accessories"){
            setAccessories(!accessories)
        }else if(name === "terminal"){
            setTerminal(!terminal)
        }else if(name === "apparel"){
            setApparel(!apparel)
        }else if(name === "brand"){
            setBrand(!brand)
        }else if(name === "arrivals"){
            setArrival(!arrival)
        }
    }

    const handleSubBar = ()=>{
        setSubBar(!subBar)
    }

  return (
    <div className='w-full'>
        <div className='bg-[#464545] py-2 px-4'>
        <div className='w-full md:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto md:pl-6 lg:pl-14 xl:pl-44'>
        <div className='md:flex md:items-center md:justify-between md:gap-7'>
        <div className='flex-col sm:flex sm:flex-row-reverse sm:items-center sm:gap-5 md:flex-row text-right'> 
        <div className='relative inline'>
         <img src={user} alt="img" className='absolute top-[3px] left-2 sm:top-1 w-[14px] sm:w-[18px] cursor-pointer' />
         <button className='pl-7 pr-6 sm:px-7 py-[7px] sm:py-[4px] mb-1 text-white border border-white rounded-[2px] text-xs sm:text-base cursor-pointer'>Account</button>
         <img src={arrowDown} alt="img" className='absolute top-2 sm:top-3 right-1 w-[18px] sm:w-[20px] text-white pr-1 cursor-pointer' />
        </div>
        <div className='w-full md:w-72 lg:w-96 rounded-[2px] relative mt-2 sm:mt-0'>
         <input type="text" placeholder='Search here...' className='w-full px-1.5 sm:px-3 py-[6px] sm:py-2 border-none outline-none rounded-[2px] text-[#878484] placeholder:text-[#9f9a9a]' />
         <img src={search} alt="img" className='absolute top-2 right-3 ' />
        </div>
        </div>
        
        <div className='flex md:flex-row-reverse justify-between mt-2'>
        <div className='flex items-center gap-3 pr-2'>
         <button className='px-2 py-[7px] bg-navBgWhite text-navColor rounded-[2px]'><FaFacebookF /></button>
         <button className='px-2 py-[7px] bg-navBgWhite text-navColor rounded-[2px]'><FaInstagram /></button>
         <button className='px-2 py-[7px] bg-navBgWhite text-navColor rounded-[2px]'><FaYoutube /></button>
        </div>
        <div className='xl:mr-48'>
        <div className='mr-3 relative text-white px-4 py-3 bg-[#2d2d2d] hover:bg-white hover:text-black rounded-[3px] cursor-pointer transition-all duration-500'>
         <FaCartShopping className='' />
          <span className='absolute -top-1 -right-3 px-1 py-1 text-sm font-medium text-black bg-white rounded-full flex items-center justify-center w-6 h-6'>0</span>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className='bg-white px-4 xl:pl-36 py-2 mt-2 relative'>
            <div className='sm:max-w-3xl md:max-w-4xl lg:max-w-6xl'>
            <div className='flex items-center justify-between'>
                <div className='w-full md:w-auto flex items-center justify-between'>
            <img src={smallLogo} alt="logo" className='w-[60px] md:hidden' />
            <img src={bigLogo} alt="logo" className='w-[90px] md:w-[100px] xl:w-[150px] hidden md:block absolute -top-[41.50px] md:-top-[45.20px] xl:-top-[63px]' />
            {<img onClick={handleMenu} src= {menu ? tabWhite : tab} alt="img" className='w-[40px] h-[35px] md:hidden' />}
                </div>
          
            {/* big screen */}
            <div className='hidden md:block'>
            <div className='flex items-center gap-3 lg:gap-4'>
                    <div className='relative group'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2 pt-3'>
                            <span className='text-[#666] text-xs lg:text-lg hover:text-red-400'>Reels</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div className='border-t-4 border-t-orange-700 mt-52 absolute z-10 w-[200px] bg-white border opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Spinning Reel</span>
                                <span className='block py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Baitcasting Reel</span>
                            </div>  
                        </div>
                    </div>

                    <div className='mt-3 relative group'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-xs lg:text-lg hover:text-red-400'>Rod</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                        </div>
                        <div className='mt-12 border-t-4 border-t-orange-700 absolute z-10 w-[200px] bg-white border opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Spinning Rod</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Baitcasting Rod</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Popping Rod</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Jigging Rod</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Surf Casting Rod</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Telescopic Rod</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Pole Rod</span>
                                <span className='block py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Travel Rod</span> 
                            </div> 
                        
                    </div>

                    <div className='mt-3 relative group'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-xs lg:text-lg hover:text-red-400'>Line</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                        </div>
                        <div className='mt-12 border-t-4 border-t-orange-700 absolute z-10 w-[200px] bg-white border opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Braided Line</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Monofilament</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Fluorocarbon Line</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Wire Leader</span>
                            </div>
                    </div>

                    <div className='mt-3 relative group'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-xs lg:text-lg hover:text-red-400'>Lure</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>     
                        </div>
                        <div className='mt-12 border-t-4 border-t-orange-700 absolute z-10 w-[200px] bg-white border opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Hard Lures</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Soft Lures / Shad</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Metal Jigs</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Spoon Lures</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Spinner Lures</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Shrimp Lures</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Frog Lures</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Sabiki</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Squid Lures</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Ultra Light</span>
                            </div>
                    </div>

                    <div className='mt-3 relative group'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-xs lg:text-lg hover:text-red-400'>Accessories</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                        </div>
                        <div className='mt-12 border-t-4 border-t-orange-700 absolute z-10 w-[200px] bg-white border opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[500px] overflow-y-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-[#de5252] scrollbar-track-gray-200 custom-scrollbar'>
                        <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Fishing Bag</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Lip Gripper</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Fish Pliers</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Scissors</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Split Ring Pliers</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Rod Band</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Rod Sleeve</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Fish Scaler</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Line Clipper</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Knife</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Spool Band</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Reel Case</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Lure Box</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>HeadLamp</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Bobbin Knotter</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Belt</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Grease And Oil</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Others</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Line Cutter</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Reel Strap</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Landing Net</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Rod Stand</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Safety Covers</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Line Counter</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Reel Knob</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Reel Stand</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Line Cutter</span>
                            </div>
                    </div>

                    
                    <div className='mt-3 relative group'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-xs lg:text-lg hover:text-red-400'>Terminal Tackle</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                        </div>
                        <div className='mt-12 border-t-4 border-t-orange-700 absolute z-10 w-[200px] bg-white border opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[500px] overflow-y-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-[#de5252] scrollbar-track-gray-200'>
                        <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Swivel & Snaps</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Hooks</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Treble Hook</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>In-Line Hook</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Jig Heads</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Weedless Hooks</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Assist Hooks</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Split Ring</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Lead Weight</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Weighted Worm Hook</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Assist Cord</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Fastach</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Worm Weight</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Jawlock</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Others</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Sinker</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Carp Hooks</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Jigging Hooks</span>
                            </div>
                    </div>

                    <div className='mt-3 relative group'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-xs lg:text-lg hover:text-red-400'>Apparel</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                        </div>
                        <div className='mt-12 border-t-4 border-t-orange-700 absolute z-10 w-[200px] bg-white border opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Gloves</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>T-Shirt</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Hat</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Neck Gaiter</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Arm Sleeves</span>
                                <span className='block py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Sunglasses</span>
                            </div>
                    </div>

                    <div className='mt-3 relative group'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-xs lg:text-lg hover:text-red-400'>Brand</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                        </div>
                        <div className='mt-12 border-t-4 border-t-orange-700 absolute z-10 w-[200px] bg-white border opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-[500px] overflow-y-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-[#de5252] scrollbar-track-gray-200'>
                        <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Shimano</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Daiwa</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Zerek</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Tackle House</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Zman</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Ima Japen</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Megabass</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Duo</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Maria</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Apia</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Scaless</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Savage Gear</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Chasebait</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Bkk</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Pelagictribe</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Big Bite Baits</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Duel Hardcore</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Molix</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Mustad</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Hayabusa</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>6th Sense</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Lure Factory</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Prohunter</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Snagproof</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Scum Frog</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Yo-Zuri</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Booyah</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Sunline</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Yum</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Lucky Jhon</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Halco</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Okuma</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Storm</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Heddon</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Rapala</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Major Craft</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Spro</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Power Pro</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Benthic</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Crimson</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Live Target</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Berkley</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Keitech</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Bait Breath</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Noeby</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Sure Catch</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Freedom</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Sth</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Gfin</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Jackson</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Cassan</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Ygk</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Atc</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Feed</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Pro Trust</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Strike pro</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Sufix</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Gillies</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Vudu</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Egret Baits</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>River2sea</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Kastking</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Bomber</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Stryker</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Jabbers</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Yamashita</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Pioneer</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Pro Marine</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Trigger x</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Meiho</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Abu Gracia</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Sea Falcon</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Meredith</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Xesta</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Onlite</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Penn</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Gamakastu</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Triple Fish</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Hart</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Superline</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Eupro</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Gt Ice Cream</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Seaguar</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Bassday</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Jhinga</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Hawas</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Searock</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Jackall</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Generic</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Decoy</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Wilson Fishing</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>VMC</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Owner</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Terry</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Luregenix</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Ironman</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>JK</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>BTX</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>A Band Of Anglers</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Shakespheare</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>X-Braid</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Fuji</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Orgin</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Gomexus</span>
                                <span className='block border-b py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Costline</span>
                                <span className='block py-2 pl-4 text-sm text-[#666] hover:text-red-400'>Sea-Lion</span>
                            </div>
                    </div>

                    
                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-xs lg:text-lg hover:text-red-400'>New Arrivals</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div onClick={()=>handleSubMenu("arrivals")} className='px-3 py-[10px] bg-[#ededed] rounded-[1px]  md:hidden'>
                            <img src={arrival ?  arrowDown3 : arrowRightIcon} alt="img" className='w-3' />
                            </div>
                        </div>
                        {arrival ? <div className='mt-5 pl-8'>
                            <div className=''>
                                <span className='block mb-7 text-black text-sm'>Reels</span>
                                <span className='block mb-7 text-black text-sm'>Rod</span>
                                <span className='block mb-7 text-black text-sm'>Line</span>
                                <span className='block mb-7 text-black text-sm'>Lure</span>
                                <span className='block mb-7 text-black text-sm'>Accessories</span>
                                <span className='block mb-7 text-black text-sm'>Terminal Tackle</span>
                                <span className='block text-black text-sm'>Apparel</span>
                            </div>
                        </div> : null}
                    </div>

                    <span className='block mt-3 text-[#666] md:hidden'>Tackle Tips</span>
                    <span className='block mt-3 text-[#666] md:hidden'>Fishing Reports</span>
                </div>
            </div>
            </div>
            </div>
        
            {/* small screen menu bar */}
            {menu ?<div className='mt-2 md:mt-0 md:hidden md:mx-auto max-h-72 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-[#de5252] scrollbar-track-gray-200'>
                <div className='md:flex items-center justify-between'>
                    <div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-sm'>Reels</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div onClick={()=>handleSubMenu("reels")} className='px-3 py-[10px] bg-[#ededed] rounded-[1px]  md:hidden'>
                            <img src={subMenu ?  arrowDown3 : arrowRightIcon} alt="img" className='w-3' />
                            </div>
                        </div>
                        {subMenu ? <div className='mt-5 pl-8'>
                            <div className=''>
                                <span className='block mb-7 text-black text-sm'>Spinning Reel</span>
                                <span className='block text-black text-sm'>Baitcasting Reel</span>
                            </div>
                        </div> : null}
                    </div>

                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-sm'>Rod</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div onClick={()=>handleSubMenu("rod")} className='px-3 py-[10px] bg-[#ededed] rounded-[1px]'>
                            <img src={rod ?  arrowDown3 : arrowRightIcon} alt="img" className='w-3' />
                            </div>
                        </div>
                        {rod ? <div className='mt-5 pl-8'>
                            <div className=''>
                                <span className='block mb-7 text-black text-sm'>Spinning Rod</span>
                                <span className='block mb-7 text-black text-sm'>Baitcasting Rod</span>
                                <span className='block mb-7 text-black text-sm'>Popping Rod</span>
                                <span className='block mb-7 text-black text-sm'>Jigging Rod</span>
                                <span className='block mb-7 text-black text-sm'>Surf Casting Rod</span>
                                <span className='block mb-7 text-black text-sm'>Telescopic Rod</span>
                                <span className='block mb-7 text-black text-sm'>Pole Rod</span>
                                <span className='block text-black text-sm'>Travel Rod</span>
                            </div>
                        </div> : null}
                    </div>

                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-sm'>Line</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div onClick={()=>handleSubMenu("line")} className='px-3 py-[10px] bg-[#ededed] rounded-[1px]'>
                            <img src={line ?  arrowDown3 : arrowRightIcon} alt="img" className='w-3' />
                            </div>
                        </div>
                        {line ? <div className='mt-5 pl-8'>
                            <div className=''>
                                <span className='block mb-7 text-black text-sm'>Braided Line</span>
                                <span className='block mb-7 text-black text-sm'>Monofilament</span>
                                <span className='block mb-7 text-black text-sm'>Fluorocarbon Line</span>
                                <span className='block text-black text-sm'>Wire Leader</span>
                            </div>
                        </div> : null}
                    </div>

                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-sm'>Lure</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div onClick={()=>handleSubMenu("lore")} className='px-3 py-[10px] bg-[#ededed] rounded-[1px]'>
                            <img src={lore ?  arrowDown3 : arrowRightIcon} alt="img" className='w-3' />
                            </div>
                        </div>
                        {lore ? <div className='mt-5 pl-8'>
                            <div className=''>
                                <span className='block mb-7 text-black text-sm'>Hard Lures</span>
                                <span className='block mb-7 text-black text-sm'>Soft Lures / Shad</span>
                                <span className='block mb-7 text-black text-sm'>Metal Jigs</span>
                                <span className='block mb-7 text-black text-sm'>Spoon Lures</span>
                                <span className='block mb-7 text-black text-sm'>Spinner Lures</span>
                                <span className='block mb-7 text-black text-sm'>Shrimp Lures</span>
                                <span className='block mb-7 text-black text-sm'>Frog Lures</span>
                                <span className='block mb-7 text-black text-sm'>Sabiki</span>
                                <span className='block mb-7 text-black text-sm'>Squid Lures</span>
                                <span className='block text-black text-sm'>Ultra Light</span>
                            </div>
                        </div> : null}
                    </div>

                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-sm'>Accessories</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div onClick={()=>handleSubMenu("accessories")} className='px-3 py-[10px] bg-[#ededed] rounded-[1px]'>
                            <img src={accessories ?  arrowDown3 : arrowRightIcon} alt="img" className='w-3' />
                            </div>
                        </div>
                        {accessories ? <div className='mt-5 pl-8'>
                            <div className=''>
                                <span className='block mb-7 text-black text-sm'>Fishing Bag</span>
                                <span className='block mb-7 text-black text-sm'>Lip Gripper</span>
                                <span className='block mb-7 text-black text-sm'>Fish Pliers</span>
                                <span className='block mb-7 text-black text-sm'>Scissors</span>
                                <span className='block mb-7 text-black text-sm'>Split Ring Pliers</span>
                                <span className='block mb-7 text-black text-sm'>Rod Band</span>
                                <span className='block mb-7 text-black text-sm'>Rod Sleeve</span>
                                <span className='block mb-7 text-black text-sm'>Fish Scaler</span>
                                <span className='block mb-7 text-black text-sm'>Line Clipper</span>
                                <span className='block mb-7 text-black text-sm'>Knife</span>
                                <span className='block mb-7 text-black text-sm'>Spool Band</span>
                                <span className='block mb-7 text-black text-sm'>Reel Case</span>
                                <span className='block mb-7 text-black text-sm'>Lure Box</span>
                                <span className='block mb-7 text-black text-sm'>HeadLamp</span>
                                <span className='block mb-7 text-black text-sm'>Bobbin Knotter</span>
                                <span className='block mb-7 text-black text-sm'>Belt</span>
                                <span className='block mb-7 text-black text-sm'>Grease And Oil</span>
                                <span className='block mb-7 text-black text-sm'>Others</span>
                                <span className='block mb-7 text-black text-sm'>Line Cutter</span>
                                <span className='block mb-7 text-black text-sm'>Reel Strap</span>
                                <span className='block mb-7 text-black text-sm'>Landing Net</span>
                                <span className='block mb-7 text-black text-sm'>Rod Stand</span>
                                <span className='block mb-7 text-black text-sm'>Safety Covers</span>
                                <span className='block mb-7 text-black text-sm'>Line Counter</span>
                                <span className='block mb-7 text-black text-sm'>Reel Knob</span>
                                <span className='block mb-7 text-black text-sm'>Reel Stand</span>
                                <span className='block text-black text-sm'>Line Cutter</span>
                            </div>
                        </div> : null}
                    </div>

                    
                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-sm'>Terminal Tackle</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div onClick={()=>handleSubMenu("terminal")} className='px-3 py-[10px] bg-[#ededed] rounded-[1px]'>
                            <img src={terminal ?  arrowDown3 : arrowRightIcon} alt="img" className='w-3' />
                            </div>
                        </div>
                        {terminal ? <div className='mt-5 pl-8'>
                            <div className=''>
                                <span className='block mb-7 text-black text-sm'>Swivel & Snaps</span>
                                <span className='block mb-7 text-black text-sm'>Hooks</span>
                                <span className='block mb-7 text-black text-sm'>Treble Hook</span>
                                <span className='block mb-7 text-black text-sm'>In-Line Hook</span>
                                <span className='block mb-7 text-black text-sm'>Jig Heads</span>
                                <span className='block mb-7 text-black text-sm'>Weedless Hooks</span>
                                <span className='block mb-7 text-black text-sm'>Assist Hooks</span>
                                <span className='block mb-7 text-black text-sm'>Split Ring</span>
                                <span className='block mb-7 text-black text-sm'>Lead Weight</span>
                                <span className='block mb-7 text-black text-sm'>Weighted Worm Hook</span>
                                <span className='block mb-7 text-black text-sm'>Assist Cord</span>
                                <span className='block mb-7 text-black text-sm'>Fastach</span>
                                <span className='block mb-7 text-black text-sm'>Worm Weight</span>
                                <span className='block mb-7 text-black text-sm'>Jawlock</span>
                                <span className='block mb-7 text-black text-sm'>Others</span>
                                <span className='block mb-7 text-black text-sm'>Sinker</span>
                                <span className='block mb-7 text-black text-sm'>Carp Hooks</span>
                                <span className='block mb-7 text-black text-sm'>Jigging Hooks</span>
                            </div>
                        </div> : null}
                    </div>

                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-sm'>Apparel</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div onClick={()=>handleSubMenu("apparel")} className='px-3 py-[10px] bg-[#ededed] rounded-[1px]'>
                            <img src={apparel ?  arrowDown3 : arrowRightIcon} alt="img" className='w-3' />
                            </div>
                        </div>
                        {apparel ? <div className='mt-5 pl-8'>
                            <div className=''>
                                <span className='block mb-7 text-black text-sm'>Gloves</span>
                                <span className='block mb-7 text-black text-sm'>T-Shirt</span>
                                <span className='block mb-7 text-black text-sm'>Hat</span>
                                <span className='block mb-7 text-black text-sm'>Neck Gaiter</span>
                                <span className='block mb-7 text-black text-sm'>Arm Sleeves</span>
                                <span className='block text-black text-sm'>Sunglasses</span>
                            </div>
                        </div> : null}
                    </div>

                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-sm'>Brand</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div onClick={()=>handleSubMenu("brand")} className='px-3 py-[10px] bg-[#ededed] rounded-[1px]'>
                            <img src={brand ?  arrowDown3 : arrowRightIcon} alt="img" className='w-3' />
                            </div>
                        </div>
                        {brand ? <div className='mt-5 pl-8'>
                            <div className=''>
                                <span className='block mb-7 text-black text-sm'>Shimano</span>
                                <span className='block mb-7 text-black text-sm'>Daiwa</span>
                                <span className='block mb-7 text-black text-sm'>Zerek</span>
                                <span className='block mb-7 text-black text-sm'>Tackle House</span>
                                <span className='block mb-7 text-black text-sm'>Zman</span>
                                <span className='block mb-7 text-black text-sm'>Ima Japen</span>
                                <span className='block mb-7 text-black text-sm'>Megabass</span>
                                <span className='block mb-7 text-black text-sm'>Duo</span>
                                <span className='block mb-7 text-black text-sm'>Maria</span>
                                <span className='block mb-7 text-black text-sm'>Apia</span>
                                <span className='block mb-7 text-black text-sm'>Scaless</span>
                                <span className='block mb-7 text-black text-sm'>Savage Gear</span>
                                <span className='block mb-7 text-black text-sm'>Chasebait</span>
                                <span className='block mb-7 text-black text-sm'>Bkk</span>
                                <span className='block mb-7 text-black text-sm'>Pelagictribe</span>
                                <span className='block mb-7 text-black text-sm'>Big Bite Baits</span>
                                <span className='block mb-7 text-black text-sm'>Duel Hardcore</span>
                                <span className='block mb-7 text-black text-sm'>Molix</span>
                                <span className='block mb-7 text-black text-sm'>Mustad</span>
                                <span className='block mb-7 text-black text-sm'>Hayabusa</span>
                                <span className='block mb-7 text-black text-sm'>6th Sense</span>
                                <span className='block mb-7 text-black text-sm'>Lure Factory</span>
                                <span className='block mb-7 text-black text-sm'>Prohunter</span>
                                <span className='block mb-7 text-black text-sm'>Snagproof</span>
                                <span className='block mb-7 text-black text-sm'>Scum Frog</span>
                                <span className='block mb-7 text-black text-sm'>Yo-Zuri</span>
                                <span className='block mb-7 text-black text-sm'>Booyah</span>
                                <span className='block mb-7 text-black text-sm'>Sunline</span>
                                <span className='block mb-7 text-black text-sm'>Yum</span>
                                <span className='block mb-7 text-black text-sm'>Lucky Jhon</span>
                                <span className='block mb-7 text-black text-sm'>Halco</span>
                                <span className='block mb-7 text-black text-sm'>Okuma</span>
                                <span className='block mb-7 text-black text-sm'>Storm</span>
                                <span className='block mb-7 text-black text-sm'>Heddon</span>
                                <span className='block mb-7 text-black text-sm'>Rapala</span>
                                <span className='block mb-7 text-black text-sm'>Major Craft</span>
                                <span className='block mb-7 text-black text-sm'>Spro</span>
                                <span className='block mb-7 text-black text-sm'>Power Pro</span>
                                <span className='block mb-7 text-black text-sm'>Benthic</span>
                                <span className='block mb-7 text-black text-sm'>Crimson</span>
                                <span className='block mb-7 text-black text-sm'>Live Target</span>
                                <span className='block mb-7 text-black text-sm'>Berkley</span>
                                <span className='block mb-7 text-black text-sm'>Keitech</span>
                                <span className='block mb-7 text-black text-sm'>Bait Breath</span>
                                <span className='block mb-7 text-black text-sm'>Noeby</span>
                                <span className='block mb-7 text-black text-sm'>Sure Catch</span>
                                <span className='block mb-7 text-black text-sm'>Freedom</span>
                                <span className='block mb-7 text-black text-sm'>Sth</span>
                                <span className='block mb-7 text-black text-sm'>Gfin</span>
                                <span className='block mb-7 text-black text-sm'>Jackson</span>
                                <span className='block mb-7 text-black text-sm'>Cassan</span>
                                <span className='block mb-7 text-black text-sm'>Ygk</span>
                                <span className='block mb-7 text-black text-sm'>Atc</span>
                                <span className='block mb-7 text-black text-sm'>Feed</span>
                                <span className='block mb-7 text-black text-sm'>Pro Trust</span>
                                <span className='block mb-7 text-black text-sm'>Strike pro</span>
                                <span className='block mb-7 text-black text-sm'>Sufix</span>
                                <span className='block mb-7 text-black text-sm'>Gillies</span>
                                <span className='block mb-7 text-black text-sm'>Vudu</span>
                                <span className='block mb-7 text-black text-sm'>Egret Baits</span>
                                <span className='block mb-7 text-black text-sm'>River2sea</span>
                                <span className='block mb-7 text-black text-sm'>Kastking</span>
                                <span className='block mb-7 text-black text-sm'>Bomber</span>
                                <span className='block mb-7 text-black text-sm'>Stryker</span>
                                <span className='block mb-7 text-black text-sm'>Jabbers</span>
                                <span className='block mb-7 text-black text-sm'>Yamashita</span>
                                <span className='block mb-7 text-black text-sm'>Pioneer</span>
                                <span className='block mb-7 text-black text-sm'>Pro Marine</span>
                                <span className='block mb-7 text-black text-sm'>Trigger x</span>
                                <span className='block mb-7 text-black text-sm'>Meiho</span>
                                <span className='block mb-7 text-black text-sm'>Abu Gracia</span>
                                <span className='block mb-7 text-black text-sm'>Sea Falcon</span>
                                <span className='block mb-7 text-black text-sm'>Meredith</span>
                                <span className='block mb-7 text-black text-sm'>Xesta</span>
                                <span className='block mb-7 text-black text-sm'>Onlite</span>
                                <span className='block mb-7 text-black text-sm'>Penn</span>
                                <span className='block mb-7 text-black text-sm'>Gamakastu</span>
                                <span className='block mb-7 text-black text-sm'>Triple Fish</span>
                                <span className='block mb-7 text-black text-sm'>Hart</span>
                                <span className='block mb-7 text-black text-sm'>Superline</span>
                                <span className='block mb-7 text-black text-sm'>Eupro</span>
                                <span className='block mb-7 text-black text-sm'>Gt Ice Cream</span>
                                <span className='block mb-7 text-black text-sm'>Seaguar</span>
                                <span className='block mb-7 text-black text-sm'>Bassday</span>
                                <span className='block mb-7 text-black text-sm'>Jhinga</span>
                                <span className='block mb-7 text-black text-sm'>Hawas</span>
                                <span className='block mb-7 text-black text-sm'>Searock</span>
                                <span className='block mb-7 text-black text-sm'>Jackall</span>
                                <span className='block mb-7 text-black text-sm'>Generic</span>
                                <span className='block mb-7 text-black text-sm'>Decoy</span>
                                <span className='block mb-7 text-black text-sm'>Wilson Fishing</span>
                                <span className='block mb-7 text-black text-sm'>VMC</span>
                                <span className='block mb-7 text-black text-sm'>Owner</span>
                                <span className='block mb-7 text-black text-sm'>Terry</span>
                                <span className='block mb-7 text-black text-sm'>Luregenix</span>
                                <span className='block mb-7 text-black text-sm'>Ironman</span>
                                <span className='block mb-7 text-black text-sm'>JK</span>
                                <span className='block mb-7 text-black text-sm'>BTX</span>
                                <span className='block mb-7 text-black text-sm'>A Band Of Anglers</span>
                                <span className='block mb-7 text-black text-sm'>Shakespheare</span>
                                <span className='block mb-7 text-black text-sm'>X-Braid</span>
                                <span className='block mb-7 text-black text-sm'>Fuji</span>
                                <span className='block mb-7 text-black text-sm'>Orgin</span>
                                <span className='block mb-7 text-black text-sm'>Gomexus</span>
                                <span className='block mb-7 text-black text-sm'>Costline</span>
                                <span className='block text-black text-sm'>Sea-Lion</span>
                            </div>
                        </div> : null}
                    </div>

                    
                    <div className='mt-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                            <span className='text-[#666] text-sm'>New Arrivals</span>
                            <img src={tabArrowDown} alt="img" className='w-3' />
                            </div>
                            <div onClick={()=>handleSubMenu("arrivals")} className='px-3 py-[10px] bg-[#ededed] rounded-[1px]  md:hidden'>
                            <img src={arrival ?  arrowDown3 : arrowRightIcon} alt="img" className='w-3' />
                            </div>
                        </div>
                        {arrival ? <div className='mt-5 pl-8'>
                            <div className=''>
                                <span className='block mb-7 text-black text-sm'>Reels</span>
                                <span className='block mb-7 text-black text-sm'>Rod</span>
                                <span className='block mb-7 text-black text-sm'>Line</span>
                                <span className='block mb-7 text-black text-sm'>Lure</span>
                                <span className='block mb-7 text-black text-sm'>Accessories</span>
                                <span className='block mb-7 text-black text-sm'>Terminal Tackle</span>
                                <span className='block text-black text-sm'>Apparel</span>
                            </div>
                        </div> : null}
                    </div>

                    <span className='block mt-3 text-[#666]'>Tackle Tips</span>
                    <span className='block mt-3 text-[#666]'>Fishing Reports</span>
                </div>
            </div>: null}






















       
          



















        </div>
    </div>
  )
}

export default Navbar