import React from "react";
import Divider from "../common/divider";
import { posts } from "@/Mock/posts";
import SiteLayout from "../layout/siteLayout";
import Image from "next/image";
import HeaderContainer from "../home/components/headerContainer";
const Blog = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col gap-2 p-6 justify-center items-center bg-[url('/blogImgBg.png')] bg-no-repeat  min-h-[450px] bg-cover bg-center">
          <HeaderContainer
            title="Blogs"
            heading="Insights & Updates"
            description="Stay informed with the latest news and articles"
          />
        </div>
      </div>

      <div className="flex justify-center px-8 w-full">
        <div className="flex flex-col  gap-3 w-full max-w-[1200px]">
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
          <div className="flex flex-col items-start md:flex-row gap-6 p-6">
            <img
              src={posts[3].imageUrl}
              alt={posts[3].title}
              className="w-full md:w-1/2 h-50 object-cover rounded-lg"
            />

            <div className="flex flex-col md:w-1/2 ">
              <div className="flex items-center justify-center gap-4 ">
                <button className="text-sm font-medium text-[#3F4654] bg-transparent border border-[#3F4654] rounded px-2 py-1">
                  Career Development
                </button>
                <span className="text-sm text-gray-500">{posts[3].date}</span>
              </div>
              <div className="flex flex-col items-center text-center md:mt-4 lg:mt-12 ">
                <h2 className="  xs:text-[20px]  lg:text-[36px] font-semibold bricolage-text">
                  {posts[3].title}
                </h2>
                <p className="text-gray-600 mt-2 inter-text">
                  {posts[3].description}
                </p>
              </div>
            </div>
          </div>
          {/*blogs section*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
            {posts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-transparent rounded-lg hover:scale-105 transition-transform duration-200 "
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 sm:h-60 object-cover rounded-t-lg"
                />
                <div className="flex items-center gap-4 p-3 md:p-4">
                  <button className="text-sm font-medium text-[#3F4654] bg-transparent border border-[#3F4654] rounded px-2 py-1">
                    Career Development
                  </button>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <div className="px-3 pb-4 md:px-4">
                  <h2 className="text-lg md:text-xl bricolage-text font-semibold text-[#111827] leading-relaxed">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    {post.description}
                  </p>
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
