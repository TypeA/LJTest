// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    getRandomDomain: async function () {
      this.amOnPage('https://www.livejournal.com/aab/custom_domains.txt');
      let domains = await this.grabTextFrom('pre');
      domains = domains.split('\n');
      const rnd = Math.floor(Math.random() * (domains.length-1));
      let selected = 'https://' + domains[rnd] + "/";
      return (selected);
    },

    dontSeeCreateAccountButton: function () {
      this.waitForInvisible(this.header.createNewAccountMenuItem);
      this.dontSeeElement(this.header.createNewAccountMenuItem);
    },


  });
}
