const inquirer = require("inquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key".green + "https://coinmarketcap.com",
        validate: isRequired,
      },
    ]);
    const key = keyManager.setKey(input.key);
    if (key) {
      console.log("API Key Set".blue);
    }
  },

  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("Current Api Key: ", key.yellow);
      return key;
    } catch (err) {
      console.log(err.message.red);
    }
  },

  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();
      console.log("Key removed".blue);
      return;
    } catch (err) {
      console.log(err.message.red);
    }
  },
};

module.exports = key;