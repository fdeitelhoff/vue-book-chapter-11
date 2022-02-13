<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { ADD_SHOP_ITEM } from '../store/mutation-types';

const store = useStore();

const shopItems = computed(() => store.state.shopItems);
const shopItemCount = computed(() => store.getters.shopItemCount);

const addShopItem = (item) => store.commit('ADD_SHOP_ITEM', item);
const addShopItemAsync = (item) => store.dispatch('addShopItem', item);

const onAdd = () => {
  addShopItemAsync({ id: 1, name: 'Neues Shop Item' });
};
</script>

<template>
  <div>Alle Shop-Items: {{ shopItems }}</div>
  <div>Anzahl Shop-Items: {{ shopItemCount }}</div>
  <button @click="onAdd">Hinzufügen</button>
</template>
