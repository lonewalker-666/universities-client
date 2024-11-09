import Colleges from "@/src/components/colleges";
import ProductLayout from "@/src/components/layout/productLayout";
import SiteLayout from "@/src/components/layout/siteLayout";

const CollegePage = () => {
  return (
    <ProductLayout title="Universities@USA-Home" pageTitle="colleges">
      <Colleges />
    </ProductLayout>
  );
};

export default CollegePage;
