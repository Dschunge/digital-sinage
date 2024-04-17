import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MockCategories, ICategory } from "@/data/restaurant";
import { useDispatch } from "react-redux";
import { setCategory } from "../../features/counter/categorySlice";
import { motion, useAnimation } from "framer-motion";

export default function Tabs() {
  const [open, setOpen] = useState("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const dispatch = useDispatch();
  const controls = useAnimation();

  const handleTabOpen = (tabCategory: ICategory) => {
    setOpen(tabCategory.name);
    dispatch(setCategory(tabCategory));
  };

  useEffect(() => {
    // setDishes(MockRestaurants[0].dishes);
    setCategories(MockCategories);
    console.log(MockCategories);
  }, [categories]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 3 },
    });
  }, [controls]);

  return (
    <div className="flex flex-row justify-center gap-8 my-8">
      {categories.map((category, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 1 }}
            animate={controls}
            whileTap={{ scale: 0.95, rotate: "4.5deg", opacity: 1 }}
            className={cn(
              "inline-block p-0 text-white  border-white active text-center text-2xl font-medium font-belleza ",
              open === category.name ? "border-b-4" : ""
            )}
            onClick={() => handleTabOpen(category)}
          >
            <h3>{category.name}</h3>
            <h3>{category.name_esp}</h3>
          </motion.div>
        );
      })}
    </div>
  );
}
