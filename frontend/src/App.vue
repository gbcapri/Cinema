<template>
  <div id="app">
    <h1>Bem-vindo ao Cinema</h1>
    <router-view />  <!-- Exibe o conteúdo da rota -->
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
