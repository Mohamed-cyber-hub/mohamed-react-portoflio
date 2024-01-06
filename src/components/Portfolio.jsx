// import React from 'react'
// import travelWithMe from '../assets/portfolio/travelWithMe.png'
// import presonalBudgetTracker from '../assets/portfolio/presonalBudgetTracker.png'
// import portfolio from '../assets/portfolio/portfolio.png'
// import itHost from '../assets/portfolio/itHost.png'
// import fontName from '../assets/portfolio/fontName.png'
// import illdy from '../assets/portfolio/illdy.png'
// const Portfolio = () => {
        
//     const portfolios = [
//       {
//         id: 1,
//         src: travelWithMe,
//         demo: 'https://travel-with-me-seven.vercel.app/',
//       },
//       {
//         id: 2,
//         src: presonalBudgetTracker,
//         demo: 'https://personal-budget-tracker-2.vercel.app/',
//       },
//       {
//         id: 3,
//         src: portfolio,
//         demo: 'https://elaborate-sorbet-5f9181.netlify.app/',
//       },
//       {
//         id: 4,
//         src: itHost,
//         link: 'https://profound-pegasus-6c4699.netlify.app/',
//       },
//       {
//         id: 5,
//         src: fontName,
//         demo: 'https://shimmering-salmiakki-44518f.netlify.app/',
//       },
//       {
//         id: 6,
//         src: illdy,
//         demo: 'https://delicate-gecko-336bb1.netlify.app/',
//       },
//     ];


//     return (
//         <div name="portfolio" className='bg-gradient-to-b from-[#B6C4B6] via-[#304D30] to-[#163020] w-full text-[#304D30] md:h-screen'>
//             <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
//                 <div className='pb-8 mt-10'>
//                     <p className='text-4xl font-bold inline border-b-4 border-[#567456] md:mt-6 leading-10'>
//                         Some Projects I Have Worked On:
//                     </p>
//                     <p className='py-6 mt-6 font-bold'>
//                         Click on the images to see more details!
//                     </p>
//                 </div>


//                 <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0'>
//                     {portfolios.map(({ id, src }) => (
//                     <div key={id} className='shadow-md shadow-[#B6C4B6] rounded-lg'>
//                         <img src={src} alt='' className='rounded-md duration-300 hover:scale-105 '/>
//                         <div className='flex items-center justify-center'>
//                             <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-[#B6C4B6] font-semibold border-2 rounded-lg border-black '>Code</button>
//                             <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-[#B6C4B6] font-semibold border-2 rounded-lg border-black'>Demo</button>
//                         </div>
//                     </div>
//                 ))}
//                 </div>
//             </div>
//         </div>
//     )
//     }

// export default Portfolio



import React from 'react';
import travelWithMe from '../assets/portfolio/travelWithMe.png';
import presonalBudgetTracker from '../assets/portfolio/presonalBudgetTracker.png';
import portfolio from '../assets/portfolio/portfolio.png';
import itHost from '../assets/portfolio/itHost.png';
import fontName from '../assets/portfolio/fontName.png';
import illdy from '../assets/portfolio/illdy.png';
import anime from '../assets/portfolio/anime.png'
import plumber from '../assets/portfolio/plumber.png'
import echo from '../assets/portfolio/echo.png'

const Portfolio = () => {
  const handleCodeButtonClick = (code) => {
    window.open(code, '_blank');
  };

  const handleDemoButtonClick = (demoUrl) => {
    window.open(demoUrl, '_blank');
  };

    const portfolios = [
      {
        id: 1,
        src: travelWithMe,
        demo: 'https://travel-with-me-seven.vercel.app/',
        code: 'https://github.com/Mohamed-cyber-hub/travel-with-me',
      },
      {
        id: 2,
        src: presonalBudgetTracker,
        demo: 'https://personal-budget-tracker-2.vercel.app/',
        code: 'https://github.com/Mohamed-cyber-hub/personal-budget-tracker-2',
      },
      {
        id: 3,
        src: portfolio,
        demo: 'https://elaborate-sorbet-5f9181.netlify.app/',
        code: 'https://github.com/Mohamed-cyber-hub/Portfolio-no-1',
      },
      {
        id: 4,
        src: itHost,
        demo: 'https://profound-pegasus-6c4699.netlify.app/',
        code: 'https://github.com/Mohamed-cyber-hub/It-Host-project',
      },
      {
        id: 5,
        src: plumber,
        demo: 'https://658605f72473eb19fa87eb57--enchanting-creponne-ef421f.netlify.app/',
        code: 'https://github.com/Mohamed-cyber-hub/Plumber-Project',
      },
      {
        id: 6,
        src: echo,
        demo: 'https://658605592473eb1a1687ead9--enchanting-creponne-ef421f.netlify.app/',
        code: 'https://github.com/Mohamed-cyber-hub/Echo-Project',
      },
      {
        id: 7,
        src: fontName,
        demo: 'https://shimmering-salmiakki-44518f.netlify.app/',
        code: 'https://github.com/Mohamed-cyber-hub/Font-Name-With-javaScript',
      },
      {
        id: 8,
        src: illdy,
        demo: 'https://delicate-gecko-336bb1.netlify.app/',
        code: 'https://github.com/Mohamed-cyber-hub/LLdy-Project',
      },
      {
        id: 9,
        src: anime,
        demo: 'https://anime-server-action.vercel.app/',
        code: 'https://github.com/Mohamed-cyber-hub/Anime-Server-Action',
      },
    ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-r from-[#10403B] via-[#637371] to-[#BFBFBF] w-full text-[#304D30] pt-40 md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h3 className="text-4xl text-[#B6C4B6] font-bold inline border-b-4 border-[#B6C4B6]">
            Some Projects I
            Have Worked On:
          </h3>
          <p className="py-6 text-[#B6C4B6]">
            Click on the
            buttons to see
            more details!
          </p>
        </div>
        <div className="grid mb-20 sm:grid-cols-2  md:grid-cols-3 gap-8 px-12 sm:p-0">
          {portfolios.map(
            ({
              id,
              src,
              demo,
              code,
            }) => (
              <div
                key={id}
                className="shadow-md shadow-[#B6C4B6] rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-300 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    onClick={() =>
                      handleCodeButtonClick(
                        code
                      )
                    }
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-[#B6C4B6] font-semibold border-2 rounded-lg border-[#127369] hover:bg-[#127369]">
                    Code
                  </button>
                  {demo && (
                    <button
                      onClick={() =>
                        handleDemoButtonClick(
                          demo
                        )
                      }
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-[#B6C4B6] font-semibold border-2 rounded-lg border-[#127369] hover:bg-[#127369]">
                      Demo
                    </button>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;



