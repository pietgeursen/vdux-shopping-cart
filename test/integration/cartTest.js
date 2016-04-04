var path = require('path');

module.exports = {
  'cart initialised with gold': function(browser) {
   browser
     .url( "file:" + path.join(__dirname, '../../' + './index.html') )
     .waitForElementVisible('h1', 1000) 
     .assert.containsText('.product', 'Gold')
     .end()
  },
  'Can view details of an item in the cart': function(browser) {
   browser
     .url( "file:" + path.join(__dirname, '../../' + './index.html') )
     .waitForElementVisible('h1', 1000) 
     .click('#productList:first-child a')
     .assert.containsText('#main .product', 'Detailed view of')
     .end()
  },
  'Adding an item to the cart increases the total': function(browser){
   var test = browser.assert
   var cartValue = 0
   browser
     .url( "file:" + path.join(__dirname, '../../' + './index.html') )
     .waitForElementVisible('h1', 1000) 
     .click('#productList:first-child a')
     .getText('.total .value', function(result) {
        cartValue = parseInt(result.value, 10) 
     })
     .click('button') 
     .getText('.total .value', function(result) {
       newCartValue = parseInt(result.value, 10) 
       test.ok(newCartValue > cartValue, 'Cart value has increased') 
     })
     .end()
    
  }
}
