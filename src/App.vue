<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>My Application</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-btn color="primary">Hello, Vuetify 3!</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-application {
  background-color: var(--v-background-base) !important;
}
</style>
