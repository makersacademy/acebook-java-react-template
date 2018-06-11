module.exports = {
  'Sign up page has content Sign Up!' : function (client) {
    client
      .url("http://localhost:8080/signup")
      .waitForElementVisible('div.span3', 2000)
      .assert.containsText('body', 'Sign Up')
    },

   'Can fill in form' : function (client){
   client
      .url("http://localhost:8080/signup")
      .waitForElementVisible('div.span3', 2000)
      .setValue('input.first-name', "Luke")
      .setValue('input.last-name', "Sky Walker")
      .setValue('input.email', "luke@jedi.com")
      .setValue('input.password', "yoda11")
      .click('input.submit')
   }
  }