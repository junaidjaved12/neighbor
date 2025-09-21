"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const FinancialDashboard = () => {
  const ref = useRef(null);

  // Jab section viewport mai aa jaye
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const card1 = {
    title: "Real-Time Analytics",
    image1: "./realtime.png",
    image2: "./Group21.png",
    image3: "./Group24.png",
    image4: "./Group27.png",
    image5: "./Group26.png",
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-black flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 relative z-50"
    >
      {/* Header Text */}
      <motion.h2
        className="text-white text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16 px-2 sm:px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Streamline Finances With Smart Features
      </motion.h2>

      {/* Dashboard Grid */}
      <motion.div
        className="max-w-7xl w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        {/* Real-Time Analytics */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-lg sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
            Real-Time Analytics
          </h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Monitor your finances live with clear, intuitive dashboards.
          </p>
          <img
            src={card1.image1}
            alt={card1.title}
            className="w-full h-45 rounded-md"
          />
        </div>

        {/* Automated Reports */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
            Automated Reports
          </h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Generate comprehensive reports automatically on schedule.
          </p>
          <img
            src={card1.image2}
            alt={card1.title}
            className="w-full h-45 rounded-md"
          />
        </div>

        {/* Smart Budgeting */}
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
            Smart Budgeting
          </h3>
          <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
            Plan and adjust with AI-powered budget suggestions.
          </p>
          <img
            src={card1.image3}
            alt={card1.title}
            className="w-full h-45 rounded-md"
          />
        </div>
      </motion.div>

      {/* Second Grid */}
      <motion.div
        className="max-w-7xl w-full grid grid-cols-1 mt-10 xs:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        {/* Secure syncing */}
        <div className="bg-white flex justify-between rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <div className="content-center">
            <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
              Secure syncing
            </h3>
            <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
              Monitor your finances live with dashboards.
            </p>
          </div>
          <img
            src={card1.image4}
            alt={card1.title}
            className="w-80 h-40 rounded-md"
          />
        </div>

        {/* Growth Score */}
        <div className="bg-white flex justify-between relative rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
          <div className="content-center">
            <h3 className="text-sm sm:text-base lg:text-[25px] font-semibold text-gray-900 mb-1.5 sm:mb-2">
              Growth Score
            </h3>
            <p className="text-[10px] xs:text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
              Generate summaries instantly.
            </p>
          </div>
          <div>
            <img
              src={card1.image5}
              alt={card1.title}
              className="w-60 h-50 rounded-md"
            />
            <h2 className="absolute md:text-[31px] right-27 bottom-25 ">82%</h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FinancialDashboard;
