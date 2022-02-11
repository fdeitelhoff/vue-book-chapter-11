<template>
  <div>Anzahl Shop-Items: {{ shopItemCount }}</div>
</template>

<script>
export default {
  name: 'ShopStore',
  mounted() {
    console.log('shop store mounted:', this.$store, this.$store.state);
  },
  computed: {
    shopItemCount() {
      return this.$store.getters.shopItemCount;
    },
  },
};
</script>
