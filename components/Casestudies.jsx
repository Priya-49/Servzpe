import React from 'react'

function Casestudies() {
  return (
    <div>
         <div className="flex flex-col">
      <div className="flex gap-5 justify-between px-20 text-black max-md:flex-wrap max-md:px-5">
        <div className="justify-center px-2 text-4xl font-medium bg-lime-300 rounded-lg">
          Case Studies
        </div>
        <div className="text-lg max-md:max-w-full pr-96">
          Explore Real-Life Examples of Our Proven Digital Marketing <br/> Success
          through Our Case Studies
        </div>
      </div>
      <div className="self-center px-16 py-16 mt-36 w-full bg-zinc-900 max-w-[1234px] rounded-[45px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <div className="text-lg text-white">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </div>
              <div className="flex gap-4 pr-5 mt-5 text-xl leading-7 text-lime-300">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/85a471944c13db1c5e1cd0218cf7eec1734869ef3f7e70ed02978f704ab3ce08?"
                  className="shrink-0 my-auto aspect-[1.69] w-[17px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <div className="text-lg text-white">
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </div>
              <div className="flex gap-4 pr-5 mt-5 text-xl leading-7 text-lime-300">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/85a471944c13db1c5e1cd0218cf7eec1734869ef3f7e70ed02978f704ab3ce08?"
                  className="shrink-0 my-auto aspect-[1.69] w-[17px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="text-lg text-white">
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </div>
              <div className="flex gap-4 pr-5 mt-5 text-xl leading-7 text-lime-300">
                <div>Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/85a471944c13db1c5e1cd0218cf7eec1734869ef3f7e70ed02978f704ab3ce08?"
                  className="shrink-0 my-auto aspect-[1.69] w-[17px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Casestudies