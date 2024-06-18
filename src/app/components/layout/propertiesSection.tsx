"use client"
import { useState, useMemo } from "react";
import { data } from "../../../../data";
import PropertiesCard from "../ui/propertiesCard";

export default function PropertiesSection() {
  const [pickedButton, setPickedButton] = useState("r");
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const displayedData = useMemo(() => {
    const filtered = data.filter((item) => {
      if (pickedButton === "r") {
        return item.type === "rent";
      } else if (pickedButton === "b") {
        return item.type === "buy";
      } else if (pickedButton === "s") {
        return item.type === "sell";
      }
      return false;
    });

    return showAll ? filtered : filtered.slice(0, 6);
  }, [pickedButton, showAll]);

  return (
    <section className="py-20 flex flex-col gap-4 max-w-6xl m-auto">
      <div className="flex flex-col gap-4 text-center">
        <h3 className="font-bold text-[32px]">Based on your location</h3>
        <p className="text-[#000929]">
          Some of our picked properties near your location.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 items-center">
          <div className="max-w-[328px] border-2 p-2 flex gap-2 rounded-lg bg-[#EFEFFB] text-[#6C727F] font-medium text-lg">
            <button
              className={`px-4 py-2 rounded-md w-full ${
                pickedButton === "r" ? "bg-white border text-light-purple font-bold" : ""
              }`}
              onClick={() => setPickedButton("r")}
            >
              Rent
            </button>
            <button
              className={`px-4 py-2 rounded-md w-full ${
                pickedButton === "b" ? "bg-white border text-light-purple font-bold" : ""
              }`}
              onClick={() => setPickedButton("b")}
            >
              Buy
            </button>
            <button
              className={`px-4 py-2 rounded-md w-full ${
                pickedButton === "s" ? "bg-white border text-light-purple font-bold" : ""
              }`}
              onClick={() => setPickedButton("s")}
            >
              Sell
            </button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-scroll hide-scrollbar md:overflow-x-auto md:flex-wrap md:justify-center">
          {displayedData.length > 0 ? (
            displayedData.map((item, index) => (
              <PropertiesCard item={item} key={index} />
            ))
          ) : (
            <h3 className="font-bold text-[32px] my-20">
              There is no housing for {pickedButton === "r" ? "rent" : pickedButton === "b" ? "buy" : "sale"} here yet.
            </h3>
          )}
        </div>

        {displayedData.length > 5 && (
          <button
            className="w-full bg-dark-purple text-white rounded-lg py-3 sm:max-w-[254px] sm:self-center"
            onClick={handleShowMore}
          >
            {showAll ? "Show less properties" : "Browse more properties"}
          </button>
        )}
      </div>
    </section>
  );
}
