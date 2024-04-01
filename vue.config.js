const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html',
    },
    secure: {
        entry: 'src/secure.js',
        template: 'public/secure.html',
        filename: 'secure.html',
    },
  }
})