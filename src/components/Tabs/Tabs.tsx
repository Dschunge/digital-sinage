import React from "react";

export default function Tabs() {
  return (
    <div className="flex flex-row justify-center items-center text-2xl text-center font-medium  text-gray-500  dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Appetizer
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
            aria-current="page"
          >
            Main Dishes
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Specials
          </a>
        </li>
        <li className="me-2">
          <a
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Vegetarion Alternatives
          </a>
        </li>
        <li>
          <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
            Drink & Wine
          </a>
        </li>
      </ul>
    </div>
  );
}
