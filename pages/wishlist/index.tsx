import ProductLayout from "@/src/components/layout/productLayout";
import WishlistContainer from "@/src/components/wishlist.tsx";

const ProfilePage = () => {
  return (
    <ProductLayout title="Universities@USA-Wishlist" pageTitle="Wishlist">
      <WishlistContainer />
    </ProductLayout>
  );
};

export default ProfilePage;
