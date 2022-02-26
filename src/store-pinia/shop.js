import { defineStore } from 'pinia';

export const useShopStore = defineStore('shop', {
  state: () => ({
    shopItems: ['', ''],
  }),
  getters: {
    getShopItems: (state) => {
      return state.shopItems;
    },
    shopItemCount: (state) => {
      return state.shopItems.length;
    },
  },
  actions: {
    addShopItem(item) {
      this.shopItems.push(item);
    },
  },
});

export default useShopStore;
