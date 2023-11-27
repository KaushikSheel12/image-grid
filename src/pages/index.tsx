import { Card } from "@/components/Card";
import { container } from "@/framer";
import { motion } from "framer-motion";
import React from "react";

const imageLink =
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-force-1-07-shoe-HWWX9W.png";

function index() {
  return (
    <div className="h-screen w-screen">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7"
      >
        {[...Array(50)].map((_, i) => (
          <Card key={i} imgLink={imageLink} />
        ))}
      </motion.div>
    </div>
  );
}

export default index;
