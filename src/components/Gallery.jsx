import React from 'react'
import './gallery.css'

const Gallery = () => {
    return (      
        <section className='sm:flex-col w-full h-[450px] flex'>
            <div className='h-full w-full flex'>
                <div className='w-2/4 h-full' id='gallery1'></div>
                <div className='w-2/4 h-full' id='gallery2'></div>
            </div>
            <div className='h-full w-full flex'>
                <div className='w-2/4 h-full' id='gallery3'></div>
                <div className='w-2/4 h-full' id='gallery4'></div>
            </div>
        </section>
    )
}

export default Gallery