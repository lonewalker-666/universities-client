import axios from 'axios';
import Image from 'next/image'
import { useEffect } from 'react';

const HomeContainer = () => {
  const tryAPI = async() => {
    try{
   const res= await axios.post("http://127.1.0.0:8000/api/register",{
    firstName:"Kishore Kumar",
    lastName: "Ravishankar",
    email:"rolex@vikram.in",
    password: "blabla",
    deviceID:"dcdjhhj"
   })
    }
    catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    tryAPI()
  },[])
  return (
    <div className='bg-[#C0ECFF] w-full h-[100vh] relative overflow-hidden'>
      <div className='hero-container'>
        <div className='hero-text-container'>
          <h1>Your Pathway to Success</h1>
          <p>
            We understand that the journey to your dream college is a marathon,
            not a sprint.Getting into top colleges has never been more
            competitive
          </p>
        </div>
        <Image
          src='/collegeMain.svg'
          alt='/collegeMain.svg'
          width={1900}
          height={1000}
          className='w-full'
        />
      </div>
    </div>
  )
}

export default HomeContainer
