import * as React from "react"
import { AppLayout } from "../components/AppShell/AppLayout";

const BuyAnimal = () => {
  return (
    <AppLayout>
    <div className=" bg-gray px-8 py-12 font-sans text-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-6 flex items-center gap-2">
          <span>Buy Animal</span>
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 font-poppins">
        Specific Animal The Specific Animal section captures detailed
        information about each animal within a batch to support traceability,
        health monitoring, and production management. Each entry begins with a
        Batch Number or Animal ID, which uniquely identifies the animal or group
        for record-keeping and tracking purposes.</p>
         <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
         The Type and Breed fields
        further classify the animal based on species (such as cattle, goat,
        sheep, poultry, etc.) and breed (e.g., Sahiwal, Rojhan, Dera Din Panah,
        or Rhode Island Red for poultry), enabling better planning for breeding,
        feeding, and disease management. Quantity represents the number of
        animals within the batch, while Weight helps assess growth performance
        and suitability for specific farm operations such as milk, meat, or egg
        production.</p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
         The Purchase Date and Price provide a financial snapshot of
        the acquisition, helping track investment and budgeting decisions.
        Production data outlines the expected output, whether it's milk yield,
        meat weight, or egg count.</p> 
        <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
        The Source details where the animals were
        acquired—ranging from farms, breeders, markets, or government schemes.
        Additionally, the Purpose of Buying clarifies whether the animals were
        purchased for reproduction, dairy production, meat, or resale. Lastly,
        the Reproductive Status indicates whether the animals are currently
        Expecting, Lactating, Laying, or Non-Laying, providing valuable insight
        into the productivity and current lifecycle stage of each animal.</p>
        
       <h1 className="text-4xl font-bold text-green-800 mt-6 mb-6 flex items-center gap-2">
          <span>Seller Information</span>
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
        The Seller Information section helps maintain transaction
        transparency and accountability. It begins with the Seller’s Name,
        followed by their Contact Number to facilitate future communication or
        follow-up. The Location or Address ensures the traceability of the
        animal's origin and assists in validating seller credibility. The Source
        of acquisition is also recorded—whether the seller is from a Local
        Market, Online Platform, a Known Farmer, or another source. This data
        supports better procurement decisions and aids in maintaining consistent
        and reliable sourcing channels for livestock acquisition.</p>
      </div>
    </div>
    </AppLayout>
  );
};

export default BuyAnimal;
