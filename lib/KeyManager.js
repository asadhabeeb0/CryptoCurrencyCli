const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const storedKey = this.conf.get("apiKey");
    if (!storedKey) {
      throw new Error(
        "No API Key Found - Get a key at https://coinmarketcap.com"
      );
    }
    return storedKey;
  }

  deleteKey() {
    const storedkey = this.conf.get("apiKey");
    if (!storedkey) {
      throw new Error(
        "No API Key Found - Get a key at https://coinmarketcap.com"
      );
    }
    this.conf.delete("apiKey");
    return;
  }
}

module.exports = KeyManager;
