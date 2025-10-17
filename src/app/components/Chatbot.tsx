'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What is insurance?",
    answer: "Insurance is a contract where you pay premiums to an insurance company in exchange for financial protection against potential losses or damages."
  },
  {
    question: "What are the main types of investments?",
    answer: "The main types include stocks, bonds, mutual funds, ETFs, and fixed deposits. Each has different risk and return profiles."
  },
  {
    question: "How do I choose the right insurance policy?",
    answer: "Consider your needs, budget, and coverage requirements. We recommend consulting with a financial advisor to compare options."
  },
  {
    question: "What's the difference between term and whole life insurance?",
    answer: "Term life insurance provides coverage for a specific period and is generally cheaper, while whole life insurance provides lifelong coverage and builds cash value."
  },
  {
    question: "How can I start investing?",
    answer: "Start by assessing your risk tolerance and financial goals. Consider diversified investments and consult with a financial advisor for personalized guidance."
  },
  {
    question: "What is compound interest?",
    answer: "Compound interest is the interest you earn on both your original investment and the interest you've already earned. It can significantly grow your wealth over time."
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/80 transition-colors z-50"
        aria-label="Open chat"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
            {/* Header */}
            <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Divdesh Wealth Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
                aria-label="Close chat"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <p className="text-gray-600 mb-4">Hi! I'm here to help with questions about investing and insurance. Click on a question below:</p>

              {selectedFaq !== null && (
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <p className="font-semibold text-primary">{faqs[selectedFaq].question}</p>
                  <p className="text-gray-700 mt-2">{faqs[selectedFaq].answer}</p>
                  <button
                    onClick={() => setSelectedFaq(null)}
                    className="text-sm text-primary hover:underline mt-2"
                  >
                    Ask another question
                  </button>
                </div>
              )}

              {selectedFaq === null && (
                <div className="space-y-2">
                  {faqs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFaq(index)}
                      className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t p-4">
              <p className="text-sm text-gray-500 text-center">
                Need personalized advice?{' '}
                <a
                  href="mailto:gulti.div@gmail.com?subject=Investment/Insurance Question"
                  className="text-primary hover:underline"
                >
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
