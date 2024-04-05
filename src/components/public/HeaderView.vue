<template>
    <header v-if="!isMobile" class="desktop">
      <div class="header-content" @click="clickedIndex=-1">
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
      <div class="separate-line desktop">
          <hr class="line-between">
      </div>
      <div class="nav-container">
        <nav>
            <ul class="left">
              <li 
                v-for="(item, index) in leftHeaderItems" 
                :key="index*2+1"
                @mouseover="headerItemEnhover($event)" 
                @mouseout="headerItemDehover($event)"
                @click="clickedIndex = index*2+1"
                class="item-left"
                :class="{
                  'last': index === leftHeaderItems.length - 1,
                  // 'current': clickedIndex === index*2+1,
                  // 'protest-guerrilla-regular': clickedIndex === index*2+1
                }">    <!-- last item does not have right margin -->
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
              @click="clickedIndex = index*2"
              class="item-right"
              :class="{
                'last': index === rightHeaderItems.length - 1,
                // 'current': clickedIndex === index*2,
                // 'protest-guerrilla-regular': clickedIndex === index*2
              }">    <!-- last item does not have right margin -->
              <router-link :to="item.to">{{ item.label }}</router-link>
              <!--<a href="#">{{ item }}</a>-->
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <header v-else class="mobile">
      <div class="mobile-header-top">
        <button class="menu-button" @click="toggleDropdown">
          <img class="icon-img" src="@/assets/icons/menu-svgrepo-com.svg" alt="Menu Icon" />
        </button>
        <div class="mobile-urfo">
          <span class="big-oname" v-show="!showDropdown">URFO</span>
          <span class="small-oname" v-show="showDropdown">Unrestrained Festival Orchestra</span></div>
      </div>
      <div class="nav-container" v-show="showDropdown">
        <!-- Left navigation items -->
        <!-- Right navigation items -->
        <nav v-if="isMobile">
        <ul class="dropdown-menu" v-show="showDropdown">
          <li @click="toggleDropdown" class="dropdown-item" v-for="(item, index) in dropdownHeaderItems" :key="index" v-show="showDropdown">
            <router-link :to="item.to">{{ item.label }}</router-link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
    <div style="height:6vh; width:100vw; clear:both;" v-if="isMobile"></div>
  </template>
  
  <script>
  import { isMobile } from '@/global.js';
  export default {
    name: 'HeaderView',
    data() {
      return {
        // to add more tabs, edit here:
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
        ],
        dropdownHeaderItems: [
          { label: 'What\'s on', to: '/whatson' },
          { label: 'About', to: '/about' },
          { label: 'Events', to: '/events' },
          { label: 'Support', to: '/support' },
          { label: 'FAQ', to: '/faq' },
          { label: 'Contact', to: '/contact' },
          { label: 'Library', to: '/library' },
          { label: 'Secure', to: '/secret' }
        ],
        clickedIndex: -1,
        isMobile: isMobile,
        showDropdown: false,
      };
    },
    mounted() {
      // watch for changes in the isMobile variable
      window.addEventListener('resize', () => {
        this.isMobile = isMobile;
      });
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      headerItemEnhover(event) {
        event.target.classList.add('protest-guerrilla-regular');
      },
      headerItemDehover(event) {
        event.target.classList.remove('protest-guerrilla-regular');
      }
      // highlight the route-menu when clicked

    }
  };
  </script>
  
  <style scoped>
  header {
    background-color: #ffffff;
    color: #000000;
    align-items: center;
    /* horizontally center */
    user-select: none;
    height: auto;
  }

  header.desktop {
    width: 90vw;
    margin: 0 auto;
    padding: 10px 0;
  }

  header.mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 0;
  }

  .icon-img {
    width: 7.5vw;
    height: 3.5vh;
    margin-top: auto;
    margin-bottom: auto;
  }

  .mobile-header-top {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    height: 6vh;
  }

  .mobile-urfo {
    font-family: "Times New Roman", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-top: auto;
    margin-bottom: auto;
  }

  .big-oname {
    font-size: 3.5vh;
    margin-left: 5vw;
  }
  .small-oname {
    font-size: 2.5vh;
    margin-left: 2.5vw;
  }

  .menu-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    margin-left: 5vw;
    margin-right: 1vw;
    padding: 0;
    text-align: center;
    width: 7.5vw;
    height: 5vh;
    margin-top: auto;
    margin-bottom: auto;
  }

  .dropdown-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dropdown-item {
    font-size: 2.5vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-left: 4vh;
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
  }

  .separate-line.desktop {
    margin-bottom: 1.5vh;
  }

  .separate-line.mobile {
    margin-bottom: 0vh;
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
    margin-bottom: 1vh;
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
    color: #000000;
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
  