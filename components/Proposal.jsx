import React from 'react'

function Proposal() {
  return (
    <div>
         <div className="flex justify-center items-center mt-24 mb-20 px-16 py-6 max-md:px-5">
      <div className="pl-16 max-w-full bg-zinc-100 rounded-[45px] w-[1240px] max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-medium max-md:max-w-full">
                Let’s make things happen
              </div>
              <div className="mt-7 text-lg max-md:max-w-full">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </div>
              <div className="justify-center self-start px-9 py-5 mt-7 text-xl leading-7 text-center text-white rounded-2xl bg-zinc-900 max-md:px-5">
                Get your free proposal
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f6aff5fd2dda2ce99ee299baaf7202e872da473406ab2cb47d257cd3cc098a?"
              className="self-stretch my-auto w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Proposal