import React from "react";

const styles = {
  patch: {
    background: `url(${require("./../images/patch.jpg")}) no-repeat center center`,
    backgroundSize: "cover",
  },
};

export default function PatchCard({ item }) {
  const { type, title, price } = item;
  return (
    <div className="text-gray-100 bg-gray-800 bg-opacity-50 rounded flex h-24 px-4 mt-2 shadow-lg mx-2">
      <div style={styles.patch} className="w-1/3" />
      {/* Data */}
      <div className="flex w-full py-1">
        {/* Left col */}
        <div className="h-full flex flex-col w-full ml-3">
          <h3 className="mt-1 text-lg font-bold">{type} of the Day</h3>
          <h5>{title}</h5>
        </div>
        {/* Right col */}
        <div className="flex flex-col justify-end items-end w-full">
          <div className="mt-1 text-xl font-bolder mb-2">
            $ {price.toFixed(2)}
          </div>
          <button className="bg-red-600 rounded-lg shadow-sm px-6 py-1">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
}
