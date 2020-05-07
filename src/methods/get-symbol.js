const request = require('../helpers/request');
const config = require('./config');

async function getSymbolCurrency(symbol) {
  let opt = {
    url: `${config.LINK}${symbol}-USD/sell`
  };
  let data = await (await request(opt)).data;
  return data;
}
module.exports = { getSymbolCurrency };
