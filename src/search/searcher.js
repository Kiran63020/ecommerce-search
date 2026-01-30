const { index } = require("../index/invertedIndex");
const { products } = require("../store/productStore");

function searchCandidates(tokens) {
  const productIds = new Set();

  tokens.forEach(token => {
    if (index[token]) {
      index[token].forEach(id => productIds.add(id));
    }
  });

  return Array.from(productIds).map(id => products.get(id));
}

module.exports = searchCandidates;
