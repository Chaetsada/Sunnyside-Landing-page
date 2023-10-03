import React from 'react'
import './contents.css'

const Contents = () => {
    return (
        <main className='w-full h-auto'>
            <section className='sm:flex-col sm:h-[700px] w-full h-[600px] flex'>
                <div className='sm:order-1 sm:w-full w-2/4 h-full order-2' id='images-1'></div>
                <div className='sm:px-4 sm:py-4 sm:items-center sm:order-2 sm:w-full sm:justify-center w-2/4 h-full order-1 flex flex-col items-start px-48 py-40 gap-8'>
                    <h3 className='sm:text-4xl sm:text-center text-black text-5xl'>Transform your brand</h3>
                    <p className='sm:text-center sm:text-base text-slate-400 text-xl'>
                        We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>
                    <a className='underline decoration-4 decoration-yellow-200 hover:underline-offset-8' href="#">LEARN MORE</a>
                </div>
            </section>

            <section className='sm:flex-col sm:h-[700px] w-full h-[600px] flex'>
                <div className=' sm:w-full w-2/4 h-full order-1' id='images-2'></div>
                <div className='sm:px-4 sm:py-4 sm:items-center sm:w-full sm:justify-center w-2/4 h-full order-2 flex flex-col items-start px-48 py-40 gap-8'>
                    <h3 className='sm:text-4xl sm:text-center  text-black text-5xl'>Stand out to the right audience</h3>
                    <p className='sm:text-center sm:text-base text-slate-400 text-xl'>
                        Using a collaborative formula of designers, researchers, photographers, videographic, nad copywriters, we'll build and extend your brand in digital places.
                    </p>
                    <a className='underline decoration-4 decoration-pink-200 hover:underline-offset-8' href="#">LEARN MORE</a>
                </div>
            </section>

            <section className='sm:flex-col sm:h-[1300px] w-full h-[600px] flex'>
                <div className='sm:w-full sm:py-24 sm:px-8 w-2/4 h-full py-16 px-64  flex flex-col justify-end items-center gap-5' id='images-3'>
                    <h3 className='text-green-900 text-3xl'>Graphic Design</h3>
                    <p className='text-green-900 text-xl text-center'>
                        Great design makes you memorable. We deliver artwork that underscores your brand message and capture potential client's attention.
                    </p>
                </div>
                <div className='sm:w-full sm:py-24 sm:px-8 w-2/4 h-full py-16 px-64  flex flex-col justify-end items-center gap-5' id='images-4'>
                    <h3 className='text-green-900 text-3xl'>Photograpy</h3>
                    <p className='text-green-900 text-xl text-center'>
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Contents