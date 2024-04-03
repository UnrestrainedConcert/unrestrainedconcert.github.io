<template>
    <header>
      <div class="header-content">
          <router-link to="/" class="orchestra-content">
            <div class="orchestra-content">
                <img src="../../assets/URFO_logo.png" alt="URFO Logo" class="logo">
                    <div class="orchestra-name lobster-regular ur">
                      <div class="urfo-red">Un</div>
                      <div class="urfo-orange">restrained</div>
                      &nbsp;Festival Orchestra
                    </div>
            </div>
          </router-link>
          <div class="year lobster-regular">
            <div class="urfo-orange">2024</div>.<div class="urfo-red">8</div>
          </div>
      </div>
      <div class="separate-line">
          <hr class="line-between">
      </div>
      <div class="nav-container">
        <nav>
            <ul class="left">
              <li 
                v-for="(item, index) in leftHeaderItems" 
                :key="index" 
                @mouseover="headerItemEnhover($event)" 
                @mouseout="headerItemDehover($event)" 
                :class="{ 'last': index === leftHeaderItems.length - 1 }">
                <router-link :to="item.to">{{ item.label }}</router-link>
                <!--<a href="#">{{ item }}</a>-->
              </li>
            </ul>
        </nav>
        <nav>
          <ul class="right">
            <li 
              v-for="(item, index) in rightHeaderItems" 
              :key="index" 
              @mouseover="headerItemEnhover($event)" 
              @mouseout="headerItemDehover($event)"
              :class="{ 'last': index === rightHeaderItems.length - 1 }">
              <router-link :to="item.to">{{ item.label }}</router-link>
              <!--<a href="#">{{ item }}</a>-->
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderView',
    data() {
      return {
        
      leftHeaderItems: [
        { label: 'What\'s on', to: '/whatson' },
        { label: 'About', to: '/about' },
        { label: 'Events', to: '/events' },
        { label: 'Support', to: '/support' },
        { label: 'FAQ', to: '/faq' }
      ],
      rightHeaderItems: [
        { label: 'Contact', to: '/contact' },
        { label: 'Library', to: '/library' },
        { label: 'Secure', to: '/secret' }
      ]
      };
    },
    methods: {
      headerItemEnhover(event) {
        event.target.classList.add('protest-guerrilla-regular');
      },
      headerItemDehover(event) {
        event.target.classList.remove('protest-guerrilla-regular');
      }
    }
  };
  </script>
  
  <style scoped>
  header {
    background-color: #ffffff;
    color: black;
    padding: 10px 0;
    width: 90vw;
    align-items: center;
    /* horizontally center */
    margin: 0 auto;
    user-select: none;
    height: auto;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
  }

  .orchestra-content {
    color: inherit; /* Use the parent's color for the text */
    text-decoration: inherit; /* Use the parent's text decoration */
    display: flex;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    width: 70%;
    float: left;
    margin-right: auto;
  }

  .year {
    font-size: min(min(60px, 8vh), 4vw);
    /*font-weight: 900;*/
    float: right;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    display: flex;
  }

  .protest-guerrilla-regular {
    font-family: "Protest Guerrilla", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  
  .lobster-regular {
    font-family: "Lobster", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .separate-line {
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
  }
  
  .logo {
    max-width: 100px;
    width: 15vh;
    height: auto;
  }
  
  .orchestra-name {
    display: flex;
    font-size: min(3.5vh, 2.5vw);
    font-weight: bold;
    margin-left: 1.35vw; /* Adjust as needed */
  }

  .ur {
    font-size: min(4vh, 3vw);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    font-size: 2.5vh;
    width: 100%;
    margin: 0 auto;
  }

  nav{
    display: flex;
    margin-top: 1vh;
    font-size:2.5vh;
    justify-content: space-between;
    width: 50%;
  }

  ul.left{
    float: left;
    margin-right: auto;
  }

  ul.right{
    float: right;
    margin-left: auto;
  }

  nav ul{
    list-style-type: none;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0;
    display: flex;
  }
  
  nav ul li {
    margin-right: 3vw;
    font-family: "Times New Roman", Times, serif;
  }

  nav ul li.last {
    margin-right: 0;
  }
  
  nav ul li a {
    color: black;
    text-decoration: none;
  }
  
  nav ul li a:hover {
    color: #b20000;
    font-weight: bold;
  }

  nav ul.right li a:hover {
    color: #ff6600;
    font-weight: bold;
  }

  .line-between {
    align-items: center;
    border: 1;
    height: 1px;
    background-color: white;
    width: 100%;
    margin: auto;
  }
  </style>
  