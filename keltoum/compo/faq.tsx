import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }: any) => {
  return (
    <div className="border-b border-purple-300/20">
      <button 
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <div className="text-purple-300">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5 px-4" : "max-h-0"
        }`}
      >
        <p className="text-purple-200">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is UGC content?",
      answer: "UGC (User-Generated Content) is authentic content created by real people rather than brands. As a professional UGC creator, I create content that appears organic but is professionally produced to showcase your products in the most appealing way while maintaining authenticity."
    },
    {
      question: "How does your pricing work?",
      answer: "My pricing is based on the type and quantity of content needed. I offer packages starting from basic content creation to comprehensive campaigns. Each package includes ideation, production, editing, and delivery. Custom packages are available to suit your specific needs and budget."
    },
    {
      question: "Do you provide the rights to the content?",
      answer: "Yes, all packages include full usage rights for the content created. You'll be able to use the content across your social media platforms, website, and marketing materials. For extended rights or exclusivity, we can discuss additional arrangements."
    },
    {
      question: "What's your typical turnaround time?",
      answer: "Standard turnaround time is 7-10 business days from receiving the product and finalizing the creative brief. For urgent requests, expedited services are available at an additional fee. Each project timeline is discussed and agreed upon before starting."
    },
    {
      question: "What industries do you specialize in?",
      answer: "I specialize in Food & Beverages, Beauty & Skincare, Fashion, Tech, and Lifestyle products. My content has proven particularly effective for these categories, but I'm open to discussing other industries as well."
    },
    {
      question: "Do I need to provide the products?",
      answer: "Yes, you'll need to provide the physical products for me to create authentic content. I can accept PR packages or purchased products (cost can be incorporated into the project fee). For digital products, we'll discuss the best approach for showcasing them."
    },
    {
      question: "Can I request revisions?",
      answer: "All packages include one round of revisions to ensure your satisfaction. Additional revision rounds can be arranged at an extra cost. I work closely with clients throughout the process to minimize the need for extensive revisions."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-purple-900">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Everything you need to know about working with me and how I can help elevate your brand with authentic UGC content.
          </p>
        </div>

        <div className="bg-purple-800/50 rounded-xl overflow-hidden shadow-lg">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-purple-200 mb-6">Still have questions? I'm happy to help!</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-pink-500 hover:bg-pink-600 transition-colors rounded-md text-white font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;