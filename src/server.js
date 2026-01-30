const express = require("express");
const app = express();

const { parseQuery } = require("./search/queryParser");
const searchCandidates = require("./search/searcher");
const rankProducts = require("./search/ranker");
const { addProduct } = require("./store/productStore");
const bootstrap = require("../data/bootstrap");

app.use(express.json());

bootstrap.loadProducts();

const { products } = require("./store/productStore");
console.log("Total products in memory:", products.size);


app.get("/", (req, res) => {
  res.json({ status: "Search service running" });
});

app.get("/api/v1/search/product", (req, res) => {
  try {
    const query = req.query.query;

    if (!query) {
      return res.status(400).json({ error: "query parameter is required" });
    }

    const { tokens, intent, filters } = parseQuery(query);
    let candidates = searchCandidates(tokens);

    if (filters.maxPrice) {
      candidates = candidates.filter(p => p.price <= filters.maxPrice);
    }

    if (filters.color) {
      candidates = candidates.filter(
        p => p.metadata?.color?.toLowerCase() === filters.color
      );
    }

    if (filters.storage) {
      candidates = candidates.filter(
        p => p.metadata?.storage === filters.storage
      );
    }

    const rankedProducts = rankProducts(candidates, intent);

    res.json({
      count: rankedProducts.length,
      data: rankedProducts.slice(0, 10)
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
