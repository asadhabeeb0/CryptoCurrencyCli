Node.js CLI For Cryptocurrency Prices dated Apr 3, 2020 of playlist Node.js Videos channeled Traversy Media

Command line interface written in Node.js to check cryptocurrency prices

Register an API key at https://coinmarketcap.com


Usage
npm install

npm link


Commands
# Help & Commands
coindex -h


# Version
coindex -V


# API Key Commands
coindex key set
coindex key show
coindex key remove


# Crypto Check Commands
coindex check price


# Check Specific Coins (default: BTN,ETH,XRP)
coindex check --coin=BTC,ETH


# Choose Currency (Default: USD)
coindex check --cur=EUR
