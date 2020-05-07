const request = require('../helpers/request');
const config = require('./config');
arrayCurrency = [ 'BTC', 'ETH', 'XRP', 'EOS' ];

async function getTopCurrency() {
  let arrayData = [];
  console.log(config.LINK);
  for (let i = 0; i < arrayCurrency.length; i++) {
    let opt = {
      url: `${config.LINK}${arrayCurrency[i]}-USD/sell`
    };
    let data = await (await request(opt)).data;
    arrayData.push(data);
  }
  return arrayData;
}
module.exports = { getTopCurrency };
