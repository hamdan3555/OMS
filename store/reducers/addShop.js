import {
    DELETE_SHOP,
    CREATE_SHOP,
    UPDATE_SHOP,
    SET_SHOP
  } from '../actions/addShop';
  import shops from '../../models/shops';

  const initialState = {
    availableProducts: [],
    userProducts: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_SHOP: 
        return {
          availableProducts: action.products,
          userProducts: action.userProducts,
          
        };
      case CREATE_SHOP:
        const newProduct = new shops(
          action.productData.id,
          action.productData.title,
          action.productData.address,
          action.productData.description,
          action.productData.userId, 
        );
        return {
          ...state,
          availableProducts: state.availableProducts.concat(newProduct),
          userProducts: state.userProducts.concat(newProduct)
        };
      case UPDATE_SHOP:
        const productIndex = state.userProducts.findIndex(
          prod => prod.id === action.pid
        );
        const updatedProduct = new shops(
          action.pid,
          action.productData.title,
          action.productData.address,
          action.productData.description,
          state.userProducts[productIndex].userId,
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

      case DELETE_SHOP:
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
  