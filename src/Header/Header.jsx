import { Label } from '@headlessui/react';
import React, { useContext, useState } from 'react';
// import logo_black from '../assets/images/logo-black.webp'
import { FaRegMoon } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { ThemeContext } from '../context/theme.context';
// import logo_white from '../assets/images/logo-white.webp'
import { LuSun } from "react-icons/lu";

import logo_white from '../assets/images/darkModeLogo.png'
import logo_black from '../assets/images/lightModeLogo.png'

import logo from '../assets/images/cover.png'
import blackLogo from '../assets/images/default-monochrome-black.svg'

function Header(props) {

    const [menu,setMenu]=useState(false)

    const bgTheme=useContext(ThemeContext);
    console.log(bgTheme);
    

    const MenuItems = [
        { link: '#', Label: 'Home' },
        { link: '#', Label: 'About' },
        { link: '#', Label: 'Pages' },
        { link: '#', Label: 'Blog' },
        { link: '#', Label: 'Contact ' }
    ]

    console.log(menu);
    
    return (
        <header>
            <div className="container mx-auto px-4 py-5 flex justify-between items-center " >
                <div className="flex space-x-10 items-center">
                    {/* image */}
                    <a href="#">
                        <img src={ bgTheme.theme==='light'?blackLogo:logo} alt="" className={`${bgTheme.theme==='light' ?'w-25':'w-38'}`} />
                    </a>
                    {/* navBar */}
                    <nav>
                        <ul className=' hidden lg:flex items-center space-x-6 font-semibold text-26'>{
                            MenuItems.map((v) => (
                                <li><a href={v.link}>{v.Label}</a></li>
                            ))
                        }</ul>
                    </nav>
                </div>

                <div className='flex items-center space-x-4'>
                        <button className='text-2xl' onClick={()=>bgTheme.ToggleTheme(bgTheme.theme)} >
                           { bgTheme.theme==='light'?<FaRegMoon  /> :<LuSun />}
                        </button>
                        <a href="#" className='hidden lg:inline-block px-6 py-2 bg-black font-semibold dark:bg-primary dark:text-gary-900  dark:text-black text-white rounded-4xl'>Let's Talk</a>

                         <button className='inline-block lg:hidden  text-2xl' onClick={()=>setMenu(!menu)}>
                           <RiMenu5Line />
                        </button>
                </div>
            </div>

            <div className={` ${ menu ?'translate-x-0':'translate-x-full'} transition-duration-500 fixed w-65 h-full top-0 right-0 bg-red-200 p-6`}>
                         <button className='text-4xl ' onClick={()=>setMenu(!menu)}>
                           <RxCross2 />
                        </button>

                           {/* navBar */}
                    <nav>
                        <ul className=' text-lg  my-5 dark:text-gary-900'>{
                            MenuItems.map((v) => (
                                <li><a href={v.link}>{v.Label}</a></li>
                            ))
                        }</ul>
                    </nav>

                     <a href="#" className='inline-block lg:hidden px-6 py-2 bg-black font-semibold text-white rounded-4xl  dark:bg-white dark:text-black '>Let's Talk</a>

            </div>
        </header>
    );
}

export default Header;