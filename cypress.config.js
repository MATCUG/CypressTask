const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env: {
    url: 'https://pet-shop.buckhill.com.hr',
    
  },
  
}})
