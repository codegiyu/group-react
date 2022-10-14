import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import '../index.css';



const Heading = ({heading, paragraph}) => {
  return (
      <div className='block w-full'>
          <section className='w-full'>
              <div className='mx-auto py-10 font-inter'>
                  <h1 className='text-xl font-bold text-left'>{heading}</h1>
                  <p className='mt-2 font-normal text-left text-ash text-sm'>{paragraph}</p>
              </div>
          </section>
      </div>
  )
}

export default Heading




// const App = () => {
// return (
//   <div className='app'>
//     <Heading heading={"Join Us!"}
//     paragraph={"To begin this journey, tell us what type of account you'd be opening."}
//     />
//   </div>
// )
// }

// // The below code should not be touched. 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );