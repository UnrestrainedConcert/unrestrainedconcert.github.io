let isMobile = window.innerWidth <= 768;

window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
});

export { isMobile };