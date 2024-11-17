import Image from "next/image";
import { useRouter } from "next/router";
import LocationMarker from "../common/icons/locationMarker";
import DeleteIcon from "../common/icons/delete";
import { addToWishlist } from "@/src/services/collegesApi";
import { useState } from "react";

const WhislistCard = (props: any) => {
  const { refetch, data } = props;
  const { college_name, city_state, college_id } = data;

  const router = useRouter();
  const onClick = (e: any) => {
    e.stopPropagation();
    router.push(`/colleges/${college_id}`);
  };

  const addOrRemoveWishlist = async (e: any) => {
    e.stopPropagation();
    await addToWishlist({
      college_id: college_id,
      college_name: college_name,
      city_state: city_state,
    });
    refetch();
  };
  return (
    <div
      className="product-card-container relative"
      key={props?.ProductKey}
      onClick={(e: any) => onClick(e)}
    >
      <div className="product-thumbnail-container">
        <Image
          src={"/blogImg.png"}
          alt={"collegeImg"}
          width={1000}
          height={1000}
          className="product-thumbnail"
          style={{ height: 150 }}
        />
        <span
          className="absolute top-5 right-5 p-2 rounded-full bg-[#5A5A5A] hover:bg-[red] text-black hover:text-white shadow-md transition-colors"
          onClick={(e: any) => addOrRemoveWishlist(e)}
        >
          <DeleteIcon color="white" />
        </span>
      </div>
      <div className="flex flex-col justify-between gap-2 px-2 py-3">
        <span className="overflow-x-hidden whitespace-nowrap overflow-ellipsis text-[#000000]">
          {college_name}
        </span>

        <span className="overflow-x-hidden whitespace-nowrap overflow-ellipsis text-[#000000] flex flex-row items-center gap-2">
          <LocationMarker /> {city_state}
        </span>
      </div>
    </div>
  );
};

export default WhislistCard;
