<script setup lang="ts"></script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/tictactoe">Tic Tac Toe</router-link>
        </nav>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="10" offset="1" id="mainDiv">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.v-application {
  background-color: var(--v-background-base) !important;
}
.text-white {
  color: #ffffff !important;
}
</style>
