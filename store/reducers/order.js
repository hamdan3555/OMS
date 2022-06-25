import {
    DELETE_ORDER,
    CREATE_ORDER,
    UPDATE_ORDER,
    SET_ORDER
  } from '../actions/order';
  import orders from '../../models/orders';

  const initialState = {
    availableProducts: [],
    userProducts: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_ORDER: 
        return {
          availableProducts: action.products,
          userProducts: action.userProducts,
          
        };
      case CREATE_ORDER:
        const newProduct = new orders(
          action.productData.id,
          action.productData.title,
          action.productData.price,
          action.productData.userId,
          action.productData.address, 
          action.productData.phone, 
          action.productData.quantity,
          action.productData.name, 
        );
        return {
          ...state,
          availableProducts: state.availableProducts.concat(newProduct),
          userProducts: state.userProducts.concat(newProduct)
        };
      case UPDATE_ORDER:
        const productIndex = state.userProducts.findIndex(
          prod => prod.id === action.pid
        );
        const updatedProduct = new orders(
          action.pid,
          action.productData.title,
          action.productData.price, 
          action.productData.userId,
          action.productData.address, 
          action.productData.phone, 
          action.productData.quantity,
          action.productData.name,
        );
        const updatedUserProducts = [...state.userProducts];
        updatedUserProducts[productIndex] = updatedProduct;
        const availableProductIndex = state.availableProducts.findIndex(
          prod => prod.id === action.pid
        );
        const updatedAvailableProducts = [...state.availableProducts];
        updatedAvailableProducts[availableProductIndex] = updatedProduct;
        return {
          ...state,
          availableProducts: updatedAvailableProducts,
          userProducts: updatedUserProducts
        };

      case DELETE_ORDER:
        return {
          ...state,
          userProducts: state.userProducts.filter(
            product => product.id !== action.pid
          ),
          availableProducts: state.availableProducts.filter(
            product => product.id !== action.pid
          )
        };
    }
    return state;
  };
  