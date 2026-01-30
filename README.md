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

LLM link - https://chatgpt.com/share/697cbd03-2280-8003-a8b6-217ade206c7f
