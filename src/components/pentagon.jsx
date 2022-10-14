import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import briefcase from '../img/briefcase.png';
import polygonOne from '../img/PolygonOne.png';
import polygonTwo from '../img/PolygonTwo.png';
import user from '../img/user.png';

const Pentagon = ({headerOne, headerTwo, summaryOne, summaryTwo}) => {
    return (
      <main className="m-10">
        <div className="flex items-center border-2 border-blue-500 rounded-lg p-9 mb-10 w-1/3 hover:bg-sky-500 hover:text-white cursor-pointer">
          <div className="relative">
            <img src={polygonOne} alt="polygon1" />
            <img src={user} className="absolute top-4 left-4" alt="user-logo" />
          </div>
          <div className="px-5">
            <h1 className="font-bold text-2xl">{headerOne}</h1>
            <p>{summaryOne}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </div>
        <div className="flex border-2 rounded-lg shadow-lg p-10 w-1/3 cursor-pointer hover:bg-sky-500 hover:text-white">
          <div className="relative">
            <img src={polygonTwo} alt="polygon1" />
            <img
              src={briefcase}
              className="absolute top-4 left-4"
              alt="user-logo"
            />
          </div>
          <div className="px-5">
            <h1 className="font-bold text-2xl">{headerTwo}</h1>
            <p>{summaryTwo}</p>
          </div>
        </div>
      </main>
    );
}

const App = () => {
    return (
      <div>
        <Pentagon
          headerOne={"Individual"}
          summaryOne={"Personal account to manage all you activities."}
          headerTwo={"Business"}
          summaryTwo={"Own or belong to a company, this is for you."}
        />
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default Pentagon;