import React from 'react'

const HeroProgram = () => {
  return (
    <div className='bg-[url(/program-banner.svg)] bg-cover'>
        <section className="relative h-75 flex items-center lg:justify-start justify-center">
        <div className="max-w-7xl absolute lg:left-30 mx-auto px-4 sm:px-6 lg:px-8 lg:text-start text-center text-black">
          <h1 className="text-5xl md:text-6xl mb-4 font-bold overflow-y-hidden">Our Programs</h1>
          <p className="text-xl opacity-90">
            Discover the right path for your academic and career goals
          </p>
        </div>
      </section>
    </div>
  )
}

export default HeroProgram;