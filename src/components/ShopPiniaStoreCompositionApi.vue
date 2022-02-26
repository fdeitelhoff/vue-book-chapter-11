<script setup>
import { useShopStore } from '../store-pinia/shop';
import { storeToRefs } from 'pinia';

const shop = useShopStore();

const { shopItems, getShopItems, shopItemCount } = storeToRefs(shop);

const onAdd = () => {
  shop.addShopItem({ id: 1, name: 'Neues Shop Item' });
};
</script>

<template>
  <div>Alle Shop-Items: {{ shopItems }}</div>
  <div>Anzahl Shop-Items: {{ shopItemCount }}</div>
  <button @click="onAdd">Hinzufügen</button>
</template>
