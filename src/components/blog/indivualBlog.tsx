import React from "react";

const IndividualBlog = () => {
  const titles = [
    "Introduction",
    "What is Career Development?",
    "Steps to Career Growth",
    "Importance of Skill Development",
    "Conclusion",
  ];

  const blogContent = `
    Career development is the lifelong process of managing your work experience within or across organizations. 
    It is about setting goals, identifying skill gaps, and continuously improving yourself to advance in your chosen career.
    
    This journey involves several phases, from self-assessment and career exploration to networking, job searching, and maintaining a work-life balance.
    Career development is the lifelong process of managing your work experience within or across organizations. 
    It is about setting goals, identifying skill gaps, and continuously improving yourself to advance in your chosen career.
    Career development is the lifelong process of managing your work experience within or across organizations. 
    It is about setting goals, identifying skill gaps, and continuously improving yourself to advance in your chosen career.
    
    This journey involves several phases, from self-assessment and career exploration to networking, job searching, and maintaining a work-life balance.
    
    Career growth is a process, and it requires continu
    This journey involves several phases, from self-assessment and career exploration to networking, job searching, and maintaining a work-life balance.
    Career development is the lifelong process of managing your work experience within or across organizations. 
    It is about setting goals, identifying skill gaps, and continuously improving yourself to advance in your chosen career.
    Career development is the lifelong process of managing your work experience within or across organizations. 
    It is about setting goals, identifying skill gaps, and continuously improving yourself to advance in your chosen career.
    
    This journey involves several phases, from self-assessment and career exploration to networking, job searching, and maintaining a work-life balance.
    
    Career growth is a process, and it requires continu
    This journey involves several phases, from self-assessment and career exploration to networking, job searching, and maintaining a work-life balance.
    
    Career growth is a process, and it requires continu
    Career growth is a process, and it requires continu
    Career growth is a process, and it requires continuous learning, taking on challenges, and setting clear goals for personal and professional development.
  `;

  const relatedPosts = [
    {
      id: 1,
      title: "How to Choose the Right College for Your Future",
      description:
        "How building strong connections can boost your career prospects.",
      imageUrl: "/blogimg1.png",
      date: "2023-09-10",
    },
    {
      id: 2,
      title: "Developing Soft Skills",
      description: "Why soft skills are essential in the modern workplace.",
      imageUrl: "/blogimg2.png",
      date: "2023-09-12",
    },
    {
      id: 3,
      title: "Balancing Work and Life",
      description:
        "Strategies to achieve a healthy balance between your career and personal life.",
      imageUrl: "/blogimg3.png",
      date: "2023-09-14",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col items-center gap-4 p-10">
        <button className="text-sm inter-text font-medium text-[#3F4654] bg-transparent border border-[#3F4654] rounded px-2 py-1">
          Career Development
        </button>

        <h2 className="text-6xl w-[800px] font-semibold text-center">
          {relatedPosts[0].title}
        </h2>

        <p className="text-gray-600 mt-2 text-center">
          {relatedPosts[0].description}
        </p>

        <div className="flex flex-row gap-4">
          <span>
            {" "}
            <img src={"/userImg.png"} alt={"userimage"} width={"40px"} />
          </span>
          <div className="flex flex-col">
            <p>UnKonown User</p>

            <span className="text-sm text-gray-500 text-center">
              Updated on {relatedPosts[0].date}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <img
          src={relatedPosts[0].imageUrl}
          alt={relatedPosts[0].title}
          className="w-full h-[400px] rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Left Container */}
        <div className="md:col-span-1">
          <div className="sticky top-20 space-y-4">
            {titles.map((title, index) => (
              <h3
                key={index}
                className="text-xl font-medium text-gray-800 hover:text-blue-500 cursor-pointer"
              >
                {title}
              </h3>
            ))}
          </div>
        </div>

        {/* Right Container: Blog Content (Scrollable) */}
        <div className="md:col-span-3 overflow-y-auto">
          <div className="text-gray-700 space-y-6">
            {blogContent.split("\n").map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Related Blog Posts Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Related Blog Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-200"
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
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Related Blog Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-200"
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
