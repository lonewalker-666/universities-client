import CreateEssay from "@/src/components/essays/createEssay"
import ProductLayout from "@/src/components/layout/productLayout"


const CreateEssayPage = (props:any) => {
  return (
    <ProductLayout title="Universities@USA-Profile" pageTitle="Essay Writing">
      <CreateEssay id={props?.query?.id || ""}/>
    </ProductLayout>
  )
}

CreateEssayPage.getInitialProps = ({ query }: any) => {
    return { query };
  };

export default CreateEssayPage
