import { useEffect, useState } from "react";
import { ArrowForwardIcon } from "../common/icons";
import { getOverview } from "@/src/services/collegesApi";
import { get, isEmpty, over } from "lodash";
import router, { Router } from "next/router";

const OverviewContainer = () => {
  const [overviewData, setOverviewData] = useState<any>([]);
  const getOverviewDataAll = async () => {
    const data = await getOverview();
    setOverviewData(data);
  };
  const recentColleges = [
    { id: 1, name: "Harvard University", image: "/recentvisit.png" },
    { id: 2, name: "Stanford University", image: "/recentvisit.png" },
    { id: 3, name: "MIT", image: "/recentvisit.png" },
  ];
  useEffect(() => {
    getOverviewDataAll();
  }, []);
  const recentlyVisited = get(overviewData, "recentlyVisited", []);
  const essay = get(overviewData, "essay", []);
  const handleVisit = () => {
    router.push(`/recent`);
  };
  return (
    <div className="w-full min-h-screen flex justify-center p-4">
      <div className="max-w-[1000px] h-full w-full flex flex-col items-center gap-6">
        <div className="w-full h- bg-[#FFFFFF] p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-black">
            Recent Chat Box
          </h2>
          <div className="space-y-2">
            {!isEmpty(recentColleges) ? (
              recentColleges.map((college) => (
                <div
                  key={college.id}
                  className="flex flex-row items-center justify-between max-w-4xl bg-[#F5F5F5] text-black p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-10 h-10 rounded-md"
                    />
                    <p className="font-medium">{college.name}</p>
                  </div>
                  <ArrowForwardIcon color="black" />
                </div>
              ))
            ) : (
              <p className="text-black font-bold flex justify-center min-h-[250px] items-center">
                No data Available
              </p>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 bg-[#FFFFFF]p-4 rounded-md shadow-md p-6">
            <h2 className="text-lg text-black font-semibold mb-4">
              Essay Writing
            </h2>
            {!isEmpty(essay) ? (
              essay.map((essay: any, key: number) => (
                <div
                  className="w-full bg-white p-4 rounded-md border border-gray-300"
                  key={key}
                >
                  <p className="text-lg font-medium text-black mb-2">
                    {essay?.title}
                  </p>

                  {/* <div className="max-w-sm p-3 rounded-md bg-gray-50 border border-gray-200">
                    <p className="text-gray-700">{essay?.content}</p>
                  </div> */}
                </div>
              ))
            ) : (
              <p className="text-black font-bold flex justify-center min-h-[250px] items-center">
                No data Available
              </p>
            )}
          </div>
          <div className="w-full lg:w-1/2 bg-[#FFFFFF] p-4 rounded-md shadow-md">
            <div className="flex flex-row justify-between items-center mb-2">
              <h2 className="text-xl font-semibold  text-black">
                Recent Visit
              </h2>
              <div
                className="flex gap-2 p-2 border justify-center items-center rounded-lg max-w-max text-black cursor-pointer"
                onClick={handleVisit}
              >
                View All <ArrowForwardIcon />
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              {!isEmpty(recentlyVisited) ? (
                recentlyVisited.map((college: any) => (
                  <div
                    key={college?.college_id}
                    className="flex flex-row items-center justify-between max-w-4xl bg-[#F5F5F5] text-black p-4 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={"/blogImg.png"}
                        alt={college?.college_name}
                        className="w-10 h-10 rounded-md"
                      />
                      <p className="font-medium text-black">
                        {college?.college_name}
                      </p>
                    </div>
                    <ArrowForwardIcon color="black" />
                  </div>
                ))
              ) : (
                <p className="text-black font-bold flex justify-center min-h-[250px] items-center">
                  No data Available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContainer;
