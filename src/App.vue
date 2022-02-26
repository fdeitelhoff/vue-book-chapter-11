<script setup>
import HelloWorld from './components/HelloWorld.vue';
import ShopStore from './components/ShopStore.vue';
import ShopStoreMapHelper from './components/ShopStoreMapHelper.vue';
import ShopStoreCompositionApi from './components/ShopStoreCompositionApi.vue';
import ShopPiniaStoreCompositionApi from './components/ShopPiniaStoreCompositionApi.vue';
</script>

<template>
  <ShopStore />
  <ShopStoreMapHelper />
  <ShopStoreCompositionApi />
  <ShopPiniaStoreCompositionApi />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
