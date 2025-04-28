import React from 'react'
import Image from 'next/image'
import hero from '@/public/hero.webp';

const Hero = () => {
  return (
    <section className="flex pt-[120px] pb-[150px] px-6 md:px-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <div className="flex flex-col gap-7.5">
            <h1 className="font-[family-name:var(--font-alumni-sans)] text-[70px]/[100%] font-bold">
              Chemical <span className='underline-innovation'>Innovation</span> for a  <span className='underline-sustainable'>Sustainable</span> Future
            </h1>
            <p className="text-2xl font-bold">
              Nigeria’s Foremost Manufacturer of <span className="font-black text-secondary">Chloro-alkali</span> Chemicals and <span className="font-black text-primary">Green</span> Sustainable Energy.
            </p>
          </div>
          <button className="bg-primary text-[#FCFCFC] text-xl font-medium py-2.5 px-5 rounded-full w-fit">Learn More</button>
        </div>
        <div className='flex w-full md:w-1/2 justify-center items-center'>
          <Image src={hero} width={2328} height={1200} alt='Tanks and gallons with Caustic soda and bleach' className='mix-blend-multiply' />
        </div>
      </section>
  )
}

export default Hero