import React from 'react'


const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-r from-[#10403B] via-[#637371] to-[#BFBFBF] p-4 text-[#B6c4B6]'>
            <div className='flex flex-col p-4 justify-start max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold  inline border-b-4 border-[#B6c4B6]'>Contact</p>
                    <p className='py-6 font-semibold text-2xl'>Get In Touch With Me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/71ee8352-d1ed-411d-817d-58559a7b5436" method='POST' className='flex flex-col w-full md:w-1/2 '>
                        <input type='text' name='name' placeholder='Enter Your Name' className='p-2 bg-[#10403B] rounded-md text-white focus:outline-none'/>
                        <input type='text' name='email' placeholder='Enter Your Email' className='p-2 bg-[#10403B] rounded-md text-white focus:outline-none my-4' />
                        <textarea name='message' rows="10" className='p-2 bg-[#10403B] rounded-md text-white focus:outline-none'>
                        </textarea>
                        <button className='text-white bg-[#10403B] px-6 py-3 m-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 focus:outline-none'>
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
    }

export default Contact
