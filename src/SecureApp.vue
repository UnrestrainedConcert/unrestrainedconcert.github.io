<template>
    <div id="secure-app">
        <h1> HELLO WORLD! </h1>
        <ScoreCard />
        <!--<router-view />-->
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import ScoreCard from './components/secure/ScoreCard.vue';

  export default defineComponent({
    name: 'SecureApp',
    components: {
        ScoreCard
    }
  });
  </script>
  
  <style>
  
  @import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');
  
  .urfo-red {
    color: #b20000;
  }
  
  .urfo-orange {
    color: #ff6638;
  }
  
  .urfo-blue {
    color: #0032c9;
  }
  
  </style>