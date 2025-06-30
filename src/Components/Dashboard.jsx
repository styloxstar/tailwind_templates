import React from "react";
import colorUI from "../Common/coolorUi.json";

const Dashboard = ({ color }) => {
  const dashboardCounterElements = [
    {
      id: 1,
      name: "Component 1",
      value: 50,
    },
    {
      id: 2,
      name: "Component 2",
      value: 70,
    },
    {
      id: 3,
      name: "Component 3",
      value: 30,
    },
    {
      id: 4,
      name: "Component 4",
      value: 30,
    },
  ];


  const dashboardChartElements = [
    {
      id: 1,
      name: "Component 1",
      value: 50,
    },
    {
      id: 2,
      name: "Component 2",
      value: 70,
    },
    {
      id: 3,
      name: "Component 3",
      value: 30,
    }
  ];


  const dashBoardBarChartElement = [
    {
      id: 1,
      name: "Component 1",
      value: 50,
    }
  ]
  return (
    <section id="dashboard" className="">
      <div className="flex justify-center align-middle items-center">
        {dashboardCounterElements.map((counterData, i) => (
          <DashboardCounter
            headerName={counterData.name}
            headerContent={counterData.value}
            backgroundColor={colorUI[color].backgroundSecondaryColor}
            darkBackGroundColor={colorUI[color].darkBackgroundSecondaryColor}
            borderColor={colorUI[color].borderColor}
            darkBorderColor={colorUI[color].darkBorderColor}
            textColor={colorUI[color].contentTextColor}
            darkTextColor={colorUI[color].darkContentTextColor}
          />
        ))}
      </div>

      <div className="flex">
            {
                dashboardChartElements.map((chartData,i)=>(
                    <DashboardChart
                        headerName={chartData.name}
                        headerContent={chartData.value}
                        backgroundColor={colorUI[color].backgroundSecondaryColor}
                        darkBackGroundColor={colorUI[color].darkBackgroundSecondaryColor}
                        borderColor={colorUI[color].borderColor}
                        darkBorderColor={colorUI[color].darkBorderColor}
                        textColor={colorUI[color].contentTextColor}
                        darkTextColor={colorUI[color].darkContentTextColor}
                    />
                ))
            }
      </div>

      <div className="flex">
{
                dashBoardBarChartElement.map((barChartData,i)=>(
                    <DashboardBarChart
                        headerName={barChartData.name}
                        headerContent={barChartData.value}
                        backgroundColor={colorUI[color].backgroundSecondaryColor}
                        darkBackGroundColor={colorUI[color].darkBackgroundSecondaryColor}
                        borderColor={colorUI[color].borderColor}
                        darkBorderColor={colorUI[color].darkBorderColor}
                        textColor={colorUI[color].contentTextColor}
                        darkTextColor={colorUI[color].darkContentTextColor}
                    />
                ))
            }
      </div>
    </section>
  );
};

export const DashboardCounter = ({
  headerName,
  headerContent,
  backgroundColor,
  darkBackGroundColor,
  borderColor,
  darkBorderColor,
  textColor,
  darkTextColor
}) => {
  return (
    <div
      className={`basis-1/3 w-full ${textColor} ${darkTextColor} ${backgroundColor} ${darkBackGroundColor} border-b-4 ${borderColor} border-opacity-70 ${darkBorderColor} h-28 mx-4 shadow-md rounded-md  transition-all hover:scale-105 delay-500 ease-in-out dark:bg-opacity-25`}
    >
      <div className={`${textColor} ${darkTextColor} Content text-5xl mt-5 text-center font-semibold p-2`}>
                    {headerContent}
            
      </div>
    </div>
  );
};


export const DashboardChart = ({
    headerName,
    headerContent,
    backgroundColor,
    darkBackGroundColor,
    borderColor,
    darkBorderColor,
    textColor,
    darkTextColor
  }) => {
    return (
      <div
        className={`basis-1/2 w-full h-72 ${textColor} ${darkTextColor} ${backgroundColor} ${darkBackGroundColor}  m-4 shadow-md rounded-md dark:bg-opacity-25`}
      >
        {/* <div id="header" className={`text-center p-2 border-b ${borderColor}-800`}>
          {headerName}
        </div> */}
        <div className={`${textColor} ${darkTextColor} Content text-5xl text-center font-semibold p-2 `}>
                      {/* {headerContent} */}
              
        </div>
      </div>
    );
  };


  export const DashboardBarChart = ({
    headerName,
    headerContent,
    backgroundColor,
    darkBackGroundColor,
    borderColor,
    darkBorderColor,
    textColor,
    darkTextColor
  }) => {
    return (
      <div
        className={`basis-full w-full h-96 ${textColor} ${darkTextColor} ${backgroundColor} ${darkBackGroundColor}  mx-4 mt-10 mb-40 shadow-md rounded-md dark:bg-opacity-25`}
      >
        {/* <div id="header" className={`text-center p-2 border-b ${borderColor}-800`}>
          {headerName}
        </div> */}
        <div className={`${textColor} ${darkTextColor} Content text-5xl text-center font-semibold p-2 `}>
                      {/* {headerContent} */}
              
        </div>
      </div>
    );
  };

export default Dashboard;
