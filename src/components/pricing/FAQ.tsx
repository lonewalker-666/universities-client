import { useState, useRef } from "react";
import { PlusOutlined } from "../common/icons";

const FAQ = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const faqContentRefs = useRef<any>([]);

  const toggleFAQ = (index: any) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const Faqs = [
    {
      title: "What is Universities@USA?",
      description:
        "Universities@USA is a vibrant community dedicated to helping students achieve their academic goals. We provide guidance on the US university application process, offer personalized mentorship, and create a supportive network for aspiring scholars.",
    },
    {
      title: "How can i join  Universities@USA community?",
      description: "Yes, you can upgrade to a higher plan anytime.",
    },
    {
      title: "What service do you offer ?",
      description: "We accept all major credit cards and PayPal.",
    },
    { title: "Is there a membership fee ?", description: "" },
    { title: "Can I use this alongside a college counselor?", description: "" },
    {
      title: "Will this guarantee my admission to a college?",
      description: "",
    },
  ];

  return (
    <div className="w-full mt-12">
      <div className="w-full md:w-[600px] h-auto p-4 md:p-0 mx-auto">
        <div className="w-full py-8 flex flex-col gap-6 md:gap-9">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#6F42C1E5] font-semibold">FAQ's</span>
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold inter-text">
              Answers at Your Fingertips
            </h1>
            <p className="text-[#00000080] inter-text text-[16px] items-center justify-center">
              Everything you need to know about the product and Features.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            {Faqs &&
              Faqs.map((record, i) => (
                <div
                  className={`faq ${i === faqOpen ? "open" : ""}`}
                  key={i}
                  onClick={() => toggleFAQ(i)}
                >
                  <div className="flex justify-between items-center h-[60px] gap-2 cursor-pointer">
                    <span className="font-medium text-xs sm:text-sm md:text-base">
                      {record?.title}
                    </span>
                    <span className="w-[14px] h-[14px] flex items-center justify-center">
                      <PlusOutlined
                        className={`arrow ${i === faqOpen ? "open" : ""}`}
                        style={{
                          transform:
                            i === faqOpen ? "rotate(45deg)" : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </span>
                  </div>
                  <div
                    ref={(el) => (faqContentRefs.current[i] = el)}
                    className="faq-content overflow-hidden transition-all"
                    style={{
                      maxHeight:
                        i === faqOpen
                          ? `${faqContentRefs.current[i]?.scrollHeight}px`
                          : "0",
                    }}
                  >
                    <span className="font-normal text-xs sm:text-sm md:text-base text-[#828282] block p-2">
                      {record?.description}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
