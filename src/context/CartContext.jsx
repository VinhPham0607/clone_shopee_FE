import { createContext, useReducer } from "react";

const initialCartState = {
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      const { products } = action.payload;
      return {
        ...state,
        products,
      };
    }
    case "ADD_PRODUCT":
      const { product, quantity } = action.payload;
      if (state.items.find((el) => el.product.id === product.id)) {
        return {
          ...state,
          items: state.items.map((el) => {
            if (el.product.id === product.id) {
              return {
                ...el,
                quantity: el.quantity + quantity,
              };
            }
            return el;
          }),
        };
      } else {
        return {
          ...state,
          items: state.items.concat([
            {
              product,
              quantity,
            },
          ]),
        };
      }
    case "REMOVE_PRODUCT": {
      const { product } = action.payload;
      return {
        ...state,
        items: state.items.filter((el) => el.product.id !== product.id),
      };
    }
    case "REMOVE_PRODUCT_QUANTITY": {
      const { product, quantity } = action.payload;
      if (state.items.find((el) => el.product.id === product.id)) {
        const item = state.items.find((el) => el.product.id === product.id);
        if (item.quantity - quantity >= 1) {
          return {
            ...state,
            items: state.items.map((el) => {
              if (el.product.id === product.id) {
                return {
                  ...el,
                  quantity: el.quantity - quantity,
                };
              }
              return el;
            }),
          };
        } else {
          return {
            ...state,
            items: state.items.filter((el) => el.product.id !== product.id),
          };
        }
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

const CartContext = createContext({
  ...initialCartState,
  method: "Cart",
  addProduct: () => {},
  removeProduct: () => {},
  removeProductQuantity: () => {}
});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialCartState);

  const addProduct = (product, quantity) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        product,
        quantity
      },
    });
  };
  
  const removeProductQuantity = (product, quantity) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        product,
        quantity
      },
    });
  };

  const removeProduct = (product) => {
    dispatch({
      type: "REMOVE_PRODUCT_QUANTITY",
      payload: {
        product,
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        method: "Cart",
        addProduct,
        removeProduct,
        removeProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
