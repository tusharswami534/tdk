import React from 'react'

const Hero = () => {
  return (
    <div style={{backgroundImage: 'url(./assets/images/webp/hero-bg-image.webp)' }} id='hero' className='bg-cover min-h-[807px] max-xl:min-h-[1048px] max-xl:px-5 max-md:min-h-[603px] bg-center bg-no-repeat'>
            <h1 className='max-w-[1072px] mx-auto text-center font-bold text-white leading-136 text-custom-6xl pt-custom-16 max-sm:!pt-custom-10 max-lg:text-5xl max-md:text-4xl max-sm:text-custom-3xl max-xl:max-w-[753px]'>
                Driving Transformation for Performance and Passion Within 
            </h1>
            <p className='leading-136 text-custom-2xl text-center text-white mt-custom-4 max-xl:max-w-[535px] max-xl:mx-auto max-sm:text-base'>The future of electric mobility is here. TDK and NEOM McLaren Formula E</p>
    </div>
  )
}

export default Hero