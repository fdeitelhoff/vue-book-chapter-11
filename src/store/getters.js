const getShopItems = (state) => {
  return state.shopItems;
};

const shopItemCount = (state) => {
  return state.shopItems.length;
};

export default {
  getShopItems,
  shopItemCount,
};
