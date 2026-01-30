function parseQuery(query) {
  const q = query.toLowerCase();

  const intent = {};
  const filters = {};

  if (q.includes("sasta") || q.includes("sastha") || q.includes("cheap")) {
    intent.price = "low";
  }

  if (q.includes("mehenga") || q.includes("expensive")) {
    intent.price = "high";
  }

  if (q.includes("latest") || q.includes("new")) {
    intent.latest = true;
  }

  const priceMatch = q.match(/(\d+)\s?k/);
  if (priceMatch) {
    filters.maxPrice = parseInt(priceMatch[1]) * 1000;
  }

  const rupeeMatch = q.match(/(\d{4,6})/);
  if (rupeeMatch) {
    filters.maxPrice = parseInt(rupeeMatch[1]);
  }

  const colors = ["red", "black", "white", "blue", "green"];
  for (const color of colors) {
    if (q.includes(color)) {
      filters.color = color;
      break;
    }
  }

  const storageMatch = q.match(/(\d+)\s?gb/);
  if (storageMatch) {
    filters.storage = storageMatch[1] + "GB";
  }

  const tokens = q
    .replace(/[^a-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean);

  return { tokens, intent, filters };
}

module.exports = { parseQuery };
