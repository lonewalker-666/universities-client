import ChatbotContainer from "@/src/components/chatbot"
import CustomChatHeader from "@/src/components/chatbot/components/chatHeader"
import ProductLayout from "@/src/components/layout/productLayout"


const CollegesPage = () => {
  return (
    <ProductLayout title="Universities@USA-Chatbot" customHeader={<CustomChatHeader />}>
      <ChatbotContainer />
    </ProductLayout>
  )
}

export default CollegesPage