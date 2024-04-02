import React from 'react';
import image from '../blue.jpg';

export default function Home() {
    return (
        <main>
            <img src={image} alt="Blue tint" className='absolute object-cover w-full h-full' />
            <section className='relative flex justify-center items-center min-h-screen pt-8 lg:pt-25 px-8'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-100 font-bold cursive leading-none lg:leading-snug home-name text-center'>Sebastian Stephens E-Portfolio</h1>
            </section>
        </main> 
    );  
}