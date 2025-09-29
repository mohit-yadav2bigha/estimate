"use client";
import { useState } from "react";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

const faqs = [
  {
    question: "What is construction estimating, and why is it important?",
    answer: "Precise quantity takeoff is the foundation of every successful project. We deliver detailed measurements and material breakdowns that remove guesswork and improve efficiency. Whether it's residential, commercial, or industrial work, our takeoffs help you plan better, reduce waste, and bid smarter."
  },
  {
    question: "What is construction estimating, and why is it important?",
    answer: "Construction estimating is the process of calculating the cost and resources required for a construction project, which is crucial for budgeting and project planning."
  },
  {
    question: "How does your estimating company stand out from others?",
    answer: "We combine advanced technology with experienced professionals to deliver accurate estimates with faster turnaround times and detailed breakdowns."
  },
  {
    question: "Do you only work on large projects, or do you handle smaller residential jobs too?",
    answer: "We handle projects of all sizes, from small residential renovations to large commercial and industrial construction projects."
  },
  {
    question: "Do you provide certified professional estimator services?",
    answer: "Yes, our team includes certified professional estimators who ensure accuracy and compliance with industry standards."
  },
  {
    question: "What makes your estimates reliable for bidding?",
    answer: "Our estimates are based on current market rates, detailed material lists, and comprehensive labor analysis, ensuring competitive and accurate bids."
  },
  {
    question: "Do you offer outsourcing for estimating services?",
    answer: "Yes, we provide complete outsourcing solutions for estimating services, allowing you to focus on your core business operations."
  },
  {
    question: "What information do you need to start my estimate?",
    answer: "We typically need project plans, specifications, site conditions, and any special requirements to provide an accurate estimate."
  },
  {
    question: "Can you handle multi-trade and complex projects?",
    answer: "Absolutely, we specialize in multi-trade projects and can coordinate estimates across different construction disciplines."
  },
  {
    question: "How do you handle design changes during the estimating process?",
    answer: "We maintain flexible processes to accommodate design changes and provide updated estimates promptly to keep your project on track."
  },
  {
    question: "What tools do your construction estimators use?",
    answer: "We use industry-leading software including PlanSwift, Bluebeam, and other advanced estimating tools for accuracy and efficiency."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-4 px-4 lg:py-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 lg:mb-8">
          <h1 
            className="mb-4 text-3xl lg:text-[50px] leading-8 lg:leading-[54px] tracking-[-0.8px] lg:tracking-[-1.2px] text-center text-[#C8C2BD]"
            style={{
              fontFamily: 'SF Compact, -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 790
            }}
          >
            FAQs
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 lg:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full bg-[#0A0A0A] bg-opacity-20 rounded-sm border-b border-[#1C41E4] min-h-8 backdrop-blur-[10px]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full h-full px-3 py-2 lg:px-4 lg:py-3 text-left flex items-center justify-between group focus:outline-none transition-colors duration-200 min-h-8"
              >
                <span 
                  className="text-gray-200 font-normal text-xs lg:text-sm xl:text-base pr-3 lg:pr-4 leading-relaxed"
                  style={{
                    fontFamily: 'SF Compact, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}
                >
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-2 lg:ml-4">
                  {openIndex === index ? (
                    <IoChevronDown className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 transform transition-transform duration-200" />
                  ) : (
                    <IoChevronForward className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 transform transition-transform duration-200 group-hover:text-gray-300" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-2 lg:pb-3 px-3 lg:px-4">
                  <p 
                    className="text-gray-300 text-xs lg:text-sm leading-relaxed"
                    style={{
                      fontFamily: 'SF Compact, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom horizontal line */}
        <div 
          className="w-full mt-6 lg:mt-10"
          style={{
            borderBottom: '0.5px solid rgba(255, 255, 255, 0.57)',
            height: '1px'
          }}
        ></div>
      </div>
    </div>
  );
}