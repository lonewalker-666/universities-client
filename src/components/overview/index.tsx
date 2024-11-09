import { ArrowForwardIcon } from "../common/icons";

const OverviewContainer = () => {
  const recentColleges = [
    { id: 1, name: "Harvard University", image: "/recentvisit.png" },
    { id: 2, name: "Stanford University", image: "/recentvisit.png" },
    { id: 3, name: "MIT", image: "/recentvisit.png" },
  ];
  const essay = [
    { id: 1, title: "Project 1", content: "React based project" },
    { id: 2, title: "Project 11", content: "React based project" },
  ];
  return (
    <div className="w-full min-h-screen flex justify-center p-4">
      <div className="max-w-[1000px] h-full w-full flex flex-col items-center gap-6">
        <div className="w-full h- bg-[#FFFFFF] p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-black">
            Recent Chat Box
          </h2>
          <div className="space-y-2">
            {recentColleges.map((college) => (
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
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 bg-[#FFFFFF]p-4 rounded-md shadow-md p-6">
            <h2 className="text-lg text-black font-semibold mb-4">
              Essay Writing
            </h2>
            {essay.map((essay) => (
              <div className="w-full bg-white p-4 rounded-md border border-gray-300">
                <p className="text-lg font-medium text-black mb-2">
                  {essay?.title}
                </p>

                <div className="max-w-sm p-3 rounded-md bg-gray-50 border border-gray-200">
                  <p className="text-gray-700">{essay?.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 bg-[#FFFFFF] p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-black">
              Recent Visit
            </h2>
            <div className="flex flex-col gap-4">
              {recentColleges.map((college) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContainer;
