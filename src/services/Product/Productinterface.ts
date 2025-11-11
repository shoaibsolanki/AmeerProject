interface category {
  _id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  productImage: string;
  category: category;
  productAmount: number;
  stockAmount: number;
  subscriptionType: string;
  isPremium: boolean;
  isPaid: boolean;
  tags: [];
  createdAt: "2025-10-28T06:39:19.983Z";
  updatedAt: "2025-10-28T06:39:19.983Z";
  __v: 0;
}
