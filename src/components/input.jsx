import React, { Component } from 'react';

class Input extends Component {

    render() { 
        return <div>
            <form className='p-4'>
                <div className='mb-2'>
                    <label htmlFor='fullName' className='block pb-1'>Your fullname<span className='text-[#ef4444]'>*</span>
                    </label>
                    <input id='fullName' type='text' className='lg:w-1/4 w-1/2 border-2 border-black rounded p-2 hover:shadow-md focus:outline-none ' placeholder='Enter your name'></input>
                </div>
                <div>
                    <label htmlFor='email' className='block'>Email address<span className='text-[#ef4444]'>*</span>
                    </label>
                    <input id='email' type='text' className='p-2 rounded w-1/2 border-black border-2 lg:w-1/4 hover:shadow-md  focus:outline-none ' placeholder='Enter your email address'></input>
                </div>
            </form>
        </div>
    }
}


 
export default Input;