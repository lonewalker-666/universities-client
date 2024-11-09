import Colleges from "@/src/components/colleges"
import CustomCollegeListHeader from "@/src/components/colleges/components/customCollegeListHeader"
import ProductLayout from "@/src/components/layout/productLayout"


const CollegesPage = () => {
  return (
    <ProductLayout title="Universities@USA-Colleges" customHeader={<CustomCollegeListHeader />}>
      <Colleges />
    </ProductLayout>
  )
}

export default CollegesPage
