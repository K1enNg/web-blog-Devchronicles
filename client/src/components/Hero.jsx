import React from 'react'
import Photo from '../assets/IMG_1398.png'

const Hero = () => {
  return (
    <section className="bg-black text-center py-16 px-4">
    <div className="mx-auto mb-6 w-40 h-40 rounded-full overflow-hidden">
        <img src={Photo} alt="photo of Kien" />
    </div>
    <h1 className="text-4xl font-bold text-white mb-4">
        Hello World, I'm Kien!
    </h1>
    <p className="text-lg text-gray-100">
        I'm a junior developer - This is where I share my stories
    </p>
</section>
  )
}

export default Hero