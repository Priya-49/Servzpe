import React from 'react'
import { Home } from '@/components/Home'
import Services from '@/components/Services'
import Proposal from '@/components/Proposal'
import Casestudies from '@/components/Casestudies'
import Working from '@/components/Working'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

const page = () => {
  return (
    <div>
     <Home/>
     <Services/>
     <Proposal/>
     <Casestudies/>
     <Working/>
     <Testimonials/>
     <Contact/>
    </div>
  )
}

export default page
