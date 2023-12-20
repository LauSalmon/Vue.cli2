<script setup>
import PokemonList from './components/pokemonList.vue'
</script>

<template>
  <h1>Bienvenue sur la page des Pokémons</h1>
  <router-link to="/" class="nav-link m-2" href="#">Pokemon</router-link>
  <pokemon-list> </pokemon-list>
</template>


<style>
body {
  background-color : #333;
  color :rgb(245, 230, 202);
}

h1 {
  text-align : center;
}
</style>
