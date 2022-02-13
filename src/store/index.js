import { createStore } from 'vuex';
import { ADD_SHOP_ITEM } from './mutation-types';
import logPlugin from './plugins';

const store = createStore({
  strict: true,
  plugins: [logPlugin],
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
  mutations: {
    [ADD_SHOP_ITEM](state, item) {
      console.log(ADD_SHOP_ITEM, state, item);
      state.shopItems.unshift(item);
    },
  },
  actions: {
    addShopItem(context, item) {
      context.commit(ADD_SHOP_ITEM, item);
    },
  },
});

// import { createStore } from 'vuex';
// import getters from './getters';
// import mutations from './mutations';
// import actions from './actions';

// const store = createStore({
//   strict: true,
//   state: () => {
//     return {
//       shopItems: ['', ''],
//     };
//   },
//   getters,
//   mutations,
//   actions,
// });

export default store;
