import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative overflow-hidden shadow-md hover:scale-95 duration-300">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 px-3 py-1 rounded-lg absolute bottom-3 lg:px-6 lg:py-2 lg:text-lg">
            Order Now
          </button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover" src="../../assets/images/sun.jpg" alt="sun's out" />
      </div>
      {/* card */}
      <div className="rounded-xl relative overflow-hidden shadow-md hover:scale-95 duration-300">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 px-3 py-1 rounded-lg absolute bottom-3 lg:px-6 lg:py-2 lg:text-lg">
            Order Now
          </button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover" src="../../assets/images/deliver.jpg" alt="sun's out" />
      </div>
      {/* card */}
      <div className="rounded-xl relative overflow-hidden shadow-md hover:scale-95 duration-300">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 px-3 py-1 rounded-lg absolute bottom-3 lg:px-6 lg:py-2 lg:text-lg">
            Order Now
          </button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover" src="../../assets/images/New.jpg" alt="sun's out" />
      </div>
    </div>
  );
};

export default HeadlineCards;
