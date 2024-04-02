import React from 'react';

import image from '../GT.jpg';
import images from '../Seb.PNG';
import image1 from '../seb2.png';

export default function About() {
    return (
        <main className="flex justify-center items-center flex-col min-h-screen pt-8 lg:pt-20 px-8 lg:pb-20">
            {/* Title Section */}
            <div className="mb-5">
                <h2 className="text-6xl text-blue-400 font-bold cursive flex justify-center about-name">About Me:</h2>
            </div>

            {/* Images Section */}
            <section className='flex justify-center items-center gap-20'>
                {/* Image 1 Container */}
                <div className='flex flex-col items-center content-container'>
                    <img src={image} alt="Georgia Tech" className="image-style" />
                    <p className="mt-2 text-blue-400 text-below">Computer Science Student at Georgia Tech</p>
                    <p className="mt-2 text-blue-400 text-below">Minor in Economics</p>
                </div>
                {/* Image 2 Container */}
                <div className='flex flex-col items-center content-container'>
                    <img src={images} alt="Marathon Runner" className="image-style" />
                    <p className="mt-2 text-blue-400 text-below">Marathon Runner</p>
                    <p className="mt-2 text-blue-400 text-below">(Pictured: Atlanta Publix marathon 2024)</p>
                </div>
                {/* Image 3 Container */}
                <div className='flex flex-col items-center content-container'>
                    <img src={image1} alt="Looking for Work" className="image-style" />
                    <p className="mt-2 text-blue-400 text-below">Looking for Work</p>
                    <p className="mt-2 text-blue-400 text-below">SWE or Data Analytics Roles</p>
                </div>
            </section>
        </main>
    );
}


