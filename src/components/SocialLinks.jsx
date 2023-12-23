// import React from 'react'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import { HiOutlineMail } from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'

// const SocialLinks = () => {

//     const links = [
//         {
//             id: 1,
//             child: (
//                 <>
//                     LinkedIn <FaLinkedin size={35}/>
//                 </>
//             ),
//             href: 'https//linkedin.com',
//             style: 'rounded-tr-md'
//         },
//         {
//             id: 2,
//             child: (
//                 <>
//                     Github <FaGithub size={35}/>
//                 </>
//             ),
//             href: 'https://github.com/Mohamed-cyber-hub',
//         },
//         {
//             id: 3,
//             child: (
//                 <>
//                     Mail <HiOutlineMail size={35}/>
//                 </>
//             ),
//             href: 'mailto:mohamed.saad.tradelinestores@gmail.com',
//         },
//         {
//             id: 4,
//             child: (
//                 <>
//                     Resume <BsFillPersonLinesFill size={35}/>
//                 </>
//             ),
//             href: 'https//linkedin.com',
//             style: 'rounded-tr-md',
//             download: true
//         }
//     ]

//     return (
//         <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
//             <ul>
//                 {links.map(({id, href, style, child, download}) => (
//                     <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-[#163020] ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + style}>
//                         <a href={href} download={download} target='blank' rel='noreferrer' className='flex justify-between items-center w-full text-white'>
//                             {child}
//                     </a>
//                 </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }


// export default SocialLinks












    import React from "react";
    import { FaGithub, FaLinkedin } from "react-icons/fa";
    import { HiOutlineMail } from "react-icons/hi";
    import { BsFillPersonLinesFill } from "react-icons/bs";

    const SocialLinks = () => {
    const links = [
        {
        id: 1,
        child: (
            <>
            LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href: "https://www.linkedin.com/in/mohamed-saad-eldeen-641507243/",
        style: "rounded-tr-md",
        },
        {
        id: 2,
        child: (
            <>
            GitHub <FaGithub size={30} />
            </>
        ),
        href: "https://github.com/Mohamed-cyber-hub",
        },
        {
        id: 3,
        child: (
            <>
            Mail <HiOutlineMail size={30} />
            </>
        ),
        href: "mailto:mohamedsaadeldeen35@gmail.com",
        },
        {
        id: 4,
        child: (
            <>
            Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: "/Mohamed-resume.pdf",
        style: "rounded-br-md",
        },
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({ id, child, href, style, download }) => (
            <li
                key={id}
                className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-[#163020]" +
                " " +
                style
                }
            >
                <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
                >
                {child}
                </a>
            </li>
            ))}
        </ul>
        </div>
    );
    };

    export default SocialLinks;