import React, { useRef, useState } from 'react'
import colorUI from "../Common/coolorUi.json"



const Product = ({color}) => {

  const productElements = [
    {
      name: 'Product 1',
      icon: '',
      value:"product 1"
    },
    {
      name: 'Product 2',
      icon: '',
      value:"product 2"
    },{
      name: 'Product 3',
      icon: '',
      value:"product 3"
    },{
      name: 'Product 4',
      icon: '',
      value:"product 4"
    },{
      name: 'Product 5',
      icon: '',
      value:"product 5"
    },{
      name: 'Product 6',
      icon: '',
      value:"product 6"
    },{
      name: 'Product 7',
      icon: '',
      value:"product 7"
    },
    // {
    //   name: 'Product 8',
    //   icon: '',
    //   value:"product 8"
    // },
    




  ]

  return (
    <section id="products" className={`${colorUI[color].contentTextColor} ${colorUI[color].darkContentTextColor}`}>
          <div className="header text-4xl font-semibold text-center my-5">
              Our Products
          </div>

          <div className="productsContainer flex flex-row flex-wrap mx-auto justify-center mt-10 mb-5"> 

          {/* <div className="w-80 h-48 bg-white text-gray-600 rounded-md shadow-md mx-5 my-10 hover:translate-y-[-25px] transition-all ease-in-out delay-200 bg-opacity-80">

          <div id="header" className='text-center p-2 border-b border-[#E1E1E1]'>
                    Product Component 1
                </div>
          </div> */}

          {
            productElements.map((productData, i) =>(
              <div key={i} className={`w-80 h-48 ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} ${colorUI[color].contentTextColor} ${colorUI[color].darkContentTextColor} rounded-md shadow-md mx-5 my-10 hover:translate-y-[-25px] transition-all ease-in-out delay-200 bg-opacity-80 dark:bg-opacity-25 dark:text-opacity-80`}>
                <div id="header" className={`text-center p-2 border-b ${colorUI[color].borderColor} ${colorUI[color].darkBorderColor} border-opacity-70`}>
                    {productData.name}
                </div>
              </div>
            ))
          }



          {/* <div className="w-80 h-48 bg-[#4265D0] text-gray-50 rounded-md shadow-md mx-5 my-10 hover:translate-y-[-25px] transition-all ease-in-out delay-200 bg-opacity-80">

          <div id="header" className='text-center p-2 border-b border-[#E1E1E1]'>
                    Product Component 2
                </div>
          </div>

          <div className="w-80 h-48 bg-white text-gray-600 rounded-md shadow-md mx-5 my-10 hover:translate-y-[-25px] transition-all ease-in-out delay-200 bg-opacity-80">
          <div id="header" className='text-center p-2 border-b border-[#E1E1E1]'>
                    Product Component 3
                </div>
          </div>

          <div className="w-80 h-48 bg-[#4265D0] text-gray-50 rounded-md shadow-md mx-5 my-10 hover:translate-y-[-25px] transition-all ease-in-out delay-200 bg-opacity-80">
          <div id="header" className='text-center p-2 border-b border-[#E1E1E1]'>
                    Product Component 4
                </div>

          </div> */}

          

          {/* <div className="w-80 h-48 bg-[#4265D0] text-gray-50 rounded-md shadow-md mx-5 my-10 hover:translate-y-[-25px] transition-all ease-in-out delay-200 bg-opacity-80">
            <div id="header" className='text-center p-2 border-b border-[#E1E1E1]'>
                    Product Component 5
                </div>
          </div>

          <div className="w-80 h-48 bg-white text-gray-600 rounded-md shadow-md mx-5 my-10 hover:translate-y-[-25px] transition-all ease-in-out delay-200 bg-opacity-80">
            <div id="header" className='text-center p-2 border-b border-[#E1E1E1]'>
                    Product Component 6
                </div>
          </div>

          <div className="w-80 h-48 bg-[#4265D0] text-gray-50 rounded-md shadow-md mx-5 my-10 hover:translate-y-[-25px] transition-all ease-in-out delay-200 bg-opacity-80">
            <div id="header" className='text-center p-2 border-b border-[#E1E1E1]'>
                    Product Component 7
                </div>
          </div> */}




          </div>
    </section>
  )
}

export default Product