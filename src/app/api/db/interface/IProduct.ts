interface IPurchaseInformation {
  pricePurchase?: number;
  quantity?: number;
  purchaseDate?: Date;
  supplier?: string;
}

export interface IProduct {
  _id?: string;
  name?: string;
  description?: string;
  priceSale?: number;
  quantity?: number;
  quantityMin?: number;
  purchaseInformation?: IPurchaseInformation;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
