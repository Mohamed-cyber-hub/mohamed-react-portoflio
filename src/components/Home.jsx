    import React from 'react';
    import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
    import {Link} from 'react-scroll'

    const Home = () => {
    return (
        <div
        name="home"
        className="h-screen w-full bg-gradient-to-r from-[#10403B] via-[#637371] to-[#BFBFBF]">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full sm:h-fit mt-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-[#B6C4B6]">
                I'm a FrontEnd
                Developer
            </h2>
            <p className="text-[#B6C4B6] py-4 max-w-md">
                I have experience in
                building and
                designing
                frontend websites.
                Currently, I love
                to work on web
                application using
                technologies like
                React, Tailwind,
                Next JS and
                React.
            </p>

            <div>
                <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-[#10403B]  to-[#10403B] cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight
                    size={25}
                    className="ml-1"
                    />
                </span>
                </Link>
            </div>
            </div>

            <div className='lg:h-fit md:h-fit sm:h-full'>
                <img
                    src={HeroImage}
                    alt="my profile"
                    className="rounded-2xl mx-auto w-2/3 md:w-full mt-4 sm:m-auto max-w-sm"
                />
            </div>
        </div>
        </div>
    );
    };

    export default Home;