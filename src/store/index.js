import { createStore } from 'vuex';

const store = createStore({
  strict: true,
  state: () => {
    return {
      shopItems: ['', ''],
    };
  },
  getters: {
    getShopItems(state) {
      return state.shopItems;
    },
    shopItemCount(state) {
      return state.shopItems.length;
    },
  },
});

export default store;
