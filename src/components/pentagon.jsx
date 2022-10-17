import React from "react";
import "../index.css";
import briefcase from '../img/briefcase.png';
import polygonOne from '../img/PolygonOne.png';
import polygonTwo from '../img/PolygonTwo.png';
import user from '../img/user.png';

const Pentagon = ({headerOne, headerTwo, summaryOne, summaryTwo}) => {
    return (
      <main className="">
        <div className="flex items-center border border-white shadow hover:shadow-none hover:border-[#1565D8] rounded-lg py-3 px-5 mb-5 w-full hover:bg-[#F5F9FF] cursor-pointer">
          <div className="relative">
            <img src={polygonOne} alt="polygon1" />
            <img src={user} className="absolute top-4 left-4" alt="user-logo" />
          </div>
          <div className="px-5">
            <h1 className="font-bold text-xs">{headerOne}</h1>
            <p className="text-[11px] text-muted">{summaryOne}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#1565D8"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </div>
        <div className="flex border border-white rounded-lg shadow hover:shadow-none hover:border-[#1565D8] py-3 px-5 w-full cursor-pointer hover:bg-[#F5F9FF]">
          <div className="relative">
            <img src={polygonTwo} alt="polygon1" />
            <img
              src={briefcase}
              className="absolute top-4 left-4"
              alt="user-logo"
            />
          </div>
          <div className="px-5">
            <h1 className="font-bold text-xs">{headerTwo}</h1>
            <p className="text-[11px] text-muted">{summaryTwo}</p>
          </div>
        </div>
      </main>
    );
}


export default Pentagon;