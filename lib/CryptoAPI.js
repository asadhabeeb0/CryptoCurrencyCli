const axios = require("axios");
const colors = require("colors");
class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL =
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
  }
  async getPriceData(coinOption, curOption) {
    try {
      const headers = {
        "X-CMC_PRO_API_KEY": this.apiKey,
      };
      const res = await axios.get(
        `${this.baseURL}?convert=${curOption}&start=1&limit=5&sort=market_cap&sort_dir=desc`,
        { headers }
      );
      let output = "";
      res.data.data.forEach((coin) => {
        output += `Coin: ${colors.yellow(coin.symbol)} (${
          coin.name
        }) | Price: ${colors.green(coin.quote.USD.price)} | Rank: ${colors.blue(
          coin.cmc_rank
        )}\n`;
      });
      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error(
      "Your API key is invalid -- Go to https://coinmarketcap.com"
    );
  } else if (err.response.status === 404) {
    throw new Error("Your API is not responding");
  } else {
    throw new Error("Something is not working");
  }
}

module.exports = CryptoAPI;
