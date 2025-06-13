import * as React from "react";

const ShelterDetails = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-12 font-sans text-black">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      🏠 <span>Shelter Details</span>
    </h1>
     <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
        The Shelters Details section outlines the essential structural,
        functional, and operational features of livestock and poultry shelters
        on the farm. Shelter structures may vary depending on climate, animal
        type, and management practices, including options like Open,
        Semi-covered, or Closed units such as Stall Barns, Loose-Housing</p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Systems, or Coops. Shelter types are categorized based on their
        purpose—ranging from Main Shelter or Barn, Quarantine Shelter, and
        Calving/Birthing Shelter, to specialized spaces like Feeding Shelters,
        Young Stock Shelters, Poultry Houses, Brooder Houses, Layer Houses, and
        Free-range or Sick Poultry Shelters.</p> 
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Facilities may also include Milking
        stations and Incubator Shelters. The type of flooring used—such as Mud
        Floor, Brick Floor, or Cement Concrete Floor—affects hygiene,
        maintenance, and animal health. Feeding systems are designed for
        efficiency and hygiene and may include Mangers, Feed Troughs, Ground
        Feeding, or Hanging Feeders and Bins.</p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Physical specifications such as
        width, height, length, and total shelter area (measured in Kanal, Marla,
        or Acre) are recorded for construction planning and capacity management.
        Each shelter is uniquely labeled (e.g., Shelter A, B, C, D) and assigned
        to specific animal groups including Cattle, Buffalo, Goat, Sheep, or
        Poultry, with shelter assignment codes like A-Cattle, B-Buffalos, etc.</p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Additional details include shelter capacity, the type of bedding
        material used (such as sand, straw, lime and straw mix, or wood
        shavings/sawdust), and the construction or setup date to track
        maintenance and infrastructure age. Reliable water sources are critical
        and can include Tube Wells, Hand Pumps, Canal Water, Water Tanks, or
        Bore Wells, with associated costs recorded for budget and resource
        management. Altogether, this detailed shelter profiling enables
        efficient animal housing management, welfare monitoring, and
        infrastructure planning across the farm.
      </p>
      </div>
    </div>
  );
};

export default ShelterDetails;
