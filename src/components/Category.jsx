import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h2 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h2>
      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl lg:text-2xl">{item.name}</h2>
            <img className=" w-12 sm:w-16" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
