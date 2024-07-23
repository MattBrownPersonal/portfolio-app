<!-- src/views/Todo.vue -->
<template>
  <div>
    <h1>To Do List</h1>
    <v-text-field
      type="text"
      v-model="newItem"
      class="text-white"
      label="New Item"
    ></v-text-field>
    <v-btn @click="addItem" class="text-none text-subtitle-1" color="#5865f2"
      >Add Item</v-btn
    >
    <div v-for="(item, index) in items" :key="index">
      <span>{{ item }}</span>
      <v-btn @click="removeItem(index)">Remove</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "ToDo",
  setup() {
    const items = ref(["Item One", "Item Two", "Item Three"]);
    const newItem = ref("");
    const addItem = () => {
      if (newItem.value.trim() !== "") {
        items.value.push(newItem.value);
        newItem.value = "";
      }
    };
    const removeItem = (index: number) => {
      items.value.splice(index, 1);
    };
    return { items, newItem, addItem, removeItem };
  },
};
</script>
