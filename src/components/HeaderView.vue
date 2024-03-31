<template>
    <header>
        <div class="header-content">
            <img src="../assets/URFO_logo.png" alt="URFO Logo" class="logo">
            <div class="orchestra-name">UnRestrained Festival Orchestra</div>
        </div>
        <hr class="line-between"/>
        <nav>
            <ul>
                <li><a href="#">Concerts</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderView'
  };
  </script>
  
  <style scoped>
  header {
    background-color: #ffffff;
    color: black;
    padding: 10px 0;
  }
  
  .header-content {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .logo {
    max-width: 100px;
    height: auto;
  }
  
  .orchestra-name {
    font-size: 1.6em;
    font-weight: bold;
    margin-left: 20px; /* Adjust as needed */
  }

  nav{
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  nav ul li {
    margin-right: 45px;
  }
  
  nav ul li a {
    color: black;
    text-decoration: none;
  }
  
  nav ul li a:hover {
    text-decoration: underline;
  }

  .line-between {
    align-items: center;
    border: 1;
    height: 1px;
    background-color: white;
    width: 50%;
    margin: 10px 0;
  }
  </style>
  