'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { itemType, LikedItemsContextType } from '../types';

const LikedItemsContext = createContext<LikedItemsContextType | undefined>(undefined);

const MyProvider = ({ children }: { children: ReactNode }) => {
  const [likedItems, setLikedItems] = useState<itemType[]>([]);

  useEffect(() => {
    const storedLikedItems = localStorage.getItem('likedItems');
    if (storedLikedItems) {
      setLikedItems(JSON.parse(storedLikedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  const addLiked = (item: itemType) => {
    setLikedItems((prevLikedItems) => [...prevLikedItems, item]);
  };

  const removeLiked = (itemId: number) => {
    setLikedItems((prevLikedItems) =>
      prevLikedItems.filter((item) => item.id !== itemId)
    );
  };

  const contextValue = {
    likedItems,
    addLiked,
    removeLiked,
  };

  return (
    <LikedItemsContext.Provider value={contextValue}>
      {children}
    </LikedItemsContext.Provider>
  );
};

export { LikedItemsContext, MyProvider };

