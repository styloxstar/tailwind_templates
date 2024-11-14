import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter  } from 'react-icons/fa';
import colorUI from "../Common/coolorUi.json"


const Footer = ({color}) => {
  return (
    <section id="footer" className={`flex p-2 ${colorUI[color].backgroundColor} ${colorUI[color].darkBackgroundColor} ${colorUI[color].textColor} rounded-sm shadow-md fixed bottom-3 ml-2 w-[80%] bg-opacity-80 `}>
      <div className="basis-1/4 font-bold">
        Deepak Gautam
      </div>
      <div className="basis-2/4 text-center">
        Copyright &copy; 2024. All right reserved for deepak
      </div>
      <div className="basis-1/4 flex">
        <a href="https://www.facebook.com/abcdTest" className="text-sm">
          <FaFacebook size={24}/>
        </a>
        <a href="https://www.instagram.com/abcdTest" className="ms-6 text-sm">
          <FaInstagram size={24}/>
        </a>
        <a href="https://www.linkedin.com/avava" className="ms-6 text-sm">
          <FaLinkedinIn size={24}/>
        </a>
        <a href="https://www.twitter.com/syshsh" className="ms-6 text-sm">
          <FaTwitter size={24}/>
        </a>

      </div>


    </section>
  )
}

export default Footer