import React from 'react';
import { Link } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
       <header className="bg-blue-600 bg-opacity-75 fixed top-0 z-50 w-full">
        <div className="container mx-auto flex justify-between">
            <nav className='flex'>
            <Link to="home" smooth={true} duration={500} className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-500 cursor-pointer">Home</Link>
<Link to="about" smooth={true} duration={500} className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-500 cursor-pointer">About</Link>
<Link to="projects" smooth={true} duration={500} className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-500 cursor-pointer">Projects</Link>
<Link to="workexperienceandskills" smooth={true} duration={500} className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-500 cursor-pointer">Work Experience and Skills</Link>
            </nav>
            <div className='inline-flex py-3 px-3 my-6'>
                <SocialIcon url="http://www.linkedin.com/in/sebastian-stephens-073556221" className='mr-4' target='_blank' fgColor = "#fff" style={{height:35,width:35}}/>
                <SocialIcon url="https://github.com/step021" className='mr-4' target='_blank' fgColor = "#fff" style={{height:35,width:35}}/>
                <SocialIcon url="mailto:sebastianxavierstephens@gmail.com" className='mr-4' target='_blank' fgColor = "#fff" style={{height:35,width:35}}/>
            </div>
        </div>
       </header>
    );
}








