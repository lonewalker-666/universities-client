import SiteLayout from "@/src/components/layout/siteLayout";
import SignUp from "@/src/components/singup";

const SignupPage = () => {
  return (
    <SiteLayout title="Universities@USA-Home" noFooter>
      <SignUp />
    </SiteLayout>
  );
};

export default SignupPage;
