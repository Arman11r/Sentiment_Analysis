// SentimentSphere - Frontend Application with Real API Integration
import { searchMovies as searchMoviesDB, moviesDatabase } from './moviesDatabase.js';

// === API CONFIGURATION ===

// Mathura, UP, India - Restaurant database
const ALL_RESTAURANTS = [
    {
        name: "Brijwasi Mithai Wala",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Indian Sweets & Snacks",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400",
        reviews: [
            "Best peda in Mathura! The quality and taste are unmatched. A must-visit for sweet lovers!",
            "Too crowded and overpriced. Quality has gone down over the years.",
            "Good sweets, especially the pedas. Nice variety and fresh products.",
            "Amazing traditional sweets! The milk cake is divine. Highly recommended!",
            "Average experience. There are better sweet shops in the area."
        ]
    },
    {
        name: "Shankar Mithai Wala",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Indian Sweets",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400",
        reviews: [
            "Excellent pedas and traditional sweets! Fresh and delicious every time.",
            "Good but a bit expensive. Quality is consistent though.",
            "Love their milk products. The rabri is absolutely wonderful!",
            "Great place for authentic Mathura sweets. Family favorite for years.",
            "Decent sweets but service could be better during peak hours."
        ]
    },
    {
        name: "Govardhan Thal Restaurant",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Pure Vegetarian North Indian",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
        reviews: [
            "Delicious sattvic food! The thali is amazing with great variety. Pure vegetarian and fresh.",
            "Good food but limited parking. Can get very crowded during lunch.",
            "Authentic North Indian vegetarian cuisine. The paneer dishes are excellent!",
            "Nice ambiance and tasty food. Perfect for family dining.",
            "Food quality is inconsistent. Sometimes excellent, sometimes just average."
        ]
    },
    {
        name: "Radha Rani Restaurant",
        location: "Mathura, Uttar Pradesh",
        cuisine: "North Indian Vegetarian",
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
        reviews: [
            "Simple and clean restaurant. Good vegetarian options at reasonable prices.",
            "Food is okay, nothing special. Service needs improvement.",
            "Best dosa and South Indian breakfast in Mathura! Highly recommended.",
            "Clean place with good food. The chole bhature are delicious!",
            "Average taste and slow service. Expected better quality."
        ]
    },
    {
        name: "The Brijbasi",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Multi-cuisine Restaurant & Cafe",
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
        reviews: [
            "Great ambiance and diverse menu! Perfect for casual dining with family.",
            "Decent food but portions are small for the price.",
            "Love their coffee and snacks. Nice place to hang out.",
            "Good variety of dishes. The pasta and pizza are surprisingly good!",
            "Service was slow but food quality was worth the wait."
        ]
    },
    {
        name: "Agarwal Restaurant",
        location: "Mathura, Uttar Pradesh",
        cuisine: "North Indian & Chinese",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
        reviews: [
            "Fantastic food! The dal makhani and naan are perfection. Highly recommend!",
            "Great Chinese food options. The chilli paneer is amazing!",
            "Clean and well-maintained. Staff is courteous and helpful.",
            "Best restaurant in Mathura for North Indian cuisine. Never disappoints!",
            "A bit pricey but worth it for special occasions. Quality is top-notch."
        ]
    },
    {
        name: "Kwality Restaurant",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Multi-cuisine Family Restaurant",
        rating: 3.9,
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400",
        reviews: [
            "Good variety of dishes. The butter chicken is excellent!",
            "Service needs improvement. Food took too long to arrive.",
            "Family-friendly place with reasonable prices. Kids loved it!",
            "Decent food but nothing extraordinary. Average dining experience.",
            "Clean restaurant with good ambiance. Will visit again!"
        ]
    },
    {
        name: "Cafe Coffee Day - Mathura",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Cafe & Beverages",
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400",
        reviews: [
            "Great coffee and cozy atmosphere. Perfect for studying or meetings.",
            "Love their cold coffee! Nice place to relax with friends.",
            "Good coffee but snacks are overpriced and not very fresh.",
            "Nice AC and comfortable seating. WiFi is reliable.",
            "Average coffee quality. There are better cafes in the area."
        ]
    },
    {
        name: "Domino's Pizza - Mathura",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Fast Food - Pizza",
        rating: 3.8,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
        reviews: [
            "Fast delivery and hot pizza! Quality is consistent as always.",
            "Good pizza but very expensive for what you get.",
            "Love the variety of toppings. Farmhouse pizza is my favorite!",
            "Sometimes the delivery is late and pizza arrives cold.",
            "Standard Domino's experience. Nothing special but reliable."
        ]
    },
    {
        name: "Sagar Ratna",
        location: "Mathura, Uttar Pradesh",
        cuisine: "South Indian Vegetarian",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400",
        reviews: [
            "Best South Indian food in Mathura! Dosas are crispy and perfect.",
            "Love their idli and sambhar. Very authentic taste!",
            "Filter coffee is excellent. Reminds me of Chennai!",
            "Great breakfast spot. Quick service and reasonable prices.",
            "Good food but can get crowded during weekends."
        ]
    },
    {
        name: "Haldiram's Restaurant",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Indian Vegetarian & Snacks",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
        reviews: [
            "Huge variety of snacks and sweets! Everything is fresh and tasty.",
            "The chaats are amazing! Must try the pani puri.",
            "Good quality food but a bit expensive compared to local shops.",
            "Clean and hygienic. Great for family dining.",
            "Love their packaged snacks. Restaurant food is good too!"
        ]
    },
    {
        name: "McDonald's - Mathura",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Fast Food - Burgers",
        rating: 3.7,
        image: "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?w=400",
        reviews: [
            "Quick service and clean restaurant. Kids love the happy meals!",
            "McAloo Tikki burger is always good. Reliable fast food option.",
            "Service is slow during peak hours. Long waiting time.",
            "Good place for quick bites. Value for money with combo meals.",
            "Standard McDonald's fare. Nothing exciting but satisfies cravings."
        ]
    },
    {
        name: "KFC - Mathura",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Fast Food - Chicken",
        rating: 3.9,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400",
        reviews: [
            "Crispy chicken is always delicious! Hot wings are my favorite.",
            "Good food but expensive for the portion size.",
            "Clean restaurant with good seating. Staff is friendly.",
            "Sometimes chicken is too oily. Inconsistent quality.",
            "Best fried chicken in Mathura. Love their zinger burger!"
        ]
    },
    {
        name: "Brijwasi Royal",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Fine Dining North Indian",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
        reviews: [
            "Exceptional dining experience! The ambiance and food are both world-class.",
            "Expensive but absolutely worth it. Best restaurant in Mathura!",
            "Their Rajasthani thali is outstanding. Every dish is perfect!",
            "Great service and beautiful interiors. Perfect for celebrations.",
            "Loved the live music and incredible food. Will definitely return!"
        ]
    },
    {
        name: "Punjabi Rasoi",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Punjabi Dhaba Style",
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400",
        reviews: [
            "Authentic Punjabi dhaba food! The parathas are amazing.",
            "Great lassi and butter chicken. Very filling portions!",
            "Love the rustic ambiance. Feels like a real Punjabi dhaba.",
            "Good food at reasonable prices. Highly recommended!",
            "Service could be faster but food quality makes up for it."
        ]
    },
    {
        name: "Moti Mahal",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Mughlai & Tandoor",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
        reviews: [
            "Best biryani in town! The mutton biryani is phenomenal.",
            "Excellent tandoori items. The kebabs are juicy and flavorful.",
            "Rich and authentic Mughlai cuisine. Must try the korma!",
            "Great food but service is sometimes slow. Be patient!",
            "Amazing non-veg options. Butter chicken is heavenly!"
        ]
    },
    {
        name: "Vrindavan Sweets & Restaurant",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Vegetarian Multi-cuisine",
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=400",
        reviews: [
            "Good combination of restaurant and sweet shop. Convenient!",
            "Their raj kachori is delicious. Good variety of chaats.",
            "Clean place with decent food. Sweets are fresh.",
            "Average food quality. Service needs improvement.",
            "Good for quick snacks and sweets. Restaurant is okay."
        ]
    },
    {
        name: "The Yellow Chilli",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Contemporary Indian",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1596040033229-a0b13b9e6db8?w=400",
        reviews: [
            "Innovative Indian cuisine! Chef Sanjeev Kapoor's recipes shine here.",
            "Upscale dining with excellent food quality. Worth every penny!",
            "Love their fusion dishes. The paneer tikka pizza is unique!",
            "Great ambiance and professional service. Perfect for dates!",
            "Bit expensive but the food and experience justify the price."
        ]
    },
    {
        name: "Subway - Mathura",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Fast Food - Sandwiches",
        rating: 3.8,
        image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400",
        reviews: [
            "Fresh and healthy option for fast food. Customization is great!",
            "Good sandwiches but small portions for the price.",
            "Clean restaurant with quick service. Veggie delite is my go-to!",
            "Sometimes they run out of bread. Quality is inconsistent.",
            "Decent option for a quick, light meal. Nothing extraordinary."
        ]
    },
    {
        name: "Pizza Hut - Mathura",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Fast Food - Italian",
        rating: 3.9,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
        reviews: [
            "Love their stuffed crust pizzas! Great variety of toppings.",
            "Good pasta and pizza. Family loved the meal!",
            "Service is slow sometimes. Pizza quality is good though.",
            "Overpriced compared to Domino's. Taste is similar.",
            "Nice ambiance and comfortable seating. Good for groups."
        ]
    },
    {
        name: "Mathura Chaat Corner",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Street Food & Chaat",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
        reviews: [
            "Best street food in Mathura! Gol gappe are incredible!",
            "Authentic chaat flavors. The aloo tikki is amazing!",
            "Fresh ingredients and great taste. Very affordable!",
            "Sometimes too crowded. Long waiting time during evenings.",
            "Love their dahi bhalla and papdi chaat. Must visit!"
        ]
    },
    {
        name: "Hotel Madhuvan Restaurant",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Hotel Dining - Multi-cuisine",
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400",
        reviews: [
            "Hotel restaurant with excellent breakfast buffet. Great variety!",
            "Professional service and clean environment. Good food quality.",
            "Convenient for hotel guests. Room service is prompt.",
            "Good but slightly overpriced. Hotel guest discount helps!",
            "Nice ambiance and comfortable seating. Good for business meals."
        ]
    },
    {
        name: "Brajwasi Pavitra Bhojnalaya",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Pure Sattvic Vegetarian",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400",
        reviews: [
            "Pure sattvic food for devotees. Simple and delicious!",
            "Clean and peaceful environment. Food is prepared with devotion.",
            "Best place for prasad-like food. No onion, no garlic options.",
            "Great thali with unlimited servings. Very affordable!",
            "Authentic temple-style food. Highly recommended for pilgrims!"
        ]
    },
    {
        name: "Chinese Dragon",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Chinese & Thai",
        rating: 3.8,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
        reviews: [
            "Good Chinese food! Manchurian and fried rice are tasty.",
            "Authentic flavors but service needs improvement.",
            "Love their Thai curry. Spice level is perfect!",
            "Overpriced for the quality. Expected better.",
            "Decent Chinese option in Mathura. Noodles are good!"
        ]
    },
    {
        name: "Krishna Cafe",
        location: "Mathura, Uttar Pradesh",
        cuisine: "Cafe & Light Bites",
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400",
        reviews: [
            "Cozy cafe with good coffee. Perfect spot for conversations!",
            "Love their sandwiches and shakes. WiFi is fast!",
            "Nice ambiance for work or study. AC and comfortable chairs.",
            "Coffee is average but snacks are good. Reasonable prices.",
            "Good place to hang out with friends. Relaxed atmosphere."
        ]
    }
];
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || '';
const OMDB_BASE_URL = 'https://www.omdbapi.com';
const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY || '';

const movieSearch = document.getElementById('movieSearch');
const movieSearchBtn = document.getElementById('movieSearchBtn');
const movieRecommendations = document.getElementById('movieRecommendations');
const moviesGrid = document.getElementById('moviesGrid');
const moviesLoading = document.getElementById('moviesLoading');

const locationInput = document.getElementById('locationInput');
const restaurantSearchBtn = document.getElementById('restaurantSearchBtn');
const restaurantRecommendations = document.getElementById('restaurantRecommendations');
const restaurantsGrid = document.getElementById('restaurantsGrid');
const restaurantsLoading = document.getElementById('restaurantsLoading');

const customText = document.getElementById('customText');
const analyzeCustomBtn = document.getElementById('analyzeCustomBtn');
const clearCustomBtn = document.getElementById('clearCustomBtn');
const customResults = document.getElementById('customResults');
const customSentimentDisplay = document.getElementById('customSentimentDisplay');
const customConfidence = document.getElementById('customConfidence');
const customConfidenceBar = document.getElementById('customConfidenceBar');
const customModelAgreement = document.getElementById('customModelAgreement');
const agreementValue = document.getElementById('agreementValue');
const agreementBar = document.getElementById('agreementBar');
const customChartContainer = document.getElementById('customChartContainer');
const customSentimentChart = document.getElementById('customSentimentChart');
let chartInstance = null;

const sentimentConfig = {
    positive: { icon: '😊', color: '#10b981' },
    negative: { icon: '😞', color: '#ef4444' },
    neutral: { icon: '😐', color: '#8b5cf6' }
};

document.addEventListener('DOMContentLoaded', () => {
    moviesGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Search for a movie to analyze reviews</p>';
    restaurantsGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Search for restaurants in Mathura</p>';

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    document.querySelectorAll('.sample-card').forEach(card => {
        card.addEventListener('click', () => {
            customText.value = card.dataset.text;
            customText.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
});

movieSearchBtn.addEventListener('click', searchMovies);
movieSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchMovies();
});

let recommendationTimeout;
movieSearch.addEventListener('input', () => {
    clearTimeout(recommendationTimeout);
    recommendationTimeout = setTimeout(() => {
        showRecommendations();
    }, 300);
});

document.addEventListener('click', (e) => {
    if (!movieSearch.contains(e.target) && !movieRecommendations.contains(e.target)) {
        hideRecommendations();
    }
});

movieSearch.addEventListener('focus', () => {
    if (movieSearch.value.trim()) {
        showRecommendations();
    }
});

let restaurantRecommendationTimeout;
locationInput.addEventListener('input', () => {
    clearTimeout(restaurantRecommendationTimeout);
    restaurantRecommendationTimeout = setTimeout(() => {
        showRestaurantRecommendations();
    }, 300); // Debounce for 300ms
});

// Hide restaurant recommendations when clicking outside
document.addEventListener('click', (e) => {
    if (!locationInput.contains(e.target) && !restaurantRecommendations.contains(e.target)) {
        hideRestaurantRecommendations();
    }
});

// Show recommendations when restaurant search is focused
locationInput.addEventListener('focus', () => {
    if (locationInput.value.trim()) {
        showRestaurantRecommendations();
    }
});

restaurantSearchBtn.addEventListener('click', searchRestaurants);
locationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        hideRestaurantRecommendations();
        searchRestaurants();
    }
});

analyzeCustomBtn.addEventListener('click', analyzeCustomText);
clearCustomBtn.addEventListener('click', () => {
    customText.value = '';
    customResults.classList.add('hidden');
    customChartContainer.classList.add('hidden');
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
});

// === MOVIE RECOMMENDATION FUNCTIONS ===
function showRecommendations() {
    const query = movieSearch.value.trim();

    if (!query) {
        hideRecommendations();
        return;
    }

    // Search in local database
    const matches = searchMoviesDB(query).slice(0, 8); // Show top 8 matches

    if (matches.length === 0) {
        movieRecommendations.innerHTML = '<div class="no-recommendations">No movies found. Try another search.</div>';
        movieRecommendations.classList.remove('hidden');
        return;
    }

    // Build recommendations HTML
    movieRecommendations.innerHTML = matches.map(movie => `
        <div class="recommendation-item" data-movie-title="${movie.title}" data-movie-id="${movie.id}">
            <div class="recommendation-poster" style="background: linear-gradient(135deg, var(--primary), var(--secondary));"></div>
            <div class="recommendation-info">
                <div class="recommendation-title">${movie.title}</div>
                <div class="recommendation-meta">
                    <span>${movie.year}</span>
                    <span>•</span>
                    <span class="recommendation-industry">${movie.industry}</span>
                    <span>•</span>
                    <div class="recommendation-rating">
                        <span>⭐</span>
                        <span>${movie.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    movieRecommendations.classList.remove('hidden');

    // Add click handlers to recommendation items
    movieRecommendations.querySelectorAll('.recommendation-item').forEach(item => {
        item.addEventListener('click', () => {
            const title = item.dataset.movieTitle;
            movieSearch.value = title;
            hideRecommendations();
            searchMovies();
        });
    });
}

function hideRecommendations() {
    movieRecommendations.classList.add('hidden');
}

// === MOVIE FUNCTIONS ===
async function searchMovies() {
    const query = movieSearch.value.trim();

    if (!query) {
        moviesGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Please enter a movie name to search</p>';
        return;
    }

    // Hide recommendations
    hideRecommendations();

    moviesLoading.classList.remove('hidden');
    moviesGrid.innerHTML = '';

    // First, check if movie exists in local database
    const localMatches = searchMoviesDB(query);

    if (localMatches.length > 0) {
        // Use local database movies
        try {
            for (const movie of localMatches.slice(0, 6)) {
                await processLocalMovie(movie);
            }
        } catch (error) {
            console.error('Error processing local movies:', error);
        } finally {
            moviesLoading.classList.add('hidden');
        }
        return;
    }

    // If not found locally, search TMDB
    try {
        const response = await fetch(
            `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`,
            { timeout: 10000 }
        );

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();

        if (data.results.length === 0) {
            moviesGrid.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No movies found for "${query}". Try another search.</p>`;
            return;
        }

        // Get first 6 results
        const movies = data.results.slice(0, 6);

        for (const movie of movies) {
            await processMovie(movie);
        }
    } catch (error) {
        console.error('Error searching movies:', error);
        moviesGrid.innerHTML = `
            <div style="text-align: center; color: var(--text-secondary); padding: 2rem;">
                <p>Unable to fetch movies. This might be due to:</p>
                <ul style="list-style: none; margin-top: 1rem;">
                    <li>• Network connectivity issues</li>
                    <li>• TMDB API rate limits</li>
                    <li>• API service unavailable</li>
                </ul>
                <p style="margin-top: 1rem;">Please try again later or check your internet connection.</p>
            </div>
        `;
    } finally {
        moviesLoading.classList.add('hidden');
    }
}

async function processLocalMovie(movie) {
    // Extract review texts from the movie object
    const reviewTexts = movie.reviews.map(r => r.text);

    // Analyze sentiment for each review
    const sentiments = await analyzeBatchSentiment(reviewTexts);

    // Calculate sentiment distribution
    const distribution = calculateSentimentDistribution(sentiments);

    // Create movie card with local data
    const card = createLocalMovieCard(movie, distribution, reviewTexts.length);
    moviesGrid.appendChild(card);
}

// Cache poster URLs to avoid duplicate API calls
const posterCache = {};

async function fetchOmdbPoster(title, year) {
    const cacheKey = `${title}_${year}`;
    if (posterCache[cacheKey] !== undefined) return posterCache[cacheKey];

    try {
        const query = `t=${encodeURIComponent(title)}${year ? `&y=${year}` : ''}&type=movie`;
        const res = await fetch(`${OMDB_BASE_URL}/?apikey=${OMDB_API_KEY}&${query}`);
        const data = await res.json();
        const url = (data.Response === 'True' && data.Poster && data.Poster !== 'N/A')
            ? data.Poster : null;
        posterCache[cacheKey] = url;
        return url;
    } catch {
        posterCache[cacheKey] = null;
        return null;
    }
}

function getMovieGradient(title) {
    // Deterministic gradient based on title — unique per movie
    let hash = 0;
    for (let i = 0; i < title.length; i++) hash = (hash * 31 + title.charCodeAt(i)) & 0xffffffff;
    const hue1 = Math.abs(hash) % 360;
    const hue2 = (hue1 + 40) % 360;
    return `linear-gradient(135deg, hsl(${hue1},60%,35%), hsl(${hue2},70%,20%))`;
}

function createLocalMovieCard(movie, distribution, reviewCount) {
    const card = document.createElement('div');
    card.className = 'review-card';

    const gradient = getMovieGradient(movie.title);
    const initial = movie.title.charAt(0).toUpperCase();
    const posterId = `poster-${movie.id}`;

    const ratingsHTML = `
        <div class="card-meta">
            <span>${movie.year}</span>
            <span>•</span>
            <span class="recommendation-industry">${movie.industry}</span>
            <span>•</span>
            <div class="rating">
                <span>⭐</span>
                <span>${movie.rating}/100</span>
            </div>
        </div>`;

    card.innerHTML = `
        <div class="card-header">
            <div id="${posterId}" class="card-image movie-poster-placeholder" style="background:${gradient}; display:flex; align-items:center; justify-content:center; flex-shrink:0; flex-direction:column; gap:0.2rem;">
                <span style="font-size:1.8rem; font-weight:800; color:rgba(255,255,255,0.9); line-height:1;">${initial}</span>
                <span style="font-size:0.55rem; color:rgba(255,255,255,0.5); text-transform:uppercase; letter-spacing:0.1em;">${movie.year}</span>
            </div>
            <div class="card-info">
                <h3 class="card-title">${movie.title}</h3>
                ${ratingsHTML}
                <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.25rem;">
                    By ${movie.director}
                </div>
            </div>
        </div>
        <div class="sentiment-summary">
            <div class="sentiment-label">${reviewCount} Reviews Analyzed</div>
            <div class="sentiment-bars">
                ${createSentimentBar('positive', distribution.positive)}
                ${createSentimentBar('negative', distribution.negative)}
                ${createSentimentBar('neutral', distribution.neutral)}
            </div>
        </div>
    `;

    // Async: fetch real poster and swap in with fade
    if (OMDB_API_KEY) {
        fetchOmdbPoster(movie.title, movie.year).then(url => {
            if (!url) return;
            const placeholder = document.getElementById(posterId);
            if (!placeholder) return;
            const img = document.createElement('img');
            img.src = url;
            img.alt = movie.title;
            img.className = 'card-image';
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.4s ease';
            img.onload = () => {
                placeholder.replaceWith(img);
                // Trigger reflow then fade in
                requestAnimationFrame(() => { img.style.opacity = '1'; });
            };
            img.onerror = () => {}; // keep placeholder on error
        });
    }

    return card;
}

async function processMovie(movie) {
    // Get Rotten Tomatoes rating from OMDb API
    const omdbData = await getRottenTomatoesRating(movie.title);

    // Get movie reviews
    const reviews = await getMovieReviews(movie.id);

    if (reviews.length === 0) {
        reviews.push(...generateSampleReviews());
    }

    // Analyze sentiment for each review
    const sentiments = await analyzeBatchSentiment(reviews);

    // Calculate sentiment distribution
    const distribution = calculateSentimentDistribution(sentiments);

    // Create movie card with OMDb data
    const card = createMovieCard(movie, distribution, reviews.length, omdbData);
    moviesGrid.appendChild(card);
}

async function getRottenTomatoesRating(movieTitle) {
    try {
        const response = await fetch(
            `${OMDB_BASE_URL}/?apikey=${OMDB_API_KEY}&t=${encodeURIComponent(movieTitle)}`
        );
        const data = await response.json();

        if (data.Response === 'True') {
            // Extract Rotten Tomatoes rating
            const rtRating = data.Ratings?.find(r => r.Source === 'Rotten Tomatoes');
            return {
                rottenTomatoes: rtRating ? rtRating.Value : null,
                imdbRating: data.imdbRating || null,
                metascore: data.Metascore || null
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching Rotten Tomatoes rating:', error);
        return null;
    }
}

async function getMovieReviews(movieId) {
    try {
        const response = await fetch(
            `${TMDB_BASE_URL}/movie/${movieId}/reviews?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();

        return data.results.slice(0, 10).map(review => review.content.substring(0, 500));
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return [];
    }
}

function generateSampleReviews() {
    return [
        "This movie was absolutely amazing! Great storyline and fantastic acting.",
        "Disappointing. Expected much better. The plot was predictable.",
        "It was okay. Some good moments but overall just average.",
        "Loved every minute! The cinematography was breathtaking.",
        "Not worth the hype. Pretty boring and slow-paced."
    ];
}

function createMovieCard(movie, distribution, reviewCount, omdbData) {
    const card = document.createElement('div');
    card.className = 'review-card';

    const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Poster';

    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
    const tmdbRating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

    // Build ratings HTML with Rotten Tomatoes
    let ratingsHTML = `
        <div class="card-meta">
            <span>${releaseYear}</span>
            <span>•</span>
            <div class="rating">
                <span>⭐</span>
                <span>${tmdbRating}</span>
            </div>`;

    if (omdbData && omdbData.rottenTomatoes) {
        ratingsHTML += `
            <span>•</span>
            <div class="rating" style="color: #fa320a;">
                <span>🍅</span>
                <span>${omdbData.rottenTomatoes}</span>
            </div>`;
    }

    ratingsHTML += '</div>';

    card.innerHTML = `
        <div class="card-header">
            <img src="${posterPath}" alt="${movie.title}" class="card-image">
            <div class="card-info">
                <h3 class="card-title">${movie.title}</h3>
                ${ratingsHTML}
            </div>
        </div>
        <div class="sentiment-summary">
            <div class="sentiment-label">${reviewCount} Reviews Analyzed</div>
            <div class="sentiment-bars">
                ${createSentimentBar('positive', distribution.positive)}
                ${createSentimentBar('negative', distribution.negative)}
                ${createSentimentBar('neutral', distribution.neutral)}
            </div>
        </div>
    `;

    return card;
}

// === RESTAURANT FUNCTIONS ===
function filterRestaurants() {
    const query = locationInput.value.trim().toLowerCase();

    if (!query) {
        restaurantsGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Type to search restaurants in Mathura</p>';
        return;
    }

    // Filter restaurants based on name or cuisine
    const filtered = ALL_RESTAURANTS.filter(restaurant =>
        restaurant.name.toLowerCase().includes(query) ||
        restaurant.cuisine.toLowerCase().includes(query) ||
        restaurant.location.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        restaurantsGrid.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No restaurants found matching "${query}"</p>`;
    } else {
        restaurantsGrid.innerHTML = '';
        filtered.forEach(restaurant => {
            // Use synchronous placeholder distribution for filter (no API call)
            const distribution = { positive: 60, negative: 20, neutral: 20 };
            const card = createRestaurantCard(restaurant, distribution);
            restaurantsGrid.appendChild(card);
        });
    }
}

// === RESTAURANT RECOMMENDATION FUNCTIONS ===
function showRestaurantRecommendations() {
    const query = locationInput.value.trim().toLowerCase();

    if (!query) {
        hideRestaurantRecommendations();
        return;
    }

    // Search in local restaurant database
    const matches = ALL_RESTAURANTS.filter(restaurant => {
        const nameMatch = restaurant.name.toLowerCase().includes(query);
        const cuisineMatch = restaurant.cuisine.toLowerCase().includes(query);
        const locationMatch = restaurant.location.toLowerCase().includes(query);
        return nameMatch || cuisineMatch || locationMatch;
    }).sort((a, b) => b.rating - a.rating).slice(0, 8); // Show top 8 matches

    if (matches.length === 0) {
        restaurantRecommendations.innerHTML = '<div class="no-recommendations">No restaurants found. Try another search.</div>';
        restaurantRecommendations.classList.remove('hidden');
        return;
    }

    // Build recommendations HTML
    restaurantRecommendations.innerHTML = matches.map(restaurant => `
        <div class="recommendation-item" data-restaurant-name="${restaurant.name}">
            <div class="recommendation-poster" style="background: linear-gradient(135deg, #f093fb, #f5576c);"></div>
            <div class="recommendation-info">
                <div class="recommendation-title">${restaurant.name}</div>
                <div class="recommendation-meta">
                    <span>${restaurant.cuisine}</span>
                    <span>•</span>
                    <div class="recommendation-rating">
                        <span>⭐</span>
                        <span>${restaurant.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    restaurantRecommendations.classList.remove('hidden');

    // Add click handlers to recommendation items
    restaurantRecommendations.querySelectorAll('.recommendation-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.dataset.restaurantName;
            locationInput.value = name;
            hideRestaurantRecommendations();
            searchRestaurants();
        });
    });
}

function hideRestaurantRecommendations() {
    restaurantRecommendations.classList.add('hidden');
}

async function searchRestaurants() {
    const query = locationInput.value.trim().toLowerCase();

    // Hide recommendations
    hideRestaurantRecommendations();

    restaurantsLoading.classList.remove('hidden');
    restaurantsGrid.innerHTML = '';

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
        // Filter restaurants based on search query
        let restaurants = ALL_RESTAURANTS;

        if (query) {
            restaurants = ALL_RESTAURANTS.filter(restaurant =>
                restaurant.name.toLowerCase().includes(query) ||
                restaurant.cuisine.toLowerCase().includes(query) ||
                restaurant.location.toLowerCase().includes(query)
            );
        }

        if (restaurants.length === 0) {
            restaurantsGrid.innerHTML = `
                <p style="text-align: center; color: var(--text-secondary); padding: 2rem;">
                    No restaurants found matching "${query}".<br>
                    Try searching for: "Brijwasi", "Shankar", "Govardhan", "Radha", or "Brijbasi"
                </p>
            `;
            return;
        }

        for (const restaurant of restaurants) {
            await processRestaurant(restaurant);
        }

        // Show result count
        if (query) {
            const resultMsg = document.createElement('p');
            resultMsg.style.cssText = 'text-align: center; color: var(--text-secondary); margin-bottom: 1rem;';
            resultMsg.textContent = `Found ${restaurants.length} restaurant${restaurants.length > 1 ? 's' : ''} in Mathura, UP`;
            restaurantsGrid.insertBefore(resultMsg, restaurantsGrid.firstChild);
        }

    } catch (error) {
        console.error('Error loading restaurants:', error);
        restaurantsGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">Failed to load restaurants. Please try again.</p>';
    } finally {
        restaurantsLoading.classList.add('hidden');
    }
}

async function processRestaurant(restaurant) {
    // Analyze sentiment for each review
    const sentiments = await analyzeBatchSentiment(restaurant.reviews);

    // Calculate sentiment distribution
    const distribution = calculateSentimentDistribution(sentiments);

    // Create restaurant card
    const card = createRestaurantCard(restaurant, distribution);
    restaurantsGrid.appendChild(card);
}

function createRestaurantCard(restaurant, distribution) {
    const card = document.createElement('div');
    card.className = 'review-card';

    card.innerHTML = `
        <div class="card-header">
            <img src="${restaurant.image}" alt="${restaurant.name}" class="card-image">
            <div class="card-info">
                <h3 class="card-title">${restaurant.name}</h3>
                <div class="card-meta">
                    <span>${restaurant.cuisine}</span>
                    <span>•</span>
                    <div class="rating">
                        <span>⭐</span>
                        <span>${restaurant.rating}</span>
                    </div>
                </div>
                <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.25rem;">
                    📍 ${restaurant.location}
                </div>
            </div>
        </div>
        <div class="sentiment-summary">
            <div class="sentiment-label">${restaurant.reviews.length} Reviews Analyzed</div>
            <div class="sentiment-bars">
                ${createSentimentBar('positive', distribution.positive)}
                ${createSentimentBar('negative', distribution.negative)}
                ${createSentimentBar('neutral', distribution.neutral)}
            </div>
        </div>
    `;

    return card;
}

// === SENTIMENT ANALYSIS FUNCTIONS ===
async function analyzeBatchSentiment(texts) {
    try {
        const response = await fetch(`${API_BASE_URL}/analyze-batch`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ texts: texts })
        });

        if (!response.ok) {
            throw new Error('Analysis failed');
        }

        const data = await response.json();

        // Extract sentiments from results
        return data.results.map(result => {
            // Get the first model's prediction
            const firstModelResult = Object.values(result.analysis)[0];
            return firstModelResult.sentiment;
        });
    } catch (error) {
        console.error('Sentiment analysis error:', error);
        // Return deterministic sentiments based on text hash to keep ratings consistent
        return texts.map(text => {
            let hash = 0;
            for (let i = 0; i < text.length; i++) {
                hash = (hash * 31 + text.charCodeAt(i)) & 0xffffffff;
            }
            const val = Math.abs(hash) % 100;
            if (val < 55) return 'positive';
            if (val < 80) return 'neutral';
            return 'negative';
        });
    }
}

function calculateSentimentDistribution(sentiments) {
    const total = sentiments.length;
    const counts = {
        positive: sentiments.filter(s => s === 'positive').length,
        negative: sentiments.filter(s => s === 'negative').length,
        neutral: sentiments.filter(s => s === 'neutral').length
    };

    return {
        positive: Math.round((counts.positive / total) * 100),
        negative: Math.round((counts.negative / total) * 100),
        neutral: Math.round((counts.neutral / total) * 100)
    };
}

function createSentimentBar(type, percentage) {
    return `
        <div class="sentiment-bar">
            <span class="sentiment-type ${type}">${type}</span>
            <div class="sentiment-progress">
                <div class="sentiment-fill ${type}" style="width: ${percentage}%"></div>
            </div>
            <span class="sentiment-percent">${percentage}%</span>
        </div>
    `;
}

// === CUSTOM TEXT ANALYSIS ===
async function analyzeCustomText() {
    const text = customText.value.trim();

    if (!text) {
        alert('Please enter some text to analyze');
        return;
    }

    analyzeCustomBtn.disabled = true;
    analyzeCustomBtn.innerHTML = '<div class="spinner-large" style="width: 20px; height: 20px; border-width: 2px; margin: 0 auto;"></div>';

    try {
        const response = await fetch(`${API_BASE_URL}/analyze`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: text })
        });

        if (!response.ok) {
            throw new Error('Analysis failed');
        }

        const data = await response.json();
        displayCustomResults(data.result);
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to analyze text. Make sure the backend server is running.');
    } finally {
        analyzeCustomBtn.disabled = false;
        analyzeCustomBtn.innerHTML = '<span>Analyze Sentiment</span>';
    }
}

function displayCustomResults(result) {
    const sentiment = result.sentiment;
    const confidence = result.confidence;
    const agreement = result.agreement;

    customResults.classList.remove('hidden');

    // Display sentiment badge
    const config = sentimentConfig[sentiment];
    customSentimentDisplay.innerHTML = `
        <div class="sentiment-badge ${sentiment}">
            <span style="font-size: 2rem;">${config.icon}</span>
            <span style="text-transform: capitalize;">${sentiment}</span>
        </div>
    `;

    // Display confidence
    const confidenceValue = Math.round(confidence * 100);
    customConfidence.textContent = `${confidenceValue}%`;
    customConfidenceBar.style.width = `${confidenceValue}%`;

    // Display agreement if available
    if (agreement !== undefined) {
        customModelAgreement.classList.remove('hidden');
        const agreementPercent = Math.round(agreement * 100);
        agreementValue.textContent = `${agreementPercent}%`;
        agreementBar.style.width = `${agreementPercent}%`;
    }

    // Prepare chart data based on average probabilities
    let avgProbs = { positive: 0, negative: 0, neutral: 0 };
    let modelCount = 0;
    
    if (result.individual_results) {
        for (const model in result.individual_results) {
            const probs = result.individual_results[model].probabilities;
            if (probs) {
                avgProbs.positive += probs['positive'] || 0;
                avgProbs.negative += probs['negative'] || 0;
                avgProbs.neutral += probs['neutral'] || 0;
                modelCount++;
            }
        }
    }

    // Default to the main sentiment if we couldn't compute probabilities
    if (modelCount === 0) {
        avgProbs[sentiment] = 1;
        modelCount = 1;
    }

    const dataPositive = Math.round((avgProbs.positive / modelCount) * 100);
    const dataNegative = Math.round((avgProbs.negative / modelCount) * 100);
    const dataNeutral = Math.round((avgProbs.neutral / modelCount) * 100);

    customChartContainer.classList.remove('hidden');

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(customSentimentChart, {
        type: 'pie',
        data: {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [{
                data: [dataPositive, dataNegative, dataNeutral],
                backgroundColor: [
                    sentimentConfig.positive.color,
                    sentimentConfig.negative.color,
                    sentimentConfig.neutral.color
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: getComputedStyle(document.body).getPropertyValue('--text-primary').trim() || '#ffffff',
                        font: {
                            family: 'Space Grotesk, sans-serif'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });

    // Scroll to results
    customResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Check backend health on load
window.addEventListener('load', async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        const data = await response.json();

        if (data.status === 'healthy' && data.analyzer_ready) {
            console.log('✓ Backend API is ready');
            console.log('✓ Rotten Tomatoes integration via OMDb API active');
            console.log('✓ Restaurant search with filtering enabled');
        } else {
            console.warn('⚠️ Backend API is running but models may not be loaded');
        }
    } catch (error) {
        console.warn('⚠️ Cannot connect to backend API. Some features may use simulated data.');
    }
});
