export type IProduct = {
  name: string;
  description: string;
  image: string;
  promotion: boolean;
  rating: string;
  active: boolean;
  id: string;
};
export type IProducts = IProduct[];

export type ISearchParms = {
  searchValue: string;
  isActive: boolean;
  isPromotion: boolean;
};
