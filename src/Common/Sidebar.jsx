import React from 'react'
import colorUI from "../Common/coolorUi.json"
import { Link } from 'react-router-dom'

const Sidebar = ({color}) => {
  
  const templates = [
    {
      name: 'Blue',
      path: '/dashboard',
      icon: 'HomeIcon',
    },
    {
      name: 'Purple',
      path: '/dashboard',
      icon: 'HomeIcon',
    },
    {
      name: 'Green',
      path: '/dashboard',
      icon: 'HomeIcon',
    },
    
    {
      name: 'White',
      path: '/dashboard',
      icon: 'HomeIcon',
    },{
      name: 'Red',
      path: '/dashboard',
      icon: 'HomeIcon',
    },{
      name: 'Orange',
      path: '/dashboard',
      icon: 'HomeIcon',
    },{
      name: 'Violet',
      path: '/dashboard',
      icon: 'HomeIcon',
    },{
      name: 'Pink',
      path: '/dashboard',
      icon: 'HomeIcon',
    },{
      name: 'Blue',
      path: '/dashboard',
      icon: 'HomeIcon',
    },{
      name: 'Blue',
      path: '/dashboard',
      icon: 'HomeIcon',
    },{
      name: 'Blue',
      path: '/dashboard',
      icon: 'HomeIcon',
    },
    // {
    //   name: 'Blue',
    //   path: '/',
    //   icon: 'HomeIcon', 
    // },



  ]
  
  // {
  //   console.log("color", color, colorUI[color].textColor)
  // }
  
  return (
    
    <>
    <section id="sidebar" className={` ${colorUI[color].backgroundColor} ${colorUI[color].darkBackgroundColor} flex flex-col justify-around text-center ${colorUI[color].textColor} ${colorUI[color].darkTextColor} h-[calc(100vh-1.5rem)]`}>
        {
          templates.map((template) => (
            <Link key={template.name} className={`p-3 rounded-l-full ${colorUI[color].hoverBackgroundColor} ${colorUI[color].darkHoverBackGroundColor} ${colorUI[color].hoverTextColor} ${colorUI[color].darkTextHoverColor} transition-all delay-100 ease-in-out`} to={template.path}>
              <template.icon className="h-6 w-6" />
              <span>{template.name}</span>
            </Link>
          ))
        }
      
    </section>
    </>
  )
}

export default Sidebar