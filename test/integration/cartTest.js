var path = require('path');

module.exports = {
  'cart initialised with gold': function(browser) {
   browser
     .url( "file:" + path.join(__dirname, '../../' + './index.html') )
     .waitForElementVisible('h1', 1000) 
     .assert.containsText('.product', 'Gold')
     .end()
  }
}
