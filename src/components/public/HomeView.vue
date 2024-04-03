<template>
    <div class="home-view">
        <img src="../../assets/poster/poster2023-copyright-crystal-cheng.png" alt="Unrestrained 2023, Copyright (C) Crystal Cheng 2023." class="poster-image">
    </div>
</template>

<style>
.home-view {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: auto;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
}

.poster-image {
    max-width: 100%;
    max-height: 100%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    opacity: 0; /* Initially hidden */
    animation: slideInFromTop 5s forwards;
    animation-name: slideInFromTop;
    animation-duration: 5s;
    margin-top: 1vh;
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1; /* Show image */
  }
}
</style>