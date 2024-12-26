import React from 'react'; // Importing React library
import Portfolio from '../assets/Portfolio.png'; // Importing image for the portfolio project
import SpicyBites from '../assets/SpicyBites.png'; // Importing image for the Spicy Bites project
import Youtube from '../assets/Youtube.png'; // Importing image for the YouTube clone project
import Webelite from '../assets/Webelite.png'; // Importing image for the Webelite builder project
import Supercar from '../assets/Supercar.png'; // Importing image for the Super Car project
import Cards from './Cards'; // Importing the Cards component to display individual project details

const Projects = () => {
    // Array of project objects with details about each project
    const projectJson = [
        {
            title: 'Portfolio',
            desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
            image: Portfolio,
            live: "https://rohitsingh93300-portfolio.vercel.app/", // Link to the live project
            github: "https://github.com/rohitsingh93300/portfolio" // Link to the GitHub repository
        },
        {
            title: 'Spicy Bites',
            desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
            image: SpicyBites,
            live: "https://spicybites.netlify.app/", // Link to the live project
            github: "https://github.com/rohitsingh93300/YtSpicyBites" // Link to the GitHub repository
        },
        {
            title: 'YouTube Clone',
            desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
            image: Youtube,
            live: "https://youtube-clone-93300.netlify.app/", // Link to the live project
            github: "https://github.com/rohitsingh93300/YouTube-clone" // Link to the GitHub repository
        },
        {
            title: 'Webelite builder',
            desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
            image: Webelite,
            live: "https://www.webelitebuilders.com/", // Link to the live project
            github: "#" // GitHub link (not provided for this project)
        },
        {
            title: 'Super Car',
            desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
            image: Supercar,
            live: "https://supercar123.netlify.app/", // Link to the live project
            github: "https://github.com/rohitsingh93300/supercars" // Link to the GitHub repository
        },
    ];

    return (
        <section id='projects' className='relative bg-gray-700 py-10 px-4'>
            {/* Section for projects with background color, padding and responsive design */}

            <div className='mb-16 max-w-7xl mx-auto'>
                {/* Container to center the content with a maximum width */}

                <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>
                    {/* Title for the section with border bottom and padding */}
                    My Projects
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
                    {/* Grid container to display projects in different column layouts depending on screen size */}

                    {projectJson.map((items) => {
                        return <Cards item={items} />;
                        // Iterate through the projectJson array and pass each project to the Cards component
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
