import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import travelWithMe from '../assets/portfolio/travelWithMe.png'
import presonalBudgetTracker from '../assets/portfolio/presonalBudgetTracker.png'
import portfolio from '../assets/portfolio/portfolio.png'
import itHost from '../assets/portfolio/itHost.png'
import fontName from '../assets/portfolio/fontName.png'
import illdy from '../assets/portfolio/illdy.png'
const Portfolio = () => {
        
    const portfolios = [
        {
        id: 1,
        src: travelWithMe
        },
        {
        id: 2,
        src: presonalBudgetTracker
        },
        {
        id: 3,
        src: portfolio
        },
        {
        id: 4,
        src: itHost
        },
        {
        id: 5,
        src: fontName
        },
        {
        id: 6,
        src: illdy
        },

    ]


    return (
        <div name="portfolio" className='bg-gradient-to-b from-[#B6C4B6] via-[#304D30] to-[#163020] w-full text-[#304D30] md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 mt-10'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#567456] md:mt-6 leading-10'>
                        Some Projects I Have Worked On:
                    </p>
                    <p className='py-6 mt-6 font-bold'>
                        Click on the images to see more details!
                    </p>
                </div>


                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0'> 
                    {portfolios.map(({ id, src }) => (
                    <div key={id} className='shadow-md shadow-[#B6C4B6] rounded-lg'> 
                        <img src={src} alt='' className='rounded-md duration-300 hover:scale-105 '/>
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-[#B6C4B6] font-semibold border-2 rounded-lg border-black '>Code</button>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-[#B6C4B6] font-semibold border-2 rounded-lg border-black'>Demo</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
    }

export default Portfolio
