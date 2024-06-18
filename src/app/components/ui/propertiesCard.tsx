'use client';
import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import Beds from '../../../../public/icons/beds.png';
import Baths from '../../../../public/icons/baths.png';
import Sizes from '../../../../public/icons/sizes.png';
import { LikedItemsContext } from '../../contexts/LickedItems';
import { itemType } from '../../types/index';

interface PropertiesCardProps {
  item: itemType;
}

export default function PropertiesCard({ item }: PropertiesCardProps) {
  const context = useContext(LikedItemsContext);
  if (!context) {
    throw new Error('PropertiesCard must be used within a MyProvider');
  }
  const { addLiked, removeLiked, likedItems } = context;
  const [propertyLiked, setPropertyLiked] = useState(false);

  const changeLiked = () => {
    if (propertyLiked) {
      removeLiked(item.id);
    } else {
      addLiked(item);
    }
    setPropertyLiked(!propertyLiked);
  };

  useEffect(() => {
    const isLiked = likedItems.some((likedItem: itemType) => likedItem.id === item.id);
    setPropertyLiked(isLiked);
  }, [likedItems, item.id]);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="min-w-[300px] min-h-[400px] border-[1px] border-[#F0EFFB] rounded-lg overflow-hidden bg-white">
      <Image src={item.img} alt="Image" />

      <div className="px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="flex items-end">
            <h3 className="font-extrabold text-light-purple text-2xl">
              ${formatPrice(item.price)}
            </h3>
            {item.type === 'rent' && (
              <p className="text-[#00092996] font-medium"> /month</p>
            )}
          </div>

          <div
            className="border-2 border-[#E8E6F9] p-3 rounded-3xl hover:cursor-pointer"
            onClick={changeLiked}
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill={propertyLiked ? '#7065F0' : 'none'}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.31804 2.31804C1.90017 2.7359 1.5687 3.23198 1.34255 3.77795C1.1164 4.32392 1 4.90909 1 5.50004C1 6.09099 1.1164 6.67616 1.34255 7.22213C1.5687 7.7681 1.90017 8.26417 2.31804 8.68204L10 16.364L17.682 8.68204C18.526 7.83812 19.0001 6.69352 19.0001 5.50004C19.0001 4.30656 18.526 3.16196 17.682 2.31804C16.8381 1.47412 15.6935 1.00001 14.5 1.00001C13.3066 1.00001 12.162 1.47412 11.318 2.31804L10 3.63604L8.68204 2.31804C8.26417 1.90017 7.7681 1.5687 7.22213 1.34255C6.67616 1.1164 6.09099 1 5.50004 1C4.90909 1 4.32392 1.1164 3.77795 1.34255C3.23198 1.5687 2.7359 1.90017 2.31804 2.31804V2.31804Z"
                stroke="#7065F0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2 pb-2 border-b-[1px]">
          <h3 className="font-bold text-2xl">{item.title}</h3>
          <p className="font-medium text-[#000929]">{item.address}</p>
        </div>

        <div className="pt-2 flex justify-between">
          <div className="flex gap-1">
            <Image src={Beds} alt="Beds" />
            <p className="text-[#000929] font-medium text-sm">{item.beds} Beds</p>
          </div>

          <div className="flex gap-1">
            <Image src={Baths} alt="Baths" />
            <p className="text-[#000929] font-medium text-sm">{item.baths} Bathrooms</p>
          </div>
        </div>

        <div>
          <div className="flex gap-1 mt-2">
            <Image src={Sizes} alt="Sizes" />
            <p className="text-[#000929] font-medium text-sm">{item.size}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

