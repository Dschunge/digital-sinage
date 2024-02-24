import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MockCategories, ICategory } from "@/data/restaurant";
import { useDispatch } from "react-redux";
import { setCategory } from "../../features/counter/categorySlice";

export default function Tabs() {
  const [open, setOpen] = useState("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const dispatch = useDispatch();

  const handleTabOpen = (tabCategory: ICategory) => {
    setOpen(tabCategory.name);
    dispatch(setCategory(tabCategory));
  };

  useEffect(() => {
    // setDishes(MockRestaurants[0].dishes);
    setCategories(MockCategories);
    console.log(MockCategories);
  }, [categories]);

  return (
    <div className="flex flex-row justify-center items-center mt-10">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            // className="text-gray-300 text-2xl text-center font-medium w-64 "
            className={cn(
              "inline-block p-4 text-white  border-white active text-center text-2xl font-medium font-belleza w-80 ",
              open === category.name ? "border-b-4" : ""
            )}
            onClick={() => handleTabOpen(category)}
          >
            <div>{category.name}</div>
            <div>{category.name_esp}</div>
            {/* <a
                className={cn(
                  "inline-block p-4 text-white  border-white rounded-t-lg active",
                  open === category.name ? "border-b-2" : ""
                )}
              >
                {category.name + " / " + category.name_esp}
              </a> */}
          </div>
        );
      })}
    </div>
  );
}
