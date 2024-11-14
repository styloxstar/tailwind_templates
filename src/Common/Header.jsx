import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import contact from "../assets/contact-book-svgrepo-com.svg"
import feature from "../assets/feature-security-seo-svgrepo-com.svg"
import product from "../assets/product-management-svgrepo-com.svg"
import about from "../assets/about-us-svgrepo-com.svg"
import colorUI from "../Common/coolorUi.json"
import { FaMoon, FaSun } from 'react-icons/fa'



const Header = ({color}) => {

   // basic config to add dark and light mode
   const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }
      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }else{
      console.log("something is wrong");
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('color-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("checking theme", theme)
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
 
  
  return (
    <section id="header">

<nav class={`block w-full max-w-screen-2xl px-4 py-1 mx-auto ${colorUI[color].backgroundColor} ${colorUI[color].darkBackgroundColor} shadow-md rounded-md lg:px-8 lg:py-1 my-2 bg-opacity-80`}>
  <div class={`container flex flex-wrap items-center justify-between mx-auto ${colorUI[color].textColor} ${colorUI[color].darkTextColor} `}>
    <Link to="#" className={`mr-4 block cursor-pointer py-1.5 text-base ${colorUI[color].textColor}-900 ${colorUI[color].darkTextColor}-900 font-semibold`}>
      Tailwind Templates
    </Link>
 
    <div class="hidden lg:block">
      <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li class={`flex items-center p-1 text-sm gap-x-2 ${colorUI[color].textColor}-600  ${colorUI[color].darkTextColor}-600`}>
          <Link to="/dashboard" class="flex items-center">
            Home
          </Link>
        </li>
        <li class={`flex items-center p-1 text-sm gap-x-2 ${colorUI[color].textColor}-600  ${colorUI[color].darkTextColor}-600`}>
          <Link to="/about" class="flex items-center">
            About us
          </Link>
        </li>
        <li class={`flex items-center p-1 text-sm gap-x-2 ${colorUI[color].textColor}-600  ${colorUI[color].darkTextColor}-600`}>
          <Link to="/contact" class="flex items-center">
            Contact Us
          </Link>
        </li>
        <li
        class={`flex items-center p-1 text-sm gap-x-2 ${colorUI[color].textColor}-600  ${colorUI[color].darkTextColor}-600`}>
          <Link to="/products" class="flex items-center">
            Product
          </Link>
        </li>

        <li
        class={`flex items-center p-1 text-sm gap-x-2 ${colorUI[color].textColor}-600 ${colorUI[color].darkTextColor}-600`}>
              <button
                onClick={toggleTheme}
                className={`${colorUI[color].textColor}-600 ${colorUI[color].textColor}-600 ${colorUI[color].darkTextColor}-600 transition-colors duration-300`}
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
        </li>

      </ul>
    </div>
    <button class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
  </div>
</nav>
    </section>
  )
}

export default Header