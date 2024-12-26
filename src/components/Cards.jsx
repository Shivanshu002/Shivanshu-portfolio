// Importing React and assets
import React from 'react'; 
import Github from '../assets/Github.png'; // Image for the GitHub icon

// Cards Component - Displays individual project details
const Cards = ({ item }) => {
    return (
        <div className='border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50'>
            {/* Image of the project */}
            <img src={item.image} alt="Project thumbnail" className='rounded-lg' />

            {/* Card content */}
            <div className='p-4'>
                {/* Project Title */}
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>

                {/* Project Description */}
                <p>{item.desc}</p>

                {/* Buttons for Live Preview and GitHub Link */}
                <div className='flex gap-3 mt-4'>
                    {/* Live Preview Button */}
                    <button className='bg-red-500 text-white px-3 py-2 rounded-md'>
                        <a href={item.live} target='_blank' rel='noopener noreferrer'>
                            Live Preview
                        </a>
                    </button>

                    {/* GitHub Link Button */}
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <a href={item.github} target='_blank' rel='noopener noreferrer' className='flex gap-1'>
                            {/* GitHub Icon */}
                            <img src={Github} alt="GitHub icon" className='w-6' />
                            Github Link
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Exporting the Cards component
export default Cards;
