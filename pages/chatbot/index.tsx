import ChatbotContainer from "@/src/components/chatbot"
import CustomChatHeader from "@/src/components/chatbot/components/chatHeader"
import ProductLayout from "@/src/components/layout/productLayout"


const ChatPage = () => {
  return (
    <ProductLayout title="Universities@USA-Chatbot" customHeader={<CustomChatHeader />}>
      <ChatbotContainer />
    </ProductLayout>
  )
}

ChatPage.getInitialProps = ({ query }: any) => {
  return { query };
};

export default ChatPage
