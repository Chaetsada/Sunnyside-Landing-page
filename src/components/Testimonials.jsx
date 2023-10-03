import React from 'react'
import './testimonials.css'
import emily from '../assets/images/image-emily.jpg'
import thomas from '../assets/images/image-thomas.jpg'
import jennie from '../assets/images/image-jennie.jpg'

const Testimonials = () => {
    return (
        <section className='sm:h-[1200px] w-full h-[600px]'>
            <div className='sm:gap-14 w-full h-full flex flex-col justify-center items-center gap-24'>
                <h3 className='sm:text-xl text-slate-300 text-2xl tracking-widest '>CLIENT TESTIMONIALS</h3>
                <div className='sm:flex-col flex justify-between gap-16'>
                    <div className='flex flex-col justify-center items-center gap-14'>
                        <img className='w-14 rounded-full' src={emily} alt="image-emily" />
                        <p className='text-slate-500 w-[300px] text-center'>
                            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                        </p>
                        <div>
                            <h4 className='text-center'>Emily R.</h4>
                            <small className='text-slate-300'>Marketing Director</small>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-14'>
                        <img className='w-14 rounded-full' src={thomas} alt="image-thomas" />
                        <p className='text-slate-500 w-[300px] text-center'>
                            Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                        </p>
                        <div>
                            <h4 className='text-center'>Thomas S.</h4>
                            <small className='text-slate-300'>Chief Operating Officer</small>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-14'>
                        <img className='w-14 rounded-full' src={jennie} alt="image-jennie" />
                        <p className='text-slate-500 w-[300px] text-center'>
                            Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                        </p>
                        <div>
                            <h4 className='text-center'> Jennie F.</h4>
                            <small className='text-slate-300'>Business Owner</small>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Testimonials