import React from "react";
import Divider from "../common/divider";
import SiteLayout from "../layout/siteLayout";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title:
        "Post sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "',
      imageUrl: "/blogimg1.png",
      date: "2023-09-01",
    },
    {
      id: 2,
      title:
        "Post sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "',
      imageUrl: "/blogimg2.png",
      date: "2023-09-02",
    },
    {
      id: 3,
      title:
        "Post sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, "',
      imageUrl: "/blogimg3.png",
      date: "2023-09-03",
    },
    {
      id: 4,
      title: "How to Choose the Right College for Your Future",
      description:
        "hoosing the right college is one of the most important decisions you’ll make. Your choice will shape your academic journey, career prospects, and personal growth.",
      imageUrl: "/blogImg.png",
      date: "2024-04-28",
    },
  ];

  return (
    <>
      <div className="w-full">
        <img
          src="/blogIntro.png"
          alt="Blog Banner"
          className="w-full object-cover"
        />
      </div>
      <div className="flex justify-center px-8 w-full">
        <div className="flex flex-col gap-3 w-full max-w-[1300px]">
          <div>
            <p className="lg:text-[36px] font-semibold text-[#111827] xs:text-[24px]">
              Recent Blog
            </p>
            <Divider
              thickness={1}
              width={"100%"}
              borderColor="#E8E8E8"
              marginBlock="20px"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 p-6 items-center">
            <img
              src={posts[3].imageUrl}
              alt={posts[3].title}
              className="w-full md:w-1/2 h-50 object-cover rounded-lg"
            />

            <div className="flex flex-col md:w-1/2">
              <div className="flex items-center justify-center gap-4 mb-2">
                <button className="text-sm font-medium text-[#3F4654] bg-transparent border border-[#3F4654] rounded px-2 py-1">
                  Career Development
                </button>
                <span className="text-sm text-gray-500">{posts[3].date}</span>
              </div>
              <h2 className="lg:text-[46px] text-[20px] font-semibold bricolage-text  leading-10">
                {posts[3].title}
              </h2>
              <p className="text-gray-600 mt-2 inter-text">
                {posts[3].description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {posts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className=" bg-transparent rounded-lg  hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="flex items-center gap-6 p-4">
                  <button className="text-sm font-medium text-[#3F4654] bg-transparent border border-[#3F4654] rounded px-2 py-1 inter-text">
                    Career Development
                  </button>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold bricolage-text">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 inter-text">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
