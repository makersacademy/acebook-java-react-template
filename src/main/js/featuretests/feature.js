module.exports = {
  'our very first feature' : function (client) {
    client
      .url("http://localhost:8080/")
      .waitForElementVisible('body', 2000)
      .waitForElementVisible('h1', 10000)
      .assert.containsText('body', 'Hey, folks! Welcome to Acebook!')

  }
}