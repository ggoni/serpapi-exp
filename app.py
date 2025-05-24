from flask import Flask, request, jsonify, send_from_directory
from serpapi import GoogleSearch
from dotenv import load_dotenv
import os

app = Flask(__name__)

# Load environment variables
load_dotenv()

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/styles.css')
def styles():
    return send_from_directory('.', 'styles.css')

@app.route('/script.js')
def script():
    return send_from_directory('.', 'script.js')

@app.route('/search', methods=['POST'])
def search():
    data = request.json
    location = data.get('location')
    search_term = data.get('searchTerm')

    params = {
        "api_key": os.getenv("SERPAPI_API_KEY"),
        "engine": "yelp",
        "find_loc": location,
        "find_desc": search_term
    }

    try:
        search = GoogleSearch(params)
        results = search.get_dict()
        return jsonify(results)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 