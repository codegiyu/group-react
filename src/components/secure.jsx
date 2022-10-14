import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import padlock from '../img/padlock.png'


const Secure = () => {
    return (
        <div className='w-full flex justify-center py-5'>
            <div className='flex items-center'>
              <img src={padlock} alt="security"/>
              <p className='text-muted font-inter text-xs ml-3'>Your Info is safely secured</p>
            </div>
        </div>
    )
}

const App = () => {
  return (
    <div className='app'>
      <Secure />
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

export default Secure