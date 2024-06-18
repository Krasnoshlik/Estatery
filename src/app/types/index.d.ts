export interface itemType {
    id: number;
    img: StaticImageData;
    price: number;
    title: string;
    address: string;
    beds: number;
    baths: number;
    size: string;
    popular: boolean;
    type: string;
}

export interface LikedItemsContextType {
    likedItems: itemType[];
    addLiked: (item: itemType) => void;
    removeLiked: (itemId: number) => void;
  }