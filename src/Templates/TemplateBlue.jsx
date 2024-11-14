import React from 'react'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import MainBody from '../Common/MainBody'
import colorUI from "../Common/coolorUi.json"

const TemplateBlue = ({color}) => {
  return (
    <>
      <section
        id="templateBlue"
        className={`${colorUI[color].mainBackgroundColor} ${colorUI[color].darkMainBackgroundColor} flex`}
      >
        <div
          id="sidebar"
          className="basis-2/12  m-3 rounded-md  overflow-y-auto"
        >
          <Sidebar color={color}
          />
        </div>
        <div
          id="mainBody"
          className="basis-10/12  my-3 me-3 rounded-md h-[calc(100vh-1.5rem)] dark:bg-opacity-25 overflow-y-auto relative"
        >
          {/* dark:bg-[#344272] bg-[#FFFFFF] */}
          <MainBody color={color}/>
        </div>
      </section>
    </>
  );
}

export default TemplateBlue