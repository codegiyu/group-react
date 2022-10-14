import React from 'react';
import '../index.css';
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


export default Secure