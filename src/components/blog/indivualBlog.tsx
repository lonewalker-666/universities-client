import React from "react";
import { blogContent } from "@/Mock/blogContent";
import { titles } from "@/Mock/blogContent";
import { relatedPosts } from "@/Mock/blogContent";
const IndividualBlog = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex max-w-3xl flex-col items-center gap-4 p-10 mx-auto text-center">
        <button className="text-sm font-medium text-gray-700 border border-gray-700 rounded px-2 py-1">
          Career Development
        </button>

        <h2 className="lg:text-5xl text-2xl font-semibold">
          {relatedPosts[0].title}
        </h2>

        <p className="text-[#3F4654] ">{relatedPosts[0].description}</p>

        <div className="flex items-center gap-4 mt-2">
          <img
            src="/userImg.png"
            alt="user"
            width="40"
            className="rounded-full"
          />
          <div className="text-left">
            <p>Unknown User</p>
            <span className="text-sm text-gray-500">
              Updated on {relatedPosts[0].date}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <img
          src={relatedPosts[0].imageUrl}
          alt={relatedPosts[0].title}
          className="w-full h-[450px] object-cover rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Sidebar Titles */}
        <div className="md:col-span-1">
          <div className="sticky top-20 space-y-4">
            <span className="text-xl text-[#6B7589] font-semibold">
              contents
            </span>
            {titles.map((title, index) => (
              <h3
                key={index}
                className="text-md font-medium text-[#6B7589] hover:text-black cursor-pointer"
              >
                {title}
              </h3>
            ))}
          </div>
        </div>

        {/* Blog Content */}
        <div className="md:col-span-3 overflow-y-auto text-gray-700 space-y-6 max-w-2xl">
          {blogContent.map((content, index) => {
            if (content.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold mt-4 bricolage-text"
                >
                  {content.text}
                </h2>
              );
            }
            if (content.type === "subheading") {
              return (
                <h3
                  key={index}
                  className="text-xl font-semibold mt-3 bricolage-text"
                >
                  {content.text}
                </h3>
              );
            }
            if (content.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="leading-relaxed inter font-normal text-[#111827]"
                >
                  {content.content?.map((segment, segmentIndex) => {
                    if (segment.type === "text") {
                      return <span key={segmentIndex}>{segment.text}</span>;
                    }
                    if (segment.type === "link") {
                      return (
                        <a
                          key={segmentIndex}
                          href={segment.url}
                          className="text-blue-500 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {segment.text}
                        </a>
                      );
                    }
                    return null;
                  })}
                </p>
              );
            }
            if (content.type === "bold") {
              return (
                <p key={index} className="font-semibold">
                  {content.text}
                </p>
              );
            }
            if (content.type === "link") {
              return (
                <a
                  key={index}
                  href={content?.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.text}
                </a>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Related Blog Posts Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Related Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white  rounded-lg hover:scale-105 transition-transform duration-200"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-gray-600">{post.description}</p>
                <span className="text-sm text-gray-500 block mt-2">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
