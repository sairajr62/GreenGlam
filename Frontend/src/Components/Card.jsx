import React from "react";

function Card({ plant }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border">
      <h2 className="text-lg font-semibold mb-1 text-red-400">
        {plant?.common_name || "Unknown Plant"}
      </h2>

      <p className="text-gray-500 text-sm">
        {plant?.scientific_name?.[0] || "No Scientific Name"}
      </p>

      {plant?.default_image?.thumbnail && (
        <img
          src={plant.default_image.thumbnail}
          alt={plant.common_name}
          className="w-full h-40 object-cover rounded-md"
        />
      )}
    </div>
  );
}

export default Card;
