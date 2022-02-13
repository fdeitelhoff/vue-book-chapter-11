<template>
  <div>Alle Shop-Items: {{ shopItems }}</div>
  <div>Anzahl Shop-Items: {{ itemCount }}</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { ADD_SHOP_ITEM } from '../store/mutation-types';

export default {
  name: 'ShopStoreMapHelper',
  mounted() {
    console.log('shop store mounted:', this.$store, this.$store.state);

    // this.$store.commit(ADD_SHOP_ITEM, { id: 1, name: 'Neues Shop Item' });
    // this.$store.commit({
    //   type: ADD_SHOP_ITEM,
    //   item: { id: 1, name: 'Neues Shop Item' },
    // });

    // this.$store.dispatch('addShopItem', { id: 1, name: 'Neues Shop Item' });
    this.addItem({ id: 1, name: 'Neues Shop Item' });
  },
  computed: {
    ...mapState(['shopItems']),
    ...mapGetters({ itemCount: 'shopItemCount' }),
  },
  methods: {
    ...mapMutations(['ADD_SHOP_ITEM']),
    ...mapMutations({
      addItem: 'ADD_SHOP_ITEM',
    }),
    ...mapActions(['addShopItem']),
  },
};
</script>
