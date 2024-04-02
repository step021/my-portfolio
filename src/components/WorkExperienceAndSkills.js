import React from 'react';
// Import your icons here, assuming you have them in the src/assets directory
import pyIcon from '../python.png';
import javaIcon from '../java.webp';
import androidIcon from '../android.png';
import cIcon from '../C.png';
import htmlIcon from '../html.webp';
import cssIcon from '../css.svg.png';
import jsIcon from '../javascript.png';
import powerIcon from '../powerbi.png';
import gitIcon from '../github.svg.png';
import reactIcon from '../React.svg.png';
import exIcon from '../excel.svg.webp';
import sqlIcon from '../sql.png';
import sqlSIcon from '../SQLserver.png';
import latexIcon from '../Latex.png';

export default function WorkExperienceAndSkills(){
    return (
        <main className="relative pt-8 lg:pt-20 px-8 flex flex-col min-h-screen">
            {/* Title Section */}
            <div className="z-10 mb-20">
                <h2 className="text-6xl text-blue-400 font-bold cursive flex justify-center about-name">Experience/Skills:</h2>
            </div>

            {/* Content Section */}
            <div className="flex flex-wrap justify-center lg:justify-start lg:flex-nowrap">
                {/* Skills Section */}
                <div className="flex flex-wrap justify-center lg:justify-start w-full lg:w-1/2">


                    {/* Individual skill container */}
                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={pyIcon} alt="py" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">Python</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={javaIcon} alt="java" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">Java</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={cIcon} alt="c" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">C</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={htmlIcon} alt="html" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">HTML</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={cssIcon} alt="css" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">CSS</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={jsIcon} alt="js" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">Java Script</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={powerIcon} alt="pb" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">PowerBi</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={gitIcon} alt="git" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">Github/Git</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={reactIcon} alt="react" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">React</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={sqlIcon} alt="sql" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">SQL</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={exIcon} alt="ex" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">Excel</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={sqlSIcon} alt="sqS" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">SQL Server</p> {/* Ensure text wraps */}
                    </div>

                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover"> {/* Adjust padding as needed */}
                        {/* Skill icon in a circle */}
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            <img src={latexIcon} alt="latex" className="h-12 w-12"/> {/* Icon size can be adjusted */}
                        </div>
                        {/* Skill name */}
                        <p className="text-center mt-2 text-sm w-full">Latex</p> {/* Ensure text wraps */}
                    </div>
                    <div className="w-1/3 p-2 flex flex-col items-center enlarge-on-hover">
                        <div className="flex justify-center items-center h-24 w-24 bg-blue-200 rounded-full">
                            {/* Use your Android Studio icon here */}
                            <img src={androidIcon} alt="Android Studio" className="h-12 w-12"/>
                        </div>
                        <p className="text-center mt-2 text-sm w-full">Android Studio</p>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="w-full lg:w-1/2 lg:pl-10">
                    {/* Individual experience */}
                    <div className="mb-4">
                        <h3 className="text-xl text-blue-600 font-bold">Risk Manager</h3>
                        <p className="text-md text-blue-400">Sigma Nu Gamma Alpha - Current</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl text-blue-600 font-bold">Behavioral Data Analytics Intern</h3>
                        <p className="text-md text-blue-400">Assurant - 2023</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl text-blue-600 font-bold">House Manager</h3>
                        <p className="text-md text-blue-400">Sigma Nu Gamma Alpha - 2022/2023</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl text-blue-600 font-bold">Sales Associate</h3>
                        <p className="text-md text-blue-400">Footlocker - 2022</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl text-blue-600 font-bold">Community Networking Lead</h3>
                        <p className="text-md text-blue-400">Gulliver Prep TWI/Breakthrough Miami Volunteer Group - 2020</p>
                    </div>
                    
                </div>
        
            </div>
        </main>
    );
}
