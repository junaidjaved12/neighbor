"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does setup take?",
      answer:
        "Setup typically takes 5-10 minutes. Our streamlined onboarding process guides you through connecting your accounts and configuring your preferences.",
    },
    {
      question: "Is my financial data secure?",
      answer:
        "Yes, we use bank-level encryption and security measures to protect your data. We never store your login credentials and use read-only access to your accounts.",
    },
    {
      question: "Can I use this app with my team?",
      answer:
        "Absolutely! Our Business and Advance plans support team collaboration with role-based access controls and shared dashboards.",
    },
    {
      question: "What if I need to change my plan?",
      answer:
        "You can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated accordingly.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we provide 24/7 customer support via chat and email. Premium plans also include phone support and dedicated account managers.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div ref={ref} className="min-h-screen bg-black py-16 px-4">
      <motion.div
        className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left side - Title */}
        <motion.div
          className="lg:w-1/3 content-center"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm mb-4">FAQ</p>
          <h2 className="text-white text-3xl lg:text-4xl font-light leading-tight">
            All You Need To Know
          </h2>
        </motion.div>

        {/* Right side - FAQ Items */}
        <div className="lg:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden"
              variants={itemVariants}
            >
              <button
                className="w-full px-6 py-4 text-left cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FAQSection;
