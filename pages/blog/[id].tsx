import IndividualBlog from "@/src/components/blog/indivualBlog";
import SiteLayout from "@/src/components/layout/siteLayout";

const BlogPage = () => {
  return (
    <SiteLayout title="Universities@USA-Blogs">
      <IndividualBlog />
    </SiteLayout>
  );
};

export default BlogPage;
