<template>
    <div>
      <h2>Filmes</h2>
      <ul>
        <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Movies',
    data() {
      return {
        movies: [],
      };
    },
    mounted() {
      // Aqui você fará a requisição ao backend para pegar a lista de filmes
      axios.get('http://localhost:3000/movies')
        .then(response => {
          this.movies = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar filmes:', error);
        });
    },
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    background-color: #f3f4f6;
    margin: 5px 0;
    padding: 10px;
  }
  </style>
  