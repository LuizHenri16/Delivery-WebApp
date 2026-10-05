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

export const MOCK_MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    code: "#PZ-1048",
    name: "Pizza Calabresa Artesanal",
    description:
      "Massa de fermentação lenta (48h), molho de tomate pelado San Marzano, fatias crocantes de calabresa especial e cebola caramelizada.",
    category: "Pizzas",
    costPrice: 14.2,
    counterPrice: 39.9,
    deliveryPrice: 42.9,
    grossMargin: 66.9,
    status: "Ativo no Cardápio",
    isAvailable: true,
    isBestSeller: true,
    additionals: [
      { name: "Borda Catupiry Original", price: "+ R$8,00" },
      { name: "Borda Cheddar Cremoso", price: "+ R$8,00" },
      { name: "Massa Integral 100%", price: "+ R$4,00" },
    ],
  },
  {
    id: "2",
    code: "#BG-0182",
    name: "Hambúrguer Bella Bacon 180g",
    description:
      "Pão brioche artesanal, blend especial 180g, queijo cheddar, bacon crocante e molho especial da casa.",
    category: "Hambúrgueres",
    costPrice: 9.8,
    counterPrice: 28.0,
    deliveryPrice: 29.9,
    grossMargin: 67.2,
    status: "Ativo no Cardápio",
    isAvailable: true,
    additionals: [
      { name: "Ovo Frito", price: "+ R$3,00" },
      { name: "Bacon Extra", price: "+ R$5,00" },
    ],
  },
  {
    id: "3",
    code: "#PZ-1052",
    name: "Pizza Frango com Catupiry Original",
    description:
      "Frango desfiado temperado, catupiry original, molho de tomate artesanal e orégano fresco.",
    category: "Pizzas",
    costPrice: 16.5,
    counterPrice: 44.0,
    deliveryPrice: 46.9,
    grossMargin: 64.8,
    status: "Ativo no Cardápio",
    isAvailable: true,
    additionals: [
      { name: "Catupiry Extra", price: "+ R$4,00" },
      { name: "Borda Integral", price: "+ R$4,00" },
    ],
  },
  {
    id: "4",
    code: "#CB-0021",
    name: "Combo Bella Clássico (Pizza M + Refri)",
    description: "Uma pizza média à escolha + refrigerante lata 350ml.",
    category: "Combos",
    costPrice: 15.0,
    counterPrice: 39.9,
    deliveryPrice: 39.9,
    grossMargin: 62.4,
    status: "Destaque Promoção",
    isAvailable: true,
    promotionalNote: "Preço Promocional",
    additionals: [],
  },
  {
    id: "5",
    code: "#SB-0044",
    name: "Açaí Especial na Taça 500ml",
    description: "Açaí cremoso com granola, banana, leite condensado e morango.",
    category: "Sobremesas",
    costPrice: 6.5,
    counterPrice: 18.9,
    deliveryPrice: 18.9,
    grossMargin: 65.6,
    status: "Pausado (Sem Estoque)",
    isAvailable: false,
    missingIngredient: "Morango",
    additionals: [
      { name: "Granola Extra", price: "+ R$2,00" },
    ],
  },
  {
    id: "6",
    code: "#BD-0088",
    name: "Coca-Cola Lata 350ml",
    description: "Coca-Cola lata bem gelada.",
    category: "Bebidas",
    costPrice: 2.9,
    counterPrice: 6.0,
    deliveryPrice: 6.0,
    grossMargin: 51.6,
    status: "Ativo no Cardápio",
    isAvailable: true,
    additionals: [],
  },
];
