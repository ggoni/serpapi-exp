# SerpAPI Yelp Search

This project demonstrates how to use SerpAPI to search for businesses on Yelp, with both a Python script and a web interface.

## Setup

1. Install the required packages:
```bash
pip install google-search-results python-dotenv flask
```

2. Create a `.env` file in the project root directory with your SerpAPI key:
```
SERPAPI_API_KEY=your_api_key_here
```

You can get a SerpAPI key by signing up at [serpapi.com](https://serpapi.com/).

## Usage

### Web Interface

1. Start the Flask server:
```bash
python app.py
```

2. Open your browser and navigate to `http://localhost:5000`

3. Use the web interface to:
   - Enter a location
   - Enter what you're looking for
   - Click "Search" to see results

### Python Script

The main script (`main.py`) demonstrates how to:
- Load environment variables using python-dotenv
- Configure SerpAPI parameters for Yelp search
- Execute the search and get results

### Example Parameters

```python
params = {
    "api_key": os.getenv("SERPAPI_API_KEY"),
    "engine": "yelp",
    "find_loc": "San Francisco, California",
    "find_desc": "tacos"
}
```

- `engine`: Specifies Yelp as the search engine
- `find_loc`: The location to search in
- `find_desc`: The search term or business type to look for

## Running the Script

For the Python script only:
```bash
python main.py
```

For the web interface:
```bash
python app.py
```

## Notes

- Make sure to keep your API key secure and never commit it to version control
- The `.env` file is included in `.gitignore` to prevent accidental commits
- You can modify the search parameters in `main.py` to search for different businesses or locations
- The web interface provides a user-friendly way to search and view results
