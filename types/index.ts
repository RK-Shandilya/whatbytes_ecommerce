export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    brand: string;
    image: string;
    description: string;
    rating: number;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface CartState {
    items: CartItem[];
  }
  
  export interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
  }
  
  export type CartAction =
    | { type: 'ADD_TO_CART'; payload: Product }
    | { type: 'REMOVE_FROM_CART'; payload: number }
    | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
    | { type: 'CLEAR_CART' };
  
  export interface CartProviderProps {
    children: React.ReactNode;
  }