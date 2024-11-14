import React from "react";
import Footer from './Footer';
import rbtree from '../assets/rbtree.png'
import monitor from '../assets/monitor.jpg'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {/* Render project image */}
            <a href={git} target="_blank" rel="noopener noreferrer">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>

            <div className="p-4 sm:p-6">
                <a href={git} target="_blank" rel="noopener noreferrer">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
                    {description}
                </p>
            </div>

            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>

                {/* GitHub link */}
                <a href={git} target="_blank" rel="noopener noreferrer" className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

// Project data
export const project = [
    {
        title: 'RB Tree - Top Down Insertion',
        description: 'Red-Black Tree (RB Tree) Insertion – Top-Down Approach: In this approach, we balance the tree as we move from root to insertion without backtracking, splitting 4-nodes and rotating where necessary.',
        image: rbtree,
        git: 'https://github.com/aashleshdhumane/RBTree',
        technologies: ['Java']
    },
    {
        title: 'Monitoring the Alone Living Elderly People at Home using Surveillance System',
        description: 'A video surveillance system that monitors elderly individuals living alone. It detects falls with 90% accuracy using video processing techniques such as background subtraction, human detection, contour detection, and alert generation.',
        image: monitor,
        git: 'https://github.com/aashleshdhumane/Monitoring-the-Alone-Living-Elderly-People-at-Home-using-Surveillance-System-',
        technologies: ['Python', 'SMTP', 'Flask', 'CV2', 'Contours']
    }
];

export default Projects;
