"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import PropertiesCard from "../ui/propertiesCard";
import Autosuggest, {
  SuggestionsFetchRequestedParams,
  SuggestionSelectedEventData,
  ChangeEvent,
  InputProps,
} from "react-autosuggest";
import { data } from "../../../../data";
import { itemType } from "../../types/index";

import mapImage from "../../../../public/mapImage.png";

const theme = {
  input: {
    outline: "none",
  },
};

export default function FirstSection() {
  const [buttonSelected, setButtonSelected] = useState<"r" | "b" | "s">("r");
  const [randomNumber, setRandomNumber] = useState(0);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<itemType[]>([]);

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * data.length);
    setRandomNumber(random);
  };

  const inputProps: InputProps<itemType> = {
    placeholder: "Search by property title...",
    value,
    onChange: (event: FormEvent<HTMLElement>, { newValue }: ChangeEvent) => {
      setValue(newValue);
    },
  };

  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : data.filter((item) =>
          item.title.toLowerCase().includes(inputValue) &&
          (buttonSelected === "r"
            ? item.type === "rent"
            : buttonSelected === "b"
            ? item.type === "buy"
            : buttonSelected === "s"
            ? item.type === "sell"
            : true)
        );
  };

  const onSuggestionsFetchRequested = ({ value }: SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const renderSuggestion = (suggestion: itemType) => <div>{suggestion.title}</div>;

  const CustomSuggestionsContainer = ({
    containerProps,
    children,
  }: {
    containerProps: any;
    children: React.ReactNode;
  }) => (
    <div {...containerProps} className="custom-suggestions-container">
      {children}
    </div>
  );

  const renderSuggestionsContainer = ({
    containerProps,
    children,
  }: {
    containerProps: any;
    children: React.ReactNode;
  }) => (
    <CustomSuggestionsContainer containerProps={containerProps}>
      {children}
    </CustomSuggestionsContainer>
  );

  const onSuggestionSelected = (
    event: React.FormEvent,
    { suggestion }: SuggestionSelectedEventData<itemType>
  ) => {
    const selectedIndex = data.findIndex((item) => item === suggestion);
    setRandomNumber(selectedIndex);
  };

  const handleButtonClick = (type: "r" | "b" | "s") => {
    setButtonSelected(type);
    setValue("");
    setSuggestions([]);
  };

  return (
    <section className="py-12 lg:py-0 bg-BGlight-purple -mx-5 px-5">
      <div className="max-w-5xl m-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left section */}
        <div className="flex flex-col items-center gap-12 md:items-start md:w-[500px] md:relative">
          <div className="flex flex-col items-center gap-8 text-center md:text-left">
            <h2 className="text-[40px] font-bold leading-tight">
              Buy, rent, or sell your property easily
            </h2>
            <p className="text-xl font-medium">
              A great platform to buy, sell, or even rent your properties
              without any commissions.
            </p>
          </div>

          <div className="w-full bg-white rounded-lg max-w-[400px]">
            <div className="flex justify-between border-b-[1px]">
              <button
                className={`w-full py-4 text-lg font-medium ${
                  buttonSelected === "r"
                    ? "text-light-purple border-b-[3px] border-light-purple"
                    : "text-dark-purple"
                }`}
                onClick={() => handleButtonClick("r")}
              >
                Rent
              </button>
              <button
                className={`w-full py-4 text-lg font-medium ${
                  buttonSelected === "b"
                    ? "text-light-purple border-b-[3px] border-light-purple"
                    : "text-dark-purple"
                }`}
                onClick={() => handleButtonClick("b")}
              >
                Buy
              </button>
              <button
                className={`w-full py-4 text-lg font-medium ${
                  buttonSelected === "s"
                    ? "text-light-purple border-b-[3px] border-light-purple"
                    : "text-dark-purple"
                }`}
                onClick={() => handleButtonClick("s")}
              >
                Sell
              </button>
            </div>

            <div className="py-4 px-4 flex items-center gap-3 justify-between focus:outline-none">
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={(suggestion: itemType) => suggestion.title}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={onSuggestionSelected}
                renderSuggestionsContainer={renderSuggestionsContainer}
                highlightFirstSuggestion={true}
                theme={theme}
              />
            </div>
          </div>

          <div className="flex gap-14">
            <div className="border-l-2 pl-7 border-[#E0DEF7]">
              <h4 className="font-bold text-3xl text-light-purple">50k+</h4>
              <p className="font-medium text-[#6C727F]">renters</p>
            </div>

            <div className="border-l-2 pl-7 border-[#E0DEF7]">
              <h4 className="font-bold text-3xl text-light-purple">10k+</h4>
              <p className="font-medium text-[#6C727F]">properties</p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="hidden md:flex">
          <Image src={mapImage} alt="mapImage" />

          <div className="absolute">
            <div className="relative md:top-[40px] md:left-[40px] lg:top-[100px] lg:left-[160px] max-w-[100px] ">
              <PropertiesCard item={data[randomNumber]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
