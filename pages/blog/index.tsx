import Blog from "@/src/components/blog";
import SiteLayout from "@/src/components/layout/siteLayout";

const BlogPage = () => {
  return (
    <SiteLayout title="Universities@USA-Home" fullScreen>
      <Blog />
    </SiteLayout>
  );
};

export default BlogPage;
