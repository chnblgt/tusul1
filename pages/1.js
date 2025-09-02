import React from 'react';

export default function WebSite() {
  return (
    <div className='w-full h-screen bg-white'>
        <div className='w-full h-[10%] bg-white flex items-center'>
            <p className='text-blue-900 font-bold p-20 text-2xl'>Cody.mn</p>
            <div className='space-x-20 flex p-76 text-xl'>
                <p className='text-yellow-400 hover:text-red-400 hover:font-bold transition'>Ub Cab</p>
                <p className='text-indigo-700 hover:text-red-400 hover:font-bold transition'>Shoppy</p>
                <p className='text-black hover:text-red-400 hover:font-bold transition'>Details</p>
            </div>
        </div>
        <div className='h-[80%] w-full flex'>
            <div className='h-full w-1/3 bg-black items-center justify-center flex'>
                <img className='h-96 animate-pulse' src='https://cody.mn/1cd35d29a81cba642bccd7564874f486.png'>
                    
                </img>
            </div>
            <div className='h-full w-1/3 bg-black flex items-center justify-center'>
                <p className='font-bold shadow-md mb-72 text-2xl'>Get Pro Codes From Cody</p>
                <div>
                    <p className='text-xl shadow-md font-bold mb-2'>Pro Code ++</p>
                    <p className='text-xl shadow-md font-bold'>AI codes</p>
                </div>
            </div>
            <div className='h-full w-1/3 bg-black'>
                
            </div>
        </div>
        <div className='w-full h-[10%] bg-white text-black flex items-center justify-center'>
            <p>Welcome to my Website. I have done this code for only 1 hour </p>
        </div>
        
    </div>
  );
}