import React from "react";

const Card = ({ plants }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border">
      <h2 className="text-lg font-semibold mb-1 text-red-400">
        {plants.common_name || "Unknown Plant"}
      </h2>

      <p className="text-gray-500 text-sm">
        {plants?.scientific_name?.[0] || "No Scientific Name"}
      </p>
       
        <img
          src={plants.default_image?.original_url || "https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_SkalitC3A9.jpg"}
          alt={plants?.common_name}
          className="w-full h-40 object-cover rounded-md"
        />
    </div>
  );
}

export default Card;
