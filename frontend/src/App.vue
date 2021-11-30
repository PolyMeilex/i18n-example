<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ $t("Hello World") }}</p>


    <button @click="loadLanguageAsync('ru')">Ru</button>
    <button @click="loadLanguageAsync('pl')">Pl</button>
  </div>
</template>

<script>
import { loadLanguageAsync } from "./i18n";

export default {
  name: 'App',
  methods: {
    loadLanguageAsync
  },
}
</script>

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
