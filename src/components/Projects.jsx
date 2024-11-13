
import React from "react";
import rbtree from '../assets/rbtree.png'
import monitor from '../assets/monitor.jpg'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='RB-Tree' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={rbtree} alt="" />
            </a>}
            {title=='Monitering-Alone-Living-Elderly-People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={monitor} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
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
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
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
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'RB Tree - Top Down Insertion',
        description:'Red-Black Tree (RB Tree) Insertion – Top-Down Approach: In the Top-Down approach for Red-Black Tree insertion, we ensure that the tree remains balanced as we move down from the root to the point of insertion, without needing to backtrack. This method splits 4-nodes and performs rotations while traversing down the tree to keep the properties of the RB Tree intact.',
        image: {rbtree},
        git:'https://github.com/aashleshdhumane/RBTree',
        technologies:['Java']
    },
    {
        title:'Monitoring the Alone Living Elderly People at Home using Surveillance System',
        description:'The revised version of World Population Prospects (2019) predicts that till 2050 one in sixth person will be above the age of 65. The problem of aging in population is faced by all over the world. The health care of this population becomes very crucial issue for the Nation. Monitoring these people via video surveillance system can be one of the affordable solutions to this problem. Video Surveillance can act as long distant eye for the family members staying away from family. This paper provides the affordable solution for elder person monitoring through home surveillance system. Since major accidents at home with elder person happen due to fall, our proposed system detects fall of person. The background subtraction becomes preprocessing step, human being detection, contour detection, classification and then alert generation if fall happens is the flow of our system. The system is tested on 30 videos and it gives accuracy of 90%.',
        image: {monitor},
        git:"https://github.com/aashleshdhumane/Monitoring-the-Alone-Living-Elderly-People-at-Home-using-Surveillance-System-",
        technologies:[ 'Python', 'SMTP', 'Flask', 'CV2', 'Contours']
    }
]

export default Projects