import { createUser } from '@/src/services/authApi'
import axios from 'axios'
import { useEffect, useState } from 'react'

const TestPage = () => {
  const [data, setData] = useState<any>('No Data')

  async function handleFormSubmit() {
    try {
      const response:any = await createUser({
        firstName: 'Kishore Kumar',
        // lastName: 'Ravishankar',
        // email: 'rolex@vikram.in',
        // password: 'blabla',
        // deviceID: 'dcdjhhj'
      });
      
      // Log the response received
      console.log('User creation response:', response.data); // Access the actual data from the response
      
      if (response.data.success) {
        console.log('User created successfully');
      } else {
        console.log('Error:', response.data.message); // Log the error message
      }
      setData(response);
    } catch (error) {
      console.error('Error in user creation:', error);
      setData(error);
    }
  }
  
  // UseEffect to call the async function
  useEffect(() => {
    // Wrapping the async call in another function inside useEffect
handleFormSubmit();
        }, []);
  return <div className='h-screen w-full p-10'>{`${JSON.stringify(data)}`}</div>
}

export default TestPage
