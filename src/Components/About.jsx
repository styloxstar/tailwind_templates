import React from 'react'
import about from "../assets/img/about1Updated.png"
import colorUI from "../Common/coolorUi.json"

const About = ({color}) => {
  return (
    <section id="about" className={`${colorUI[color].contentTextColor}  ${colorUI[color].darkContentTextColor} dark:text-opacity-80`}>
      <div className="header text-4xl font-semibold text-center my-5">
        About Us
      </div>

      <div className="description block w-full max-w-screen-md px-4 py-1 mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fugiat
        incidunt earum molestiae, quae perspiciatis corporis repudiandae
        laborum, recusandae tempora voluptatem! Deleniti quod placeat, id
        consequatur iste velit exercitationem, nulla repellat earum laborum hic.
      </div>

      <div className="flex w-full max-w-screen-xl mx-auto my-4 justify-center ">

        <div className={`w-56 h-72 ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} rounded-md shadow-md m-3 dark:bg-opacity-25`}></div>
        <div className={`w-56 h-72 ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} rounded-md shadow-md m-3 dark:bg-opacity-25`}></div>
        <div className={`w-56 h-72 ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} rounded-md shadow-md m-3 dark:bg-opacity-25`}></div>
        <div className={`w-56 h-72 ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} rounded-md shadow-md m-3 dark:bg-opacity-25`}></div>
      </div>

      <div className={`aboutInfo  ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} bg-opacity-70 flex w-full max-w-screen-xl mx-auto justify-center my-10 py-20 align-middle items-center dark:bg-opacity-25`}>
          <div className="basis-[30%] ">
              <img src={about} alt="about us" className='w-screen'/>
          </div>

          <div className="basis-[70%] p-3 rounded-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dolore repudiandae corporis voluptatum facere rem, non ex quas quibusdam aspernatur accusantium suscipit, eveniet voluptates tempora perspiciatis reiciendis mollitia molestiae! Vitae sequi, voluptatum iure assumenda incidunt labore. Similique consequatur obcaecati omnis sint, maiores pariatur quaerat consequuntur id! Laudantium temporibus quasi maxime. Vitae aliquid rerum omnis iusto quia vel et sed quam libero, quos ut blanditiis quasi.
              </p>
          </div>


      </div>


      <div className="statistics flex w-full max-w-screen-xl mx-auto my-4 justify-center mb-60">
        <div className={`w-24 h-24  ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} rounded-md shadow-md m-3 dark:bg-opacity-25`}></div>
        <div className={`w-24 h-24  ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} rounded-md shadow-md m-3 dark:bg-opacity-25`}></div>

        <div className={`w-24 h-24  ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} rounded-md shadow-md m-3 dark:bg-opacity-25`}></div>

        <div className={`w-24 h-24  ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} rounded-md shadow-md m-3 dark:bg-opacity-25`}></div>

        <div className={`w-24 h-24  ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} rounded-md shadow-md m-3 dark:bg-opacity-25 `}></div>
      </div>
    </section>
  );
}

export default About