// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    getRandomDomain: async function () {
      this.amOnPage('https://www.livejournal.com/aab/custom_domains.txt');
      let a = await this.grabTextFrom('pre');
      a = a.replaceAll('\n','-------');
      console.log(a);

      return (a);
    },

    dontSeeCreateAccountButton: function () {
      this.waitForInvisible(this.header.createNewAccountMenuItem);
      this.dontSeeElement(this.header.createNewAccountMenuItem);
    },


  });
}
