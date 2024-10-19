import axios from 'axios';
import Image from 'next/image'
import { useEffect } from 'react';
import HeroSection from './components/heroSection';
import OurSolution from './components/ourSolution';
import Features from './components/features';
import Pricing from './components/pricing';
import Testimonials from './components/testimonial';
import Community from './components/community';
import ProductFaq from './components/productFaq';
import Footer from './components/footer';

const HomeContainer = () => {
  // const tryAPI = async() => {
  //   try{
  //  const res= await axios.post("http://127.1.0.0:8000/api/register",{
  //   firstName:"Kishore Kumar",
  //   lastName: "Ravishankar",
  //   email:"rolex@vikram.in",
  //   password: "blabla",
  //   deviceID:"dcdjhhj"
  //  })
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // }
  // useEffect(()=>{
  //   tryAPI()
  // },[])
  return (
    <>
        <HeroSection />
        <OurSolution />
        <Features/>
        <Pricing />
        <Testimonials />
        <Community />
        <ProductFaq />
        <Footer />
    </>
  )
}

export default HomeContainer
