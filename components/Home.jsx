import React from 'react'
import Image from 'next/image'

export const Home = () => {
  return (
    <div className="flex flex-col">
    <div className="justify-between px-20 py-2.5 w-full mt-6">
      <div className="flex gap-5">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
         <Image
           src="/s1.png"
           height={300}
           width={700}
         />
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-9 justify-center items-center my-auto text-xl text-black">
            <div className=" my-auto">About us</div>
            <div className=" my-auto">Services</div>
            <div className=" my-auto">Use Cases</div>
            <div className=" my-auto">Pricing</div>
            <div className=" my-auto">Blog</div>
            <div className="justify-center  px-8 py-4 text-center rounded-2xl border border-solid border-zinc-950">
              Request a quote
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="justify-between px-20 mt-15 w-full mt-12 ml-6 mr-4">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-xl text-black max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl font-medium max-md:max-w-full max-md:text-4xl">
              Navigating the digital landscape for success
            </div>
            <div className="mt-9 mr-8 leading-7 max-md:mr-2.5 max-md:max-w-full">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </div>
            <div className="justify-center self-start px-9 py-5 mt-9 text-center text-white rounded-2xl bg-zinc-900 leading-[140%] max-md:px-5">
              Book a consultation
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-6 w-6/12">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39798328bc48a0490229ebc9b56920e920c2b966191255c7af0ec06ca530c152?"
            className="grow w-full aspect-[1.16] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
    <div className="flex gap-5 justify-between px-20 mb-20 mt-16 w-full max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0f00b9e093f52f0ba02e50bf3d5093ea670b6c9f2c633fb4320ee8d109e19a6?"
        className=" max-w-full w-[124px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e80eb582117323637c65c2782e6a1d028babbdba56a421c93d5f733ea881506?"
        className=" max-w-full w-[126px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7531e141100c59d77ebc13d2efa10cdef57d81276a258e0ff4a00b622ba2827?"
        className=" max-w-full w-[129px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3e12b674e73ac35e25b0f6d510acfc807ea22659301f2d30328eb410eeaff47?"
        className=" max-w-full w-[145px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99b29567a933a30c418fa2f7268e772d9952c85801d95d7bc9a4e2b00aed4a8a?"
        className=" max-w-full w-[126px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0dbbcac39a4c69f52cdadf2209e011e737d9e8e7ba3c46ada7e7992340b5d70?"
        className=" max-w-full  w-[111px]"
      />
    </div>
  </div>
  )
}
