const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  env: {
    url: 'https://pet-shop.buckhill.com.hr',
   
    
  },
  
}})
