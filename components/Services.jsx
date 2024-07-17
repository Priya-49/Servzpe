import React from 'react'
import Cards from './Cards'

const Services = () => {
  return (
    <div>
      <div className="flex gap-5 mt-6 mb-24 justify-between px-20 text-black max-md:flex-wrap max-md:px-5">
        <div className="justify-center px-2 text-4xl font-medium  bg-lime-300 rounded-lg">
          Services
        </div>
       <div className="text-lg pr-96">
          At our digital marketing agency, we offer a range of services to <br/> help
          businesses grow and succeed online. These services include:
       </div>
    </div>
    <div >
    <Cards/>
    </div>
   
    </div>

    
  )
}

export default Services