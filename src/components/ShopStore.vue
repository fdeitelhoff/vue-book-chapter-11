<template>
  <div>Anzahl Shop-Items: {{ shopItemCount }}</div>
</template>

<script>
import { ADD_SHOP_ITEM } from '../store/mutation-types';

export default {
  name: 'ShopStore',
  mounted() {
    console.log('shop store mounted:', this.$store, this.$store.state);

    // this.$store.commit(ADD_SHOP_ITEM, { id: 1, name: 'Neues Shop Item' });
    // this.$store.commit({
    //   type: ADD_SHOP_ITEM,
    //   item: { id: 1, name: 'Neues Shop Item' },
    // });

    this.$store.dispatch('addShopItem', { id: 1, name: 'Neues Shop Item' });
  },
  computed: {
    shopItemCount() {
      return this.$store.getters.shopItemCount;
    },
  },
};
</script>
