import React from 'react'
import html from '../assets/html.png'
import reactImage from '../assets/react.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {

    const technologies = [
        {
            id: 1, 
            img: html,
            name: "HTML5",
            style:"shadow-orange-500"
        },
        {
            id: 2, 
            img: reactImage,
            name: "React",
            style:"shadow-blue-600"
        },
        {
            id: 3, 
            img: css,
            name: "Css",
            style:"shadow-blue-500"
        },
        {
            id: 4, 
            img: javascript,
            name: "JavaScript",
            style:"shadow-yellow-500"
        },
        {
            id: 5, 
            img: nextjs,
            name: "NextJs",
            style:"shadow-white"
        },
        {
            id: 6, 
            img: github,
            name: "Github",
            style:"shadow-gray-400"
        },
        {
            id: 7, 
            img: tailwind,
            name: "Tailwind",
            style:"shadow-sky-400"
        }
    ]


    return (
        
        <div name='experience' className='bg-gradient-to-b from-[#163020] via-[#304D30] to-[#B6C4B6] w-full h-fit'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='mt-20 pb-8'>
                    <p className='text-4xl font-bold border-b-4 border-[#B6c4B6] p-2 inline text-[#B6c4B6]'>Experience </p>
                    <p className='py-8 font-semibold text-2xl text-[#B6c4B6] pl-4'>Technologies </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {technologies.map(({ id, img, style, name }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={img} alt='projects' className='w-20 mx-auto'/>
                            <p className='mt-4'>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
    }

export default Experience
