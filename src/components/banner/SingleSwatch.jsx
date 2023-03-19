import React from "react";

const SingleSwatch = ({ item, handleSwatch, activeID }) => {
  return (
    <div
      className={`h-7 w-7 cursor-pointer rounded-full bg-white p-1 drop-shadow-xl  transition ease-in hover:scale-110 ${
        item.id === activeID ? "scale-125" : ""
      }`}
      onClick={() => handleSwatch(item)}
    >
      <div
        style={{ backgroundColor: item.swatchColor }}
        className="h-full w-full  rounded-full"
      ></div>
    </div>
  );
};

export default SingleSwatch;
