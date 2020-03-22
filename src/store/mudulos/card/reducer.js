export default function cart(state = [], action) {
  console.log(state);
  switch (action.type) {
    case 'ADD_TO_CART':
      let productIndex = state.findIndex(p => p.id === action.product.id);
      if(productIndex >= 0) {
        let products = state;
        products[productIndex].amount += 1;
        return [...products];
      } else {
        return [...state, {
          ...action.product,
          amount: 1,
        }];
      }

    case 'REMOVE_FROM_CART':
      let index = state.findIndex(p => p.id === action.id);
      if(index >= 0) {
        let products = state;
        products.splice(index, 1);
        return [...products];
      }

    default:
      return state;
  }
}
