import IndivualBlog from "@/src/components/blog/indivualBlog";
import SiteLayout from "@/src/components/layout/siteLayout";
import Login from "@/src/components/login";

const LoginPage = () => {
  return (
    <SiteLayout title="Universities@USA-Home" fullScreen>
      <Login />
    </SiteLayout>
  );
};

export default LoginPage;
