

var date = new Date();

var modifiedDate = date.toISOString().substring(0,10);

module.exports = {
  'our very first feature' : function (client) {
    client
      .url("http://localhost:8080/")
      .waitForElementVisible('body', 2000)
      .waitForElementVisible('h1', 10000)
      .assert.containsText('body', 'Hey, folks! Welcome to Acebook!')

  },

  'testing date feature' : function (client) {
    client
      .url("http://localhost:8080/")
      .waitForElementVisible('div.post-content', 4000)
      .assert.containsText('div.post-content', 'yo - ' + modifiedDate)
      .assert.containsText('div.post-content:nth-child(2)', 'Hey, folks! Welcome to Acebook! - ' + modifiedDate)

  }

}