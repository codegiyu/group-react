import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import logopic from './img/logo.png'

// Delete the original index.js after creating your branch, then rename this one to index.js
// The above imports are alright unless you have an image to use, then you add that import too, 
// following the picture import example above.
// Please delete these comments after using them
// Here's a sample functional component to guide you in creating yours

const Heading = ({heading, paragraph}) => {
    return (
        <div className='block w-full'>
            <section className='w-full'>
                <div className='mx-auto py-10 font-inter'>
                    <h1 className='text-3xl font-bold text-left'>{heading}</h1>
                    <p className='mt-2 font-normal text-left text-ash text-sizePara'>{paragraph}</p>
                </div>
            </section>
        </div>
    )
}

export default Heading




const App = () => {
  return (
    <div className='app'>
      <Heading heading={"Join Us!"}
      paragraph={"To begin this journey, tell us what type of account you'd be opening."}
      />
    </div>
  )
}

// The below code should not be touched. 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
