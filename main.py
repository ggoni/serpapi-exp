from serpapi import GoogleSearch
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

params = {
    "api_key": os.getenv("SERPAPI_API_KEY"),
    "engine": "yelp",
    "find_loc": "San Francisco, California",  # Changed back to find_loc
    "find_desc": "tacos"  # Changed back to find_desc
}

search = GoogleSearch(params)
results = search.get_dict()

# Optional: Print results to verify
print(results)