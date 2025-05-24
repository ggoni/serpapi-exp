async function searchBusinesses() {
    const location = document.getElementById('location').value;
    const searchTerm = document.getElementById('searchTerm').value;
    const resultsDiv = document.getElementById('results');

    // Show loading state
    resultsDiv.innerHTML = '<div class="loading">Searching...</div>';

    try {
        const response = await fetch('/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                location: location,
                searchTerm: searchTerm
            })
        });

        const data = await response.json();

        if (data.error) {
            resultsDiv.innerHTML = `<div class="error">${data.error}</div>`;
            return;
        }

        // Display results
        if (data.organic_results && data.organic_results.length > 0) {
            // Sort results by rating in descending order
            const sortedResults = data.organic_results.sort((a, b) => {
                const ratingA = parseFloat(a.rating) || 0;
                const ratingB = parseFloat(b.rating) || 0;
                return ratingB - ratingA;
            });

            const resultsHTML = sortedResults.map(business => `
                <div class="business-card">
                    <div class="business-name">
                        ${business.title}
                        ${business.rating ? `<span class="rating">★ ${business.rating}</span>` : ''}
                    </div>
                    <div class="business-info">
                        ${business.snippet}
                        ${business.reviews ? `<br>Reviews: ${business.reviews}` : ''}
                    </div>
                </div>
            `).join('');
            resultsDiv.innerHTML = resultsHTML;
        } else {
            resultsDiv.innerHTML = '<div class="error">No results found</div>';
        }
    } catch (error) {
        resultsDiv.innerHTML = '<div class="error">An error occurred while searching</div>';
        console.error('Error:', error);
    }
} 