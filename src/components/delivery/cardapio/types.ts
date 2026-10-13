export type ProductStatus =
  | "Ativo no Cardápio"
  | "Destaque Promoção"
  | "Pausado (Sem Estoque)"
  | "Pausado no App";

export interface ProductAdditional {
  name: string;
  price: string;
}

export interface MenuItem {
  id: string;
  code: string;
  name: string;
  description: string;
  category: string;
  costPrice: number;
  counterPrice: number;
  deliveryPrice: number;
  grossMargin: number;
  status: ProductStatus;
  isAvailable: boolean;
  isBestSeller?: boolean;
  promotionalNote?: string;
  missingIngredient?: string;
  additionals: ProductAdditional[];
}
