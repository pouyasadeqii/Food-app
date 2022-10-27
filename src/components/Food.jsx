import React from "react";
import { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  // console.log(data);

  const [foods, setFoods] = useState(data);

  //  filter type burgger/pizza/salad/chiken
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter by Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 ">
      <h2 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h2>

      {/* filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter types */}
        <div>
          <p className="font-bold text-gray-700">Filter Types</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="px-4 py-1 border rounded-lg border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="px-4 py-1 border rounded-lg border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1"
            >
              Burggers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="px-4 py-1 border rounded-lg border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1"
            >
              Pizaa
            </button>
            <button
              onClick={() => filterType("salad")}
              className="px-4 py-1 border rounded-lg border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="px-4 py-1 border rounded-lg border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="px-4 py-1 border rounded-lg border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="px-4 py-1 border rounded-lg border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="px-4 py-1 border rounded-lg border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="px-4 py-1 border rounded-lg border-orange-600 text-orange-600 hover:text-white hover:bg-orange-600 m-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/*Display foods  */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover "
            />
            <div className="flex justify-between px-3 py-4">
              <p className="font-bold text-sm">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-2 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
