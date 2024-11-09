import Colleges from "@/src/components/colleges"
import CollegeDetailContainer from "@/src/components/colleges/collegeDetailContainer";
import CustomCollegeProfileHeader from "@/src/components/colleges/components/customCollegeProfileHeader";
import ProductLayout from "@/src/components/layout/productLayout"


const CollegeDetailPage = ({ query }: any) => {
  return (
    <ProductLayout title="Universities@USA-Colleges" customHeader={<CustomCollegeProfileHeader/>}>
      <CollegeDetailContainer id = {query?.id}/>
    </ProductLayout>
  )
}

CollegeDetailPage.getInitialProps = ({ query }: any) => {
    return { query };
  };

export default CollegeDetailPage
