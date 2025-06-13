import * as React from "react"

const LandandLocation = () => {
  return (
   <div className="min-h-screen bg-white px-8 py-12 font-sans text-black">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-2">
      📍 <span>Land and Location</span>
    </h1>

      <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
        The Land and Location section provides a comprehensive overview of the
        physical, legal, and administrative attributes of agricultural land. It
        begins with the land type, categorizing the land based on its natural
        characteristics and usage:</p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
        Rain-Fed areas that depend on seasonal
        rainfall, Pasture lands used for grazing livestock, Barren lands that
        are currently unproductive, and Mixed lands that support multiple uses
        or have varying fertility zones. Understanding these classifications
        helps in planning appropriate farming or livestock strategies.</p>
     <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">   
    Land
        ownership is documented to distinguish between Rented Land, Purchased
        Land, and Inherited Land. For rented and purchased lands, the area is
        recorded in traditional units such as Kanal, Marla, or Acre, alongside
        the respective cost in PKR, giving financial context for investment or
        leasing decisions. In the case of inherited land, legal ownership is
        clarified by indicating the legal status—either Verified or
        Pending—which is crucial for resolving disputes and ensuring rightful
        possession.</p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
         Further segmentation is provided under Land Classification,
        which organizes the land into general categories like Land (the main
        parcel) and Sub Land (divisions or specific use areas within the main
        property). This classification aids in organizing land use for
        operational efficiency, resource planning, and reporting. The Address
        component captures the administrative hierarchy of the land's location,
        starting from the Country level down to Division, District, Tehsil, and
        Village, with the option to add any Nearby landmarks or points of
        interest. This structure is essential for government documentation,
        rural development projects, and digital land records.</p>
         <p className="text-gray-700 text-lg leading-relaxed mb-6 font-sans">
         Finally, the
        Location section includes precise Latitude and Longitude coordinates for
        geospatial referencing, making it easier to map the land digitally or
        integrate it with geographic information systems (GIS). A map_pin_set
        indicator confirms whether the land has been marked or tagged on a map
        platform, facilitating navigation, monitoring, and mobile inspection.
        Together, this detailed land and location information ensures
        transparency, accountability, and efficiency in land management for both
        private and public agricultural initiatives.
      </p>
      </div>
    </div>
  );
};

export default LandandLocation;
