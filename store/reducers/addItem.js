import {
    DELETE_ITEM,
    CREATE_ITEM,
    UPDATE_ITEM,
    SET_ITEM
  } from '../actions/addItem';
  import item from '../../models/items';

  const initialState = {
    availableProducts: [],
    userProducts: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_ITEM: 
        return {
          availableProducts: action.products,
          userProducts: action.userProducts,
          
        };
      case CREATE_ITEM:
        const newProduct = new item(
          action.productData.id,
          action.productData.title,
          action.productData.price,
          action.productData.URI,
          action.productData.categoryId,
          action.productData.brandId,
          action.productData.description, 
          action.productData.userId, 
 
        );
        return {
          ...state,
          availableProducts: state.availableProducts.concat(newProduct),
          userProducts: state.userProducts.concat(newProduct)
        };
      case UPDATE_ITEM:
        const productIndex = state.userProducts.findIndex(
          prod => prod.id === action.pid
        );
        const updatedProduct = new item(
          action.pid,
          action.productData.title,
          action.productData.price,
          action.productData.URI,
          action.productData.categoryId,
          action.productData.brandId,
          action.productData.description, 
          action.productData.userId, 
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

      case DELETE_ITEM:
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
  