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



    default:
      return state;
  }
}
