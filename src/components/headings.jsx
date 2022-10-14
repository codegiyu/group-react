import React from 'react';
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
