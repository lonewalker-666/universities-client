import Button from "@/src/components/common/button"
import EssaysContainer from "@/src/components/essays"
import ProductLayout from "@/src/components/layout/productLayout"
import { useRouter } from "next/router"


const EssaysPage = () => {
  const router = useRouter()
  const pageHeader = (
    <div className='w-full flex items-center justify-between'>
   <h1 className='text-black xs:text-2xl md:text-3xl font-semibold'>Essay Writing</h1> 
      <Button title="+ New" width={100} onClick={() => router.push('/essays/createEssay')}/>
    </div>
  )
  return (
    <ProductLayout title="Universities@USA-Essays" customHeader={pageHeader}>
      <EssaysContainer />
    </ProductLayout>
  )
}

export default EssaysPage
