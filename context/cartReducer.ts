import { CartState, CartAction, CartItem } from "@/types"; 

export const localStorageCart = (): CartState => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : { items: [] };
    }
    return { items: [] };
};

export const cartReducer = ( state: CartState, action: CartAction) => {
    let newState = { ...state };
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id == action.payload.id);
            if (existingItem) {
                newState = {
                    ...state,
                    items: state.items.map((item: CartItem) => 
                        item.id === action.payload.id
                            ? {...item, quantity: item.quantity + 1}
                            : item
                    )
                }
            }
            else {
                newState = {
                    ...state,
                    items: [...state.items, {...action.payload, quantity: 1}]
                }
            }
            break;
        case 'REMOVE_FROM_CART':
            newState = {
                ...state,
                items: state.items.filter((item: CartItem) => item.id != action.payload)
            } 
            break;
        case 'UPDATE_QUANTITY':
            newState = {
                ...state,
                items: state.items.map((item: CartItem) => 
                    item.id === action.payload.id
                        ? {...item, quantity: action.payload.quantity}
                        : item
                ).filter((item: CartItem) => item.quantity > 0)
            }
            break;
        case 'CLEAR_CART':
            newState = { ...state, items: [] };
            break;
        default:
            return state;
    }
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(newState));
    }
    return newState;
}