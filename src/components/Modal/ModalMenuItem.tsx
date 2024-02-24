"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ModalMenuItem = ({ open, onClose }: Props) => {
  const trigger = useRef(null);
  const modal = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 3 },
    });
  }, [controls]);

  // close on click outside
  //   useEffect(() => {
  //     const clickHandler = ({ target }: any) => {
  //       if (!modal.current) return;
  //       if (
  //         !modalOpen ||
  //         modal.current.contains(target) ||
  //         trigger.current.contains(target)
  //       )
  //         return;
  //       setModalOpen(false);
  //     };
  //     document.addEventListener("click", clickHandler);
  //     return () => document.removeEventListener("click", clickHandler);
  //   });

  // close if the esc key is pressed
  //   useEffect(() => {
  //     const keyHandler = ({ keyCode }: any) => {
  //       if (!modalOpen || keyCode !== 27) return;
  //       setModalOpen(false);
  //     };
  //     document.addEventListener("keydown", keyHandler);
  //     return () => document.removeEventListener("keydown", keyHandler);
  //   });

  return (
    // <AnimatePresence mode="popLayout">
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      // whileTap={{ scale: 0.95, rotate: "4.5deg" }}
      // whileInView={{ scale: 0.95, rotate: "4.5deg" }}
      className="container mx-auto py-0"
      // initial={{
      //   rotate: "0deg",
      //   scale: 0,
      //   y: 0,
      // }}
      // animate={{
      //   rotate: "180deg",
      //   scale: 1,
      //   y: [0, 150, -150, -150, 0],
      // }}
      // exit={{
      //   rotate: "0deg",
      //   scale: 0,
      //   y: 0,
      // }}
      // transition={{
      //   duration: 1,
      //   ease: "backInOut",
      //   times: [0, 0.25, 0.5, 0.85, 1],
      // }}
    >
      <div
        className={`z-50 fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-0 py-5 ${
          open ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          // onFocus={() => setModalOpen(true)}
          // onBlur={() => setModalOpen(false)}
          className=" w-full max-w-[870px] h-full max-h-[870px] rounded-[20px] bg-white shadow-2xl shadow-black px-0 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
        >
          <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
            Grilled Octopus Salad
          </h3>
          <span
            className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
          ></span>
          <img src="img3.png" />
          <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since
          </p>
          <div className="mx-3  bottom-4">
            <button
              onClick={() => onClose()}
              className="block w-full rounded-md shadow-md shadow-black  p-3 text-center text-base font-medium text-dark transition bg-stone-600  text-white dark:text-white"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </motion.div>
    // </AnimatePresence>
  );
};

export default ModalMenuItem;
