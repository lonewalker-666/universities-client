import Image from "next/image";
import WhislistCard from "./whislistCard";
import { useEffect, useState } from "react";
import { getWhishlist } from "@/src/services/collegesApi";
import { isEmpty } from "lodash";
const WishlistContainer = () => {
  const mockWishlistData = [
    {
      courserefid: 1,
      name: "React for Beginners",
      author: "John Doe",

      thumbnail: "/blogImg.png",
    },
    {
      courserefid: 2,
      name: "Advanced JavaScript",
      author: "Jane Smith",

      thumbnail: "/blogImg.png",
    },
    {
      courserefid: 3,
      name: "Python for Data Science",
      author: "Alice Johnson",

      thumbnail: "/blogImg.png",
    },
  ];
  const [wishlist, setWishlist] = useState([]);

  const getWishlistData = async () => {
    const data = await getWhishlist();
    setWishlist(data);
  };

  useEffect(() => {
    getWishlistData();
  }, []);
  return (
    <div className="w-full flex flex-col  items-center ">
      {!isEmpty(wishlist) ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full max-w-[1200px]">
          {wishlist?.map((wishlist, index) => (
            <WhislistCard key={index} data={wishlist} ProductKey={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-16">
          <Image
            src={"/wishlistEmpty.png"}
            alt="No Wishlist Found"
            width={100}
            height={100}
          />
          <p className="text-gray-500 text-lg mt-4">Your wishlist is empty.</p>
        </div>
      )}
    </div>
  );
};

export default WishlistContainer;
