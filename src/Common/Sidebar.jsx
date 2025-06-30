import React from 'react'
import colorUI from "../Common/coolorUi.json"
import { Link } from 'react-router-dom'

const Sidebar = ({color}) => {

   const [colorPattern , setColorPattern] = React.useState({
       backgroundColor: `${color}PrimaryBackgroundColor`,
       textColor: `${color}PrimaryTextColor`,
       hoverBackgroundColor: `${color}PrimaryBackgroundHoverColor`,
       hoverTextColor: `${color}PrimaryHoverTextColor`,
    });
  
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
    // {
    //   name: 'Green',
    //   path: '/dashboard',
    //   icon: 'HomeIcon',
    // },
    
    // {
    //   name: 'White',
    //   path: '/dashboard',
    //   icon: 'HomeIcon',
    // },{
    //   name: 'Red',
    //   path: '/dashboard',
    //   icon: 'HomeIcon',
    // },{
    //   name: 'Orange',
    //   path: '/dashboard',
    //   icon: 'HomeIcon',
    // },{
    //   name: 'Violet',
    //   path: '/dashboard',
    //   icon: 'HomeIcon',
    // },{
    //   name: 'Pink',
    //   path: '/dashboard',
    //   icon: 'HomeIcon',
    // },{
    //   name: 'Blue',
    //   path: '/dashboard',
    //   icon: 'HomeIcon',
    // },{
    //   name: 'Blue',
    //   path: '/dashboard',
    //   icon: 'HomeIcon',
    // },{
    //   name: 'Blue',
    //   path: '/dashboard',
    //   icon: 'HomeIcon',
    // },
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
    console.log("check sidebar", colorPattern?.backgroundColor, colorPattern?.textColor, colorPattern?.hoverBackgroundColor, colorPattern?.hoverTextColor),
    <>
    
    <section id="sidebar" className={`bg-${colorPattern?.backgroundColor} flex flex-col justify-start text-center text-${colorPattern?.textColor} h-[calc(100vh-1.5rem)]`}>
        {
          templates.map((template) => (
            <Link key={template.name} className={`p-3 hover:rounded-l-full hover:bg-${colorPattern?.hoverBackgroundColor} hover:text-${colorPattern?.hoverTextColor} transition-all delay-100 ease-in-out`} to={template.path}>
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