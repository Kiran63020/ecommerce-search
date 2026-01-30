This project implements a backend microservice for searching and ranking products in a large-scale e-commerce catalog (electronics), with a strong focus on query understanding, relevance ranking, and performance.
The service is designed for scenarios where the product catalog can contain thousands to millions of items, and user queries may be noisy, incomplete, or informal (Hinglish).
In-memory product catalog (1000+ products)

key features:

*Inverted index for fast candidate retrieval
*Query understanding with:

*Hinglish intent (e.g. sasta, cheap)

*Price constraints (e.g. 50k)

*Color & storage filters

*Custom ranking algorithm combining:

*Ratings

*Sales/popularity

*Price sensitivity

*Stock availability

*REST APIs with graceful error handling

*Sub-second response time

Language: JavaScript (Node.js)

Framework: Express.js

Storage: In-memory (JavaScript Map)

Search Index: Inverted index (Map + Set)

Environment: Local development

Version Control: Git + GitHub

How to Run the Service

Prerequisites

Node.js v18+

npm

Clone the Repository

git clone https://github.com/<your-username>/ecommerce-search.git
cd ecommerce-search


Install Dependencies

npm install

Start the Server

node src/server.js

Expected startup output:

Bootstrap completed
Server running on port 3000

Verify the Service

Open a browser and visit:

http://localhost:3000/


Test Search API

GET /api/v1/search/product?query=<query>


Example queries:

/api/v1/search/product?query=iphone
/api/v1/search/product?query=Sasta Iphone
/api/v1/search/product?query=Iphone 16 red 50k


Sample response:

{
  "count": 10,
  "data": [
    {
      "productId": 120,
      "title": "Iphone 16",
      "price": 42000,
      "stock": 120,
      "metadata": {
        "color": "red",
        "storage": "128GB"
      }
    }
  ]
}



LLM link - https://chatgpt.com/share/697cbd03-2280-8003-a8b6-217ade206c7f
