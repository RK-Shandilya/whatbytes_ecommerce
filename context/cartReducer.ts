import { CartState, CartAction, CartItem } from "@/types"; 

export const cartReducer = ( state: CartState, action: CartAction) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id == action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map((item: CartItem) => 
                        item.id === action.payload.id
                            ? {...item, quantity: item.quantity + 1}
                            : item
                    )
                }
            }
            else {
                return {
                    ...state,
                    items: [...state.items, {...action.payload, quantity: 1}]
                }
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter((item: CartItem) => item.id != action.payload)
            } 
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map((item: CartItem) => 
                    item.id === action.payload.id
                        ? {...item, quantity: action.payload.quantity}
                        : item
                ).filter((item: CartItem) => item.quantity > 0)
            }
        case 'CLEAR_CART':
            return { ...state, items: [] };
              
        default:
            return state;
    }
}