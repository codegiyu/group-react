import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import logopic from './img/logo.png'

// Delete the original index.js after creating your branch, then rename this one to index.js
// The above imports are alright unless you have an image to use, then you add that import too, 
// following the picture import example above.
// Please delete these comments after using them
// Here's a sample functional component to guide you in creating yours

const Block = () => {
    return (
        <div className='block w-full'>
            <section className='py-10 w-full'>
                <div className='container mx-auto py-10 bg-blue-300 rounded-lg px-8'>
                    <h1 className='text-5xl font-bold text-center font-mono'>A random header</h1>
                    <p className='text-xl mt-4'>Some random text</p>
                </div>
            </section>
        </div>
    )
}




const App = () => {
  return (
    <div className='app'>
      <Block />
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
