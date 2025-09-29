import { Hero } from './_components/hero'
import  About  from './_components/about'
import { VetServices } from './_components/VetServices'
import { VetTestimonials } from './_components/VetTestimonials'
import { Footer } from './_components/footer'
import {VeterinaryServices} from "./_components/VeterinaryServices"


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <VeterinaryServices/>
      <VetServices />
      
      <VetTestimonials />
      <Footer />
    </main>
  )
}
