import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import padlock from '../img/padlock.png'

// Delete the original index.js after creating your branch, then rename this one to index.js
// The above imports are alright unless you have an image to use, then you add that import too, 
// following the picture import example above.
// Please delete these comments after using them
// Here's a sample functional component to guide you in creating yours

<<<<<<<< HEAD:src/components/secure.jsx
const Secure = () => {
    return (
        <div className='w-full flex justify-center py-5'>
            <div className='flex items-center'>
              <img src={padlock} alt="security"/>
              <p className='text-muted font-inter text-xs ml-3'>Your Info is safely secured</p>
            </div>
        </div>
    )
========
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
>>>>>>>> develop:src/components/headings.jsx
}

export default Heading




const App = () => {
<<<<<<<< HEAD:src/components/secure.jsx
  return (
    <div className='app'>
      <Secure />
    </div>
  )
========
return (
  <div className='app'>
    <Heading heading={"Join Us!"}
    paragraph={"To begin this journey, tell us what type of account you'd be opening."}
    />
  </div>
)
>>>>>>>> develop:src/components/headings.jsx
}

// The below code should not be touched. 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default Secure