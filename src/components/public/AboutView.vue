<template>
    <div class="about-container">
      <div class="section">
        <div class="section-title">Managers</div>
        <div class="person-grid">
          <div class="person-card" v-for="person in managers" :key="person.name">
            <img :src="getPoster(person, 'managers')" alt="Musician Poster" class="poster"/>
            <div class="name">{{ person.name }}</div>
            <div class="role">{{ person.role }}</div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-title">Conductors & Music Directors</div>
        <div class="person-grid">
            <div class="person-card" v-for="person in dac" :key="person.name" @click="navigateToEvent(person.to)">
            <img :src="getPoster(person, 'dac')" alt="Musician Poster" class="poster"/>
            <div class="name">{{ person.name }}</div>
            <div class="role">{{ person.role }}</div>
            <!-- <div class="bio">{{ person.bio }}</div> -->
            </div>
        </div>
      </div>
  
      <div class="section">
        <div class="section-title">Affiliated Musicians</div>
        <div class="person-grid">
          <div class="person-card" v-for="musician in afm" :key="musician.name">
            <img :src="getPoster(musician, 'afm')" alt="Musician Poster" class="poster">
            <div class="name">{{ musician.name }}</div>
            <div class="role">{{ musician.role }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import managers from '@/assets/about/managers/managers_en.json';
  import musicians from '@/assets/about/urfo/urfo_musicians_en.json';
  import directors_and_conductors from '@/assets/about/dac/directors_and_conductors_en.json';
  import affiliated_musicians from '@/assets/about/afm/affiliated_musicians_en.json';
  export default {
    name: 'AboutView',
    data() {
      return {
        dac: directors_and_conductors,
        musicians: musicians,
        afm: affiliated_musicians,
        managers: managers
      };
    },
    methods: {
      getPoster(person, type) {
        return require(`@/assets/about/${type}/${person.poster}`);
      },
      async navigateToEvent(to) {
        this.$router.push({ name: 'people', query: { person: to } });
      },
    }
  };
  </script>
  
  <style scoped>
  .about-container {
    margin: 2vh 2vw;
  }
  
  .section {
    margin-bottom: 4vh;
  }
  
  .section-title {
    font-size: 3vh;
    font-weight: bold;
    margin-bottom: 2vh;
    border-bottom: 0.2vh solid #000;
    padding-bottom: 1vh;
  }

  .poster {
    width: 10vw;
    height: auto;
    border-radius: 0.5vh;
    margin-bottom: 2vh;
  }
  
  .person-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
    gap: 2vw;
  }

  .person-card {
    background-color: #f4f4f4;
    padding: 1.5vh 1.5vw;
    border-radius: 0.5vh;
    box-shadow: 0 0.2vh 0.4vw rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  
  .person-card:hover {
    transform: translateY(-0.5vh);
  }
  
  .name {
    font-size: 2vh;
    font-weight: bold;
    margin-bottom: 1vh;
  }
  
  .person {
    margin-bottom: 1vh;
  }
  
  .role {
    font-size: 1.6vh;
  }

  .bio {
    font-size: 1.6vh;
    color: darkgrey;
  }
  </style>
  