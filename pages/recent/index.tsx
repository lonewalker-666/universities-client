import Colleges from "@/src/components/colleges";
import ProductLayout from "@/src/components/layout/productLayout";
import CollegeVisit from "@/src/components/recent";

const CollegePage = () => {
  return (
    <ProductLayout title="Universities@USA-Home" pageTitle="colleges">
      <CollegeVisit />
    </ProductLayout>
  );
};

export default CollegePage;
