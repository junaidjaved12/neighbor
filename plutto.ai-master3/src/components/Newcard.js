"use client";

import { motion } from "framer-motion";

const NewCard = () => {

    const newcard = {
       
    images : './newcardimg.jpeg'
    }
  return (
      <div className="  bg-black ">
    <motion.div
      className=" flex justify-center h-screen  bg-black   "
      initial={{ y: 100, opacity: 0 }}       // start: neeche + invisible
      whileInView={{ y: 0, opacity: 1 }}     // jab viewport me aaye → apni jagah
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // ek dafa hi chale, 30% visible hote hi start
    >
     <img
          src={newcard.images}
          alt='image'
          className="rounded-2xl"
        />
    </motion.div>
    </div>
  );
};

export default NewCard;
