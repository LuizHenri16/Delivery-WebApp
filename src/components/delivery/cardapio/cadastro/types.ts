export interface ProductOption {
  id: string;
  title: string;
  description: string;
  price: string;
  isDefault?: boolean;
}

export interface CustomizationStep {
  id: string;
  stepNumber: number;
  title: string;
  options: ProductOption[];
}

export interface ProductFormData {
  // Foto
  imageFile?: File | null;
  imageUrl?: string;

  // Informações Principais
  name: string;
  sku: string;
  category: string;
  productionSector: string;
  description: string;

  // Canais & Disponibilidade
  isOnlineDelivery: boolean;
  isPdvBalcao: boolean;
  isHighlight: boolean;
  cookingTime: string;

  // Estimativa de Preços e Margem
  counterPrice: number;
  deliveryPrice: number;
  costPrice: number;

  // Passos & Etapas de Escolha
  customizationSteps: CustomizationStep[];

  // Status de Envio
  status: 'draft' | 'published';
}

export const INITIAL_PRODUCT_FORM_DATA: ProductFormData = {
  name: '',
  sku: '',
  category: 'Pizzas Artesanais',
  productionSector: 'Forno Principal (Pizzaiolo 01)',
  description: '',
  isOnlineDelivery: true,
  isPdvBalcao: true,
  isHighlight: false,
  cookingTime: '',
  counterPrice: 0,
  deliveryPrice: 0,
  costPrice: 0,
  customizationSteps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Escolha o Tamanho da Pizza',
      options: [
        {
          id: 'opt-1-1',
          title: '',
          description: '',
          price: '',
        },
        {
          id: 'opt-1-2',
          title: '',
          description: '',
          price: '',
        },
        {
          id: 'opt-1-3',
          title: '',
          description: '',
          price: '',
          isDefault: true,
        },
      ],
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Bordas Recheadas',
      options: [
        {
          id: 'opt-2-1',
          title: '',
          description: '',
          price: '',
        },
        {
          id: 'opt-2-2',
          title: '',
          description: '',
          price: '',
        },
        {
          id: 'opt-2-3',
          title: '',
          description: '',
          price: '',
        },
      ],
    },
  ],
  status: 'published',
};

