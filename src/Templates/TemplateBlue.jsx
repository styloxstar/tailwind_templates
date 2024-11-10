import React from 'react'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import MainBody from '../Common/MainBody'

const TemplateBlue = () => {
  return (
    <>
        <section id="templateBlue" className='dark:bg-[#0C1641] bg-[#E1E1E1] flex'>
            <div id="sidebar" className="basis-2/12 dark:bg-[#344272] dark:text-white bg-[#02DAFF] m-3 rounded-md h-[calc(100vh-1.5rem)] dark:bg-opacity-80">
                <Sidebar />
            </div>
            <div id="mainBody" className='basis-10/12 dark:text-white dark:bg-[#344272] bg-[#FFFFFF] m-3 rounded-md h-[calc(100vh-1.5rem)] dark:bg-opacity-25' >
                <MainBody />
            </div>
        </section>


    </>
  )
}

export default TemplateBlue