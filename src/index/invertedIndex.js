const index = {};

function tokenize(text) {
  return text.toLowerCase().match(/[a-z0-9]+/g) || [];
}

function indexProduct(product) {
  const text = product.title + " " + product.description;
  tokenize(text).forEach(token => {
    if (!index[token]) index[token] = new Set();
    index[token].add(product.productId);
  });
}

module.exports = {
  index,
  indexProduct
};
