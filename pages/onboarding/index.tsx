import SiteLayout from "@/src/components/layout/siteLayout";
import Login from "@/src/components/login";
import Onboarding from "@/src/components/onboarding";

const LoginPage = () => {
  return (
    <SiteLayout title="Universities@USA-Home" noFooter>
      <Onboarding />
    </SiteLayout>
  );
};

export default LoginPage;
