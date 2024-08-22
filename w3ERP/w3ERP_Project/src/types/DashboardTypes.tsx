  
  export interface Product{
    id: string;
    name: string;
    amount: number;
    nextPurchase: string;
    lastPurchase: string;
    percentage: number;
  }
  
  export interface Customer{
    id: string;
    name: string;
    email: string;
    phone: string;
    products: Product[];
    percentage: number;
  }

  export interface ProductPredicao {
    id: string;
    name: string;
    lastPurchase: string;
    amount: number;
  }