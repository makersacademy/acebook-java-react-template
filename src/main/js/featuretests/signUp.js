module.exports = {
  'Sign up page has content Sign Up!' : function (client) {
    client
      .url("http://localhost:8080/signup")
      .waitForElementVisible('body', 2000)
      .assert.containsText('body', 'Sign Up!')
    }
  }