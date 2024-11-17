import React, { useEffect, useState } from "react";
import { ArrowForwardIcon } from "../common/icons";
import { getRecentlyVisted } from "@/src/services/collegesApi";
import { isEmpty } from "lodash";
import Image from "next/image";
const CollegeVisit = () => {
  const [recentdata, setRecentdata] = useState<any>([]);
  const getRecentVisitData = async () => {
    const data = await getRecentlyVisted();
    setRecentdata(data);
  };
  useEffect(() => {
    getRecentVisitData();
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1000px] flex flex-col gap-4 p-8">
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-[#000000CC] font-bold text-[24px]">
            Recent Visits
          </h1>
          <p className="text-[#000000CC] font-bold text-[18px]">
            ({recentdata?.length})
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {!isEmpty(recentdata) ? (
            recentdata?.map((college: any) => (
              <div
                key={college?.college_id}
                className="flex flex-row items-center justify-between max-w-4xl bg-[#F5F5F5] text-black p-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={"/blogImg.png"}
                    alt={"collegeImg"}
                    className="w-10 h-10 rounded-md"
                  />
                  <p className="font-medium">{college?.college_name}</p>
                </div>
                <ArrowForwardIcon color="black" />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center mt-16">
              <Image
                src={"/essayEmpty.png"}
                alt="No Essays Found"
                width={200}
                height={200}
              />
              <p className="text-gray-500 text-lg mt-4">No Recent Visit</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeVisit;
