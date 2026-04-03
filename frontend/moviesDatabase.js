// SentimentSphere - Comprehensive Movie Database
// Hollywood & Bollywood Movies with Reviews

export const moviesDatabase = [
    // ===== HOLLYWOOD BLOCKBUSTERS =====
    {
        id: 'inception',
        title: 'Inception',
        year: 2010,
        rating: 87,
        genre: ['Sci-Fi', 'Thriller', 'Action'],
        director: 'Christopher Nolan',
        cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        posterSearch: 'inception movie poster',
        reviews: [
            { text: 'A masterpiece of modern cinema', sentiment: 'positive', author: 'Roger Ebert', source: 'Critics' },
            { text: 'Mind-bending and brilliant', sentiment: 'positive', author: 'Peter Travers', source: 'Critics' },
            { text: 'Absolutely stunning visual effects', sentiment: 'positive', author: 'John Smith', source: 'Audience' }
        ],
        audienceScore: 91,
        criticsScore: 87,
        industry: 'Hollywood'
    },
    {
        id: 'interstellar',
        title: 'Interstellar',
        year: 2014,
        rating: 86,
        genre: ['Sci-Fi', 'Drama', 'Adventure'],
        director: 'Christopher Nolan',
        cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
        posterSearch: 'interstellar movie space',
        reviews: [
            { text: 'Visually spectacular and emotionally powerful', sentiment: 'positive', author: 'James Cameron', source: 'Critics' },
            { text: 'A journey through space and time', sentiment: 'positive', author: 'Sarah Lee', source: 'Audience' },
            { text: 'Outstanding performances', sentiment: 'positive', author: 'Mark Davis', source: 'Critics' }
        ],
        audienceScore: 86,
        criticsScore: 73,
        industry: 'Hollywood'
    },
    {
        id: 'titanic',
        title: 'Titanic',
        year: 1997,
        rating: 88,
        genre: ['Romance', 'Drama', 'History'],
        director: 'James Cameron',
        cast: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
        posterSearch: 'titanic movie ship',
        reviews: [
            { text: 'Epic romance and tragedy beautifully told', sentiment: 'positive', author: 'Lisa Anderson', source: 'Critics' },
            { text: 'Unforgettable love story', sentiment: 'positive', author: 'Mike Johnson', source: 'Audience' },
            { text: 'Masterful direction by James Cameron', sentiment: 'positive', author: 'Film Review', source: 'Critics' }
        ],
        audienceScore: 88,
        criticsScore: 88,
        industry: 'Hollywood'
    },
    {
        id: 'avatar',
        title: 'Avatar',
        year: 2009,
        rating: 82,
        genre: ['Sci-Fi', 'Action', 'Adventure'],
        director: 'James Cameron',
        cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
        posterSearch: 'avatar movie pandora',
        reviews: [
            { text: 'Revolutionary visual effects', sentiment: 'positive', author: 'Tech Times', source: 'Critics' },
            { text: 'A new world brought to life', sentiment: 'positive', author: 'Emma Wilson', source: 'Audience' },
            { text: 'Groundbreaking cinema experience', sentiment: 'positive', author: 'David Chen', source: 'Critics' }
        ],
        audienceScore: 82,
        criticsScore: 82,
        industry: 'Hollywood'
    },
    {
        id: 'avengers-endgame',
        title: 'Avengers: Endgame',
        year: 2019,
        rating: 94,
        genre: ['Action', 'Sci-Fi', 'Adventure'],
        director: 'Russo Brothers',
        cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
        posterSearch: 'avengers endgame poster',
        reviews: [
            { text: 'Perfect conclusion to an epic saga', sentiment: 'positive', author: 'Marvel Fan', source: 'Audience' },
            { text: 'Emotionally satisfying and action-packed', sentiment: 'positive', author: 'Comic Review', source: 'Critics' },
            { text: 'A triumphant finale', sentiment: 'positive', author: 'Jane Cooper', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 94,
        industry: 'Hollywood'
    },
    {
        id: 'avengers-infinity-war',
        title: 'Avengers: Infinity War',
        year: 2018,
        rating: 85,
        genre: ['Action', 'Sci-Fi', 'Adventure'],
        director: 'Russo Brothers',
        cast: ['Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo'],
        posterSearch: 'avengers infinity war thanos',
        reviews: [
            { text: 'Epic scale and stunning action', sentiment: 'positive', author: 'Action Films', source: 'Critics' },
            { text: 'Best Marvel movie yet', sentiment: 'positive', author: 'Tom Harris', source: 'Audience' },
            { text: 'Thanos is an incredible villain', sentiment: 'positive', author: 'Character Study', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 85,
        industry: 'Hollywood'
    },
    {
        id: 'the-dark-knight',
        title: 'The Dark Knight',
        year: 2008,
        rating: 94,
        genre: ['Action', 'Crime', 'Drama'],
        director: 'Christopher Nolan',
        cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        posterSearch: 'dark knight batman joker',
        reviews: [
            { text: 'Heath Ledger delivers a legendary performance', sentiment: 'positive', author: 'Oscar Review', source: 'Critics' },
            { text: 'The greatest superhero film ever made', sentiment: 'positive', author: 'Batman Fans', source: 'Audience' },
            { text: 'Dark, intense, and brilliant', sentiment: 'positive', author: 'Cinema Today', source: 'Critics' }
        ],
        audienceScore: 94,
        criticsScore: 94,
        industry: 'Hollywood'
    },
    {
        id: 'the-shawshank-redemption',
        title: 'The Shawshank Redemption',
        year: 1994,
        rating: 91,
        genre: ['Drama'],
        director: 'Frank Darabont',
        cast: ['Tim Robbins', 'Morgan Freeman'],
        posterSearch: 'shawshank redemption prison',
        reviews: [
            { text: 'One of the greatest films ever made', sentiment: 'positive', author: 'IMDB Top', source: 'Audience' },
            { text: 'Powerful story of hope and friendship', sentiment: 'positive', author: 'Classic Films', source: 'Critics' },
            { text: 'Morgan Freeman at his finest', sentiment: 'positive', author: 'Actor\'s Guild', source: 'Critics' }
        ],
        audienceScore: 98,
        criticsScore: 91,
        industry: 'Hollywood'
    },
    {
        id: 'the-godfather',
        title: 'The Godfather',
        year: 1972,
        rating: 97,
        genre: ['Crime', 'Drama'],
        director: 'Francis Ford Coppola',
        cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
        posterSearch: 'godfather movie poster',
        reviews: [
            { text: 'The definitive crime saga', sentiment: 'positive', author: 'Classic Cinema', source: 'Critics' },
            { text: 'Perfect in every aspect', sentiment: 'positive', author: 'Film Institute', source: 'Critics' },
            { text: 'Brando\'s most iconic role', sentiment: 'positive', author: 'Legacy Review', source: 'Audience' }
        ],
        audienceScore: 98,
        criticsScore: 97,
        industry: 'Hollywood'
    },
    {
        id: 'pulp-fiction',
        title: 'Pulp Fiction',
        year: 1994,
        rating: 92,
        genre: ['Crime', 'Drama'],
        director: 'Quentin Tarantino',
        cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        posterSearch: 'pulp fiction poster',
        reviews: [
            { text: 'Tarantino\'s masterpiece', sentiment: 'positive', author: 'Indie Films', source: 'Critics' },
            { text: 'Revolutionary storytelling', sentiment: 'positive', author: 'Screenplay Awards', source: 'Critics' },
            { text: 'Unforgettable dialogue and scenes', sentiment: 'positive', author: 'Movie Buff', source: 'Audience' }
        ],
        audienceScore: 96,
        criticsScore: 92,
        industry: 'Hollywood'
    },
    {
        id: 'forrest-gump',
        title: 'Forrest Gump',
        year: 1994,
        rating: 71,
        genre: ['Drama', 'Romance'],
        director: 'Robert Zemeckis',
        cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
        posterSearch: 'forrest gump bench',
        reviews: [
            { text: 'Tom Hanks delivers an Oscar-worthy performance', sentiment: 'positive', author: 'Academy Review', source: 'Critics' },
            { text: 'Heartwarming and inspiring', sentiment: 'positive', author: 'Family Films', source: 'Audience' },
            { text: 'A journey through American history', sentiment: 'positive', author: 'Historical Cinema', source: 'Critics' }
        ],
        audienceScore: 95,
        criticsScore: 71,
        industry: 'Hollywood'
    },
    {
        id: 'the-matrix',
        title: 'The Matrix',
        year: 1999,
        rating: 87,
        genre: ['Sci-Fi', 'Action'],
        director: 'Wachowski Sisters',
        cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
        posterSearch: 'matrix movie neo',
        reviews: [
            { text: 'Revolutionary action sequences', sentiment: 'positive', author: 'Action Cinema', source: 'Critics' },
            { text: 'Mind-blowing philosophical sci-fi', sentiment: 'positive', author: 'Sci-Fi Fans', source: 'Audience' },
            { text: 'Changed cinema forever', sentiment: 'positive', author: 'Film History', source: 'Critics' }
        ],
        audienceScore: 85,
        criticsScore: 87,
        industry: 'Hollywood'
    },
    {
        id: 'gladiator',
        title: 'Gladiator',
        year: 2000,
        rating: 77,
        genre: ['Action', 'Drama', 'History'],
        director: 'Ridley Scott',
        cast: ['Russell Crowe', 'Joaquin Phoenix'],
        posterSearch: 'gladiator movie rome',
        reviews: [
            { text: 'Epic historical drama', sentiment: 'positive', author: 'History Today', source: 'Critics' },
            { text: 'Russell Crowe commands the screen', sentiment: 'positive', author: 'Performance Review', source: 'Critics' },
            { text: 'Are you not entertained?', sentiment: 'positive', author: 'Action Fan', source: 'Audience' }
        ],
        audienceScore: 87,
        criticsScore: 77,
        industry: 'Hollywood'
    },
    {
        id: 'joker',
        title: 'Joker',
        year: 2019,
        rating: 68,
        genre: ['Crime', 'Drama', 'Thriller'],
        director: 'Todd Phillips',
        cast: ['Joaquin Phoenix', 'Robert De Niro'],
        posterSearch: 'joker movie joaquin phoenix',
        reviews: [
            { text: 'Joaquin Phoenix gives the performance of a lifetime', sentiment: 'positive', author: 'Oscar Watch', source: 'Critics' },
            { text: 'Dark and disturbing masterpiece', sentiment: 'positive', author: 'Thriller Fans', source: 'Audience' },
            { text: 'A character study unlike any other', sentiment: 'positive', author: 'Psychology Today', source: 'Critics' }
        ],
        audienceScore: 88,
        criticsScore: 68,
        industry: 'Hollywood'
    },
    {
        id: 'spider-man-no-way-home',
        title: 'Spider-Man: No Way Home',
        year: 2021,
        rating: 93,
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Jon Watts',
        cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch'],
        posterSearch: 'spider-man no way home',
        reviews: [
            { text: 'The ultimate Spider-Man experience', sentiment: 'positive', author: 'Marvel Universe', source: 'Audience' },
            { text: 'Nostalgic and emotionally powerful', sentiment: 'positive', author: 'Comic Books', source: 'Critics' },
            { text: 'Best Spider-Man film ever', sentiment: 'positive', author: 'Superhero Fans', source: 'Audience' }
        ],
        audienceScore: 98,
        criticsScore: 93,
        industry: 'Hollywood'
    },
    {
        id: 'top-gun-maverick',
        title: 'Top Gun: Maverick',
        year: 2022,
        rating: 96,
        genre: ['Action', 'Drama'],
        director: 'Joseph Kosinski',
        cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
        posterSearch: 'top gun maverick fighter jet',
        reviews: [
            { text: 'A perfect action sequel', sentiment: 'positive', author: 'Action Films', source: 'Critics' },
            { text: 'Tom Cruise at his best', sentiment: 'positive', author: 'Star Power', source: 'Audience' },
            { text: 'Breathtaking aerial sequences', sentiment: 'positive', author: 'Aviation Weekly', source: 'Critics' }
        ],
        audienceScore: 99,
        criticsScore: 96,
        industry: 'Hollywood'
    },
    {
        id: 'parasite',
        title: 'Parasite',
        year: 2019,
        rating: 98,
        genre: ['Thriller', 'Drama'],
        director: 'Bong Joon-ho',
        cast: ['Song Kang-ho', 'Lee Sun-kyun'],
        posterSearch: 'parasite movie poster',
        reviews: [
            { text: 'A masterpiece of social commentary', sentiment: 'positive', author: 'World Cinema', source: 'Critics' },
            { text: 'Perfectly crafted thriller', sentiment: 'positive', author: 'International Films', source: 'Critics' },
            { text: 'Deserved every award', sentiment: 'positive', author: 'Awards Season', source: 'Audience' }
        ],
        audienceScore: 93,
        criticsScore: 98,
        industry: 'Hollywood'
    },
    {
        id: 'dune',
        title: 'Dune',
        year: 2021,
        rating: 83,
        genre: ['Sci-Fi', 'Adventure', 'Drama'],
        director: 'Denis Villeneuve',
        cast: ['Timothée Chalamet', 'Zendaya', 'Oscar Isaac'],
        posterSearch: 'dune movie desert',
        reviews: [
            { text: 'Visually stunning sci-fi epic', sentiment: 'positive', author: 'Sci-Fi Chronicles', source: 'Critics' },
            { text: 'Denis Villeneuve brings Dune to life', sentiment: 'positive', author: 'Book Adaptations', source: 'Audience' },
            { text: 'Epic in every sense', sentiment: 'positive', author: 'Cinema Scope', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 83,
        industry: 'Hollywood'
    },
    {
        id: 'oppenheimer',
        title: 'Oppenheimer',
        year: 2023,
        rating: 93,
        genre: ['Biography', 'Drama', 'History'],
        director: 'Christopher Nolan',
        cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
        posterSearch: 'oppenheimer movie poster',
        reviews: [
            { text: 'Nolan\'s most mature work', sentiment: 'positive', author: 'Film Critics', source: 'Critics' },
            { text: 'Cillian Murphy delivers a tour de force', sentiment: 'positive', author: 'Oscar Buzz', source: 'Critics' },
            { text: 'A powerful historical epic', sentiment: 'positive', author: 'History Buffs', source: 'Audience' }
        ],
        audienceScore: 91,
        criticsScore: 93,
        industry: 'Hollywood'
    },
    {
        id: 'barbie',
        title: 'Barbie',
        year: 2023,
        rating: 88,
        genre: ['Comedy', 'Fantasy', 'Adventure'],
        director: 'Greta Gerwig',
        cast: ['Margot Robbie', 'Ryan Gosling'],
        posterSearch: 'barbie movie pink',
        reviews: [
            { text: 'Surprisingly deep and entertaining', sentiment: 'positive', author: 'Pop Culture', source: 'Critics' },
            { text: 'Ryan Gosling steals the show', sentiment: 'positive', author: 'Comedy Central', source: 'Audience' },
            { text: 'Smart, funny, and visually stunning', sentiment: 'positive', author: 'Modern Cinema', source: 'Critics' }
        ],
        audienceScore: 83,
        criticsScore: 88,
        industry: 'Hollywood'
    },
    {
        id: 'the-lion-king',
        title: 'The Lion King',
        year: 1994,
        rating: 93,
        genre: ['Animation', 'Adventure', 'Drama'],
        director: 'Roger Allers',
        cast: ['Matthew Broderick', 'Jeremy Irons', 'James Earl Jones'],
        posterSearch: 'lion king simba',
        reviews: [
            { text: 'Disney\'s crowning achievement', sentiment: 'positive', author: 'Animation Guild', source: 'Critics' },
            { text: 'Timeless classic for all ages', sentiment: 'positive', author: 'Family Entertainment', source: 'Audience' },
            { text: 'Unforgettable music and story', sentiment: 'positive', author: 'Soundtrack Review', source: 'Critics' }
        ],
        audienceScore: 93,
        criticsScore: 93,
        industry: 'Hollywood'
    },

    // ===== BOLLYWOOD BLOCKBUSTERS =====
    {
        id: '3-idiots',
        title: '3 Idiots',
        year: 2009,
        rating: 100,
        genre: ['Comedy', 'Drama'],
        director: 'Rajkumar Hirani',
        cast: ['Aamir Khan', 'R. Madhavan', 'Sharman Joshi'],
        posterSearch: 'three idiots bollywood',
        reviews: [
            { text: 'A perfect blend of comedy and social message', sentiment: 'positive', author: 'Bollywood Today', source: 'Critics' },
            { text: 'Aamir Khan at his finest', sentiment: 'positive', author: 'Indian Cinema', source: 'Audience' },
            { text: 'Changed Indian cinema forever', sentiment: 'positive', author: 'Film Companion', source: 'Critics' }
        ],
        audienceScore: 100,
        criticsScore: 100,
        industry: 'Bollywood'
    },
    {
        id: 'dangal',
        title: 'Dangal',
        year: 2016,
        rating: 97,
        genre: ['Biography', 'Drama', 'Sport'],
        director: 'Nitesh Tiwari',
        cast: ['Aamir Khan', 'Fatima Sana Shaikh', 'Sanya Malhotra'],
        posterSearch: 'dangal wrestling movie',
        reviews: [
            { text: 'Inspiring true story brilliantly told', sentiment: 'positive', author: 'Sports Weekly', source: 'Critics' },
            { text: 'Empowering and emotional', sentiment: 'positive', author: 'Women in Film', source: 'Audience' },
            { text: 'Aamir Khan\'s transformation is remarkable', sentiment: 'positive', author: 'Bollywood Life', source: 'Critics' }
        ],
        audienceScore: 97,
        criticsScore: 97,
        industry: 'Bollywood'
    },
    {
        id: 'pk',
        title: 'PK',
        year: 2014,
        rating: 86,
        genre: ['Comedy', 'Drama', 'Sci-Fi'],
        director: 'Rajkumar Hirani',
        cast: ['Aamir Khan', 'Anushka Sharma', 'Sushant Singh Rajput'],
        posterSearch: 'pk movie aamir khan',
        reviews: [
            { text: 'Bold social commentary wrapped in entertainment', sentiment: 'positive', author: 'Social Cinema', source: 'Critics' },
            { text: 'Thought-provoking and hilarious', sentiment: 'positive', author: 'Movie Goers', source: 'Audience' },
            { text: 'Hirani and Aamir magic again', sentiment: 'positive', author: 'Box Office India', source: 'Critics' }
        ],
        audienceScore: 86,
        criticsScore: 86,
        industry: 'Bollywood'
    },
    {
        id: 'baahubali-the-beginning',
        title: 'Baahubali: The Beginning',
        year: 2015,
        rating: 88,
        genre: ['Action', 'Adventure', 'Drama'],
        director: 'S. S. Rajamouli',
        cast: ['Prabhas', 'Rana Daggubati', 'Anushka Shetty'],
        posterSearch: 'baahubali movie epic',
        reviews: [
            { text: 'Epic Indian cinema at its grandest', sentiment: 'positive', author: 'Epic Films', source: 'Critics' },
            { text: 'Visually spectacular', sentiment: 'positive', author: 'VFX Today', source: 'Critics' },
            { text: 'Prabhas is phenomenal', sentiment: 'positive', author: 'South Indian Cinema', source: 'Audience' }
        ],
        audienceScore: 88,
        criticsScore: 88,
        industry: 'Bollywood'
    },
    {
        id: 'baahubali-2',
        title: 'Baahubali 2: The Conclusion',
        year: 2017,
        rating: 89,
        genre: ['Action', 'Adventure', 'Drama'],
        director: 'S. S. Rajamouli',
        cast: ['Prabhas', 'Rana Daggubati', 'Anushka Shetty'],
        posterSearch: 'baahubali 2 movie poster',
        reviews: [
            { text: 'A satisfying conclusion to the epic saga', sentiment: 'positive', author: 'Indian Express', source: 'Critics' },
            { text: 'Even better than the first', sentiment: 'positive', author: 'Film Fans', source: 'Audience' },
            { text: 'Indian cinema\'s biggest achievement', sentiment: 'positive', author: 'Trade Analyst', source: 'Critics' }
        ],
        audienceScore: 89,
        criticsScore: 89,
        industry: 'Bollywood'
    },
    {
        id: 'rrr',
        title: 'RRR',
        year: 2022,
        rating: 95,
        genre: ['Action', 'Drama'],
        director: 'S. S. Rajamouli',
        cast: ['N. T. Rama Rao Jr.', 'Ram Charan', 'Alia Bhatt'],
        posterSearch: 'rrr movie indian',
        reviews: [
            { text: 'A spectacular action extravaganza', sentiment: 'positive', author: 'Global Cinema', source: 'Critics' },
            { text: 'Rajamouli outdoes himself', sentiment: 'positive', author: 'Regional Films', source: 'Critics' },
            { text: 'The Naatu Naatu sequence is legendary', sentiment: 'positive', author: 'Music & Dance', source: 'Audience' }
        ],
        audienceScore: 95,
        criticsScore: 95,
        industry: 'Bollywood'
    },

    {
        id: 'pathaan',
        title: 'Pathaan',
        year: 2023,
        rating: 75,
        genre: ['Action', 'Thriller'],
        director: 'Siddharth Anand',
        cast: ['Shah Rukh Khan', 'Deepika Padukone', 'John Abraham'],
        posterSearch: 'pathaan movie shah rukh khan',
        reviews: [
            { text: 'SRK\'s action-packed comeback', sentiment: 'positive', author: 'Bollywood Hungama', source: 'Critics' },
            { text: 'High-octane entertainment', sentiment: 'positive', author: 'Action Lovers', source: 'Audience' },
            { text: 'Stylish and slick', sentiment: 'positive', author: 'Spy Thrillers', source: 'Critics' }
        ],
        audienceScore: 75,
        criticsScore: 75,
        industry: 'Bollywood'
    },
    {
        id: 'lagaan',
        title: 'Lagaan',
        year: 2001,
        rating: 95,
        genre: ['Drama', 'Musical', 'Sport'],
        director: 'Ashutosh Gowariker',
        cast: ['Aamir Khan', 'Gracy Singh', 'Rachel Shelley'],
        posterSearch: 'lagaan cricket bollywood',
        reviews: [
            { text: 'An Oscar-nominated masterpiece', sentiment: 'positive', author: 'Academy Watch', source: 'Critics' },
            { text: 'Cricket and patriotism perfectly blended', sentiment: 'positive', author: 'Sports Cinema', source: 'Audience' },
            { text: 'Epic storytelling', sentiment: 'positive', author: 'Period Films', source: 'Critics' }
        ],
        audienceScore: 95,
        criticsScore: 95,
        industry: 'Bollywood'
    },
    {
        id: 'taare-zameen-par',
        title: 'Taare Zameen Par',
        year: 2007,
        rating: 96,
        genre: ['Drama', 'Family'],
        director: 'Aamir Khan',
        cast: ['Aamir Khan', 'Darsheel Safary'],
        posterSearch: 'taare zameen par stars earth',
        reviews: [
            { text: 'A touching story about childhood and learning', sentiment: 'positive', author: 'Education Review', source: 'Critics' },
            { text: 'Will make you cry', sentiment: 'positive', author: 'Family Films', source: 'Audience' },
            { text: 'Aamir Khan\'s directorial brilliance', sentiment: 'positive', author: 'Director\'s Cut', source: 'Critics' }
        ],
        audienceScore: 96,
        criticsScore: 96,
        industry: 'Bollywood'
    },
    {
        id: 'gully-boy',
        title: 'Gully Boy',
        year: 2019,
        rating: 79,
        genre: ['Drama', 'Music'],
        director: 'Zoya Akhtar',
        cast: ['Ranveer Singh', 'Alia Bhatt'],
        posterSearch: 'gully boy rap movie',
        reviews: [
            { text: 'Ranveer Singh delivers a powerful performance', sentiment: 'positive', author: 'Performance Art', source: 'Critics' },
            { text: 'Hip-hop culture beautifully portrayed', sentiment: 'positive', author: 'Music Scene', source: 'Audience' },
            { text: 'Zoya Akhtar\'s best work', sentiment: 'positive', author: 'Women Directors', source: 'Critics' }
        ],
        audienceScore: 79,
        criticsScore: 79,
        industry: 'Bollywood'
    },
    {
        id: 'andhadhun',
        title: 'Andhadhun',
        year: 2018,
        rating: 92,
        genre: ['Thriller', 'Crime', 'Comedy'],
        director: 'Sriram Raghavan',
        cast: ['Ayushmann Khurrana', 'Tabu', 'Radhika Apte'],
        posterSearch: 'andhadhun blind pianist',
        reviews: [
            { text: 'A masterclass in thriller filmmaking', sentiment: 'positive', author: 'Thriller Central', source: 'Critics' },
            { text: 'Unpredictable and brilliant', sentiment: 'positive', author: 'Mystery Fans', source: 'Audience' },
            { text: 'Tabu is terrifying', sentiment: 'positive', author: 'Character Analysis', source: 'Critics' }
        ],
        audienceScore: 92,
        criticsScore: 92,
        industry: 'Bollywood'
    },
    {
        id: 'dilwale-dulhania-le-jayenge',
        title: 'Dilwale Dulhania Le Jayenge',
        year: 1995,
        rating: 89,
        genre: ['Romance', 'Drama', 'Musical'],
        director: 'Aditya Chopra',
        cast: ['Shah Rukh Khan', 'Kajol'],
        posterSearch: 'ddlj bollywood romance',
        reviews: [
            { text: 'The ultimate Bollywood romance', sentiment: 'positive', author: 'Romance Films', source: 'Critics' },
            { text: 'Still running in theaters!', sentiment: 'positive', author: 'Cinema History', source: 'Audience' },
            { text: 'SRK and Kajol\'s chemistry is legendary', sentiment: 'positive', author: 'On-Screen Pairs', source: 'Critics' }
        ],
        audienceScore: 89,
        criticsScore: 89,
        industry: 'Bollywood'
    },
    {
        id: 'sholay',
        title: 'Sholay',
        year: 1975,
        rating: 100,
        genre: ['Action', 'Adventure', 'Drama'],
        director: 'Ramesh Sippy',
        cast: ['Dharmendra', 'Amitabh Bachchan', 'Sanjeev Kumar'],
        posterSearch: 'sholay bollywood classic',
        reviews: [
            { text: 'The greatest Indian film ever made', sentiment: 'positive', author: 'Film Institute', source: 'Critics' },
            { text: 'Gabbar Singh is iconic', sentiment: 'positive', author: 'Villain Study', source: 'Audience' },
            { text: 'Timeless classic', sentiment: 'positive', author: 'Legacy Films', source: 'Critics' }
        ],
        audienceScore: 100,
        criticsScore: 100,
        industry: 'Bollywood'
    },

    // ===== HOLLYWOOD - CRIME / THRILLER CLASSICS =====
    {
        id: 'casino',
        title: 'Casino',
        year: 1995,
        rating: 90,
        genre: ['Crime', 'Drama'],
        director: 'Martin Scorsese',
        cast: ['Robert De Niro', 'Joe Pesci'],
        posterSearch: 'casino 1995 movie poster',
        reviews: [
            { text: 'Classic mafia film', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 92,
        criticsScore: 90,
        industry: 'Hollywood'
    },
    {
        id: 'heat',
        title: 'Heat',
        year: 1995,
        rating: 94,
        genre: ['Crime', 'Drama'],
        director: 'Michael Mann',
        cast: ['Al Pacino', 'Robert De Niro'],
        posterSearch: 'heat 1995 crime movie poster',
        reviews: [
            { text: 'Iconic crime thriller', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 96,
        criticsScore: 94,
        industry: 'Hollywood'
    },
    {
        id: 'collateral',
        title: 'Collateral',
        year: 2004,
        rating: 86,
        genre: ['Crime', 'Thriller'],
        director: 'Michael Mann',
        cast: ['Tom Cruise', 'Jamie Foxx'],
        posterSearch: 'collateral 2004 movie poster',
        reviews: [
            { text: 'Stylish thriller', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 89,
        criticsScore: 86,
        industry: 'Hollywood'
    },
    {
        id: 'the_last_samurai',
        title: 'The Last Samurai',
        year: 2003,
        rating: 83,
        genre: ['Action', 'Drama'],
        director: 'Edward Zwick',
        cast: ['Tom Cruise'],
        posterSearch: 'last samurai 2003 movie poster',
        reviews: [
            { text: 'Epic historical drama', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 88,
        criticsScore: 83,
        industry: 'Hollywood'
    },
    {
        id: 'blood_diamond',
        title: 'Blood Diamond',
        year: 2006,
        rating: 88,
        genre: ['Drama', 'Thriller'],
        director: 'Edward Zwick',
        cast: ['Leonardo DiCaprio'],
        posterSearch: 'blood diamond movie poster',
        reviews: [
            { text: 'Powerful storytelling', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 88,
        industry: 'Hollywood'
    },
    {
        id: 'the_departed',
        title: 'The Departed',
        year: 2006,
        rating: 91,
        genre: ['Crime', 'Drama'],
        director: 'Martin Scorsese',
        cast: ['Leonardo DiCaprio', 'Matt Damon'],
        posterSearch: 'the departed 2006 movie poster',
        reviews: [
            { text: 'Masterclass in crime cinema', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 93,
        criticsScore: 91,
        industry: 'Hollywood'
    },
    {
        id: 'american_psycho',
        title: 'American Psycho',
        year: 2000,
        rating: 85,
        genre: ['Crime', 'Drama'],
        director: 'Mary Harron',
        cast: ['Christian Bale'],
        posterSearch: 'american psycho movie poster',
        reviews: [
            { text: 'Disturbing yet brilliant', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 88,
        criticsScore: 85,
        industry: 'Hollywood'
    },
    {
        id: 'the_social_network',
        title: 'The Social Network',
        year: 2010,
        rating: 92,
        genre: ['Drama', 'Biography'],
        director: 'David Fincher',
        cast: ['Jesse Eisenberg', 'Andrew Garfield'],
        posterSearch: 'the social network movie poster',
        reviews: [
            { text: 'Sharp and engaging', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 94,
        criticsScore: 92,
        industry: 'Hollywood'
    },
    {
        id: 'gone_girl',
        title: 'Gone Girl',
        year: 2014,
        rating: 88,
        genre: ['Thriller', 'Mystery'],
        director: 'David Fincher',
        cast: ['Ben Affleck', 'Rosamund Pike'],
        posterSearch: 'gone girl 2014 movie poster',
        reviews: [
            { text: 'Twisted and gripping', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 88,
        industry: 'Hollywood'
    },
    {
        id: 'the_wolf_of_wall_street',
        title: 'The Wolf of Wall Street',
        year: 2013,
        rating: 89,
        genre: ['Biography', 'Comedy'],
        director: 'Martin Scorsese',
        cast: ['Leonardo DiCaprio'],
        posterSearch: 'wolf of wall street movie poster',
        reviews: [
            { text: 'Wild and entertaining', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 92,
        criticsScore: 89,
        industry: 'Hollywood'
    },
    {
        id: 'prisoners',
        title: 'Prisoners',
        year: 2013,
        rating: 89,
        genre: ['Crime', 'Thriller'],
        director: 'Denis Villeneuve',
        cast: ['Hugh Jackman', 'Jake Gyllenhaal'],
        posterSearch: 'prisoners 2013 movie poster',
        reviews: [
            { text: 'Dark and intense', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 92,
        criticsScore: 89,
        industry: 'Hollywood'
    },
    {
        id: 'nightcrawler',
        title: 'Nightcrawler',
        year: 2014,
        rating: 88,
        genre: ['Crime', 'Drama'],
        director: 'Dan Gilroy',
        cast: ['Jake Gyllenhaal'],
        posterSearch: 'nightcrawler 2014 movie poster',
        reviews: [
            { text: 'Chilling performance', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 88,
        industry: 'Hollywood'
    },
    {
        id: 'drive',
        title: 'Drive',
        year: 2011,
        rating: 86,
        genre: ['Crime', 'Drama'],
        director: 'Nicolas Winding Refn',
        cast: ['Ryan Gosling'],
        posterSearch: 'drive 2011 movie poster ryan gosling',
        reviews: [
            { text: 'Stylish neo-noir', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 88,
        criticsScore: 86,
        industry: 'Hollywood'
    },
    {
        id: 'her',
        title: 'Her',
        year: 2013,
        rating: 90,
        genre: ['Romance', 'Sci-Fi'],
        director: 'Spike Jonze',
        cast: ['Joaquin Phoenix'],
        posterSearch: 'her 2013 spike jonze movie poster',
        reviews: [
            { text: 'Beautiful and emotional', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 90,
        industry: 'Hollywood'
    },
    {
        id: 'the_hateful_eight',
        title: 'The Hateful Eight',
        year: 2015,
        rating: 84,
        genre: ['Western', 'Drama'],
        director: 'Quentin Tarantino',
        cast: ['Samuel L. Jackson', 'Kurt Russell'],
        posterSearch: 'hateful eight tarantino movie poster',
        reviews: [
            { text: 'Dialog-heavy brilliance', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 87,
        criticsScore: 84,
        industry: 'Hollywood'
    },
    {
        id: 'the_big_short',
        title: 'The Big Short',
        year: 2015,
        rating: 88,
        genre: ['Drama', 'Biography'],
        director: 'Adam McKay',
        cast: ['Christian Bale', 'Steve Carell'],
        posterSearch: 'the big short 2015 movie poster',
        reviews: [
            { text: 'Smart financial drama', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 88,
        industry: 'Hollywood'
    },
    {
        id: 'spotlight',
        title: 'Spotlight',
        year: 2015,
        rating: 91,
        genre: ['Drama', 'Biography'],
        director: 'Tom McCarthy',
        cast: ['Mark Ruffalo', 'Michael Keaton'],
        posterSearch: 'spotlight 2015 movie poster',
        reviews: [
            { text: 'Powerful journalism story', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 93,
        criticsScore: 91,
        industry: 'Hollywood'
    },
    {
        id: 'room',
        title: 'Room',
        year: 2015,
        rating: 89,
        genre: ['Drama'],
        director: 'Lenny Abrahamson',
        cast: ['Brie Larson'],
        posterSearch: 'room 2015 brie larson movie poster',
        reviews: [
            { text: 'Emotionally intense', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 89,
        industry: 'Hollywood'
    },
    {
        id: 'the_revenant',
        title: 'The Revenant',
        year: 2015,
        rating: 88,
        genre: ['Adventure', 'Drama'],
        director: 'Alejandro G. Iñárritu',
        cast: ['Leonardo DiCaprio'],
        posterSearch: 'the revenant 2015 movie poster',
        reviews: [
            { text: 'Visceral survival drama', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 88,
        industry: 'Hollywood'
    },
    {
        id: 'birdman',
        title: 'Birdman',
        year: 2014,
        rating: 90,
        genre: ['Drama'],
        director: 'Alejandro G. Iñárritu',
        cast: ['Michael Keaton'],
        posterSearch: 'birdman 2014 michael keaton movie poster',
        reviews: [
            { text: 'Innovative filmmaking', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 92,
        criticsScore: 90,
        industry: 'Hollywood'
    },
    {
        id: 'life_of_pi',
        title: 'Life of Pi',
        year: 2012,
        rating: 87,
        genre: ['Adventure', 'Drama'],
        director: 'Ang Lee',
        cast: ['Suraj Sharma'],
        posterSearch: 'life of pi 2012 movie poster',
        reviews: [
            { text: 'Visually stunning', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 87,
        industry: 'Hollywood'
    },
    {
        id: 'gravity',
        title: 'Gravity',
        year: 2013,
        rating: 86,
        genre: ['Sci-Fi', 'Thriller'],
        director: 'Alfonso Cuaron',
        cast: ['Sandra Bullock'],
        posterSearch: 'gravity 2013 sandra bullock movie poster',
        reviews: [
            { text: 'Intense space drama', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 89,
        criticsScore: 86,
        industry: 'Hollywood'
    },
    {
        id: 'edge_of_tomorrow',
        title: 'Edge of Tomorrow',
        year: 2014,
        rating: 88,
        genre: ['Action', 'Sci-Fi'],
        director: 'Doug Liman',
        cast: ['Tom Cruise', 'Emily Blunt'],
        posterSearch: 'edge of tomorrow 2014 movie poster',
        reviews: [
            { text: 'Smart sci-fi action', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 88,
        industry: 'Hollywood'
    },
    {
        id: 'oblivion',
        title: 'Oblivion',
        year: 2013,
        rating: 80,
        genre: ['Sci-Fi'],
        director: 'Joseph Kosinski',
        cast: ['Tom Cruise'],
        posterSearch: 'oblivion 2013 tom cruise movie poster',
        reviews: [
            { text: 'Stylish but flawed', sentiment: 'mixed', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 84,
        criticsScore: 80,
        industry: 'Hollywood'
    },

    // ===== BOLLYWOOD - NEW ADDITIONS =====
    {
        id: 'chak_de_india',
        title: 'Chak De! India',
        year: 2007,
        rating: 91,
        genre: ['Sports', 'Drama'],
        director: 'Shimit Amin',
        cast: ['Shah Rukh Khan'],
        posterSearch: 'chak de india 2007 movie poster',
        reviews: [
            { text: 'Motivational classic', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 95,
        criticsScore: 91,
        industry: 'Bollywood'
    },
    {
        id: 'omkara',
        title: 'Omkara',
        year: 2006,
        rating: 89,
        genre: ['Crime', 'Drama'],
        director: 'Vishal Bhardwaj',
        cast: ['Ajay Devgn', 'Saif Ali Khan'],
        posterSearch: 'omkara 2006 bollywood movie poster',
        reviews: [
            { text: 'Brilliant adaptation', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 92,
        criticsScore: 89,
        industry: 'Bollywood'
    },
    {
        id: 'haider',
        title: 'Haider',
        year: 2014,
        rating: 90,
        genre: ['Drama'],
        director: 'Vishal Bhardwaj',
        cast: ['Shahid Kapoor'],
        posterSearch: 'haider 2014 bollywood movie poster',
        reviews: [
            { text: 'Dark and poetic', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 93,
        criticsScore: 90,
        industry: 'Bollywood'
    },
    {
        id: 'kaminey',
        title: 'Kaminey',
        year: 2009,
        rating: 85,
        genre: ['Crime', 'Drama'],
        director: 'Vishal Bhardwaj',
        cast: ['Shahid Kapoor'],
        posterSearch: 'kaminey 2009 bollywood movie poster',
        reviews: [
            { text: 'Stylish thriller', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 88,
        criticsScore: 85,
        industry: 'Bollywood'
    },
    {
        id: 'dev_d',
        title: 'Dev.D',
        year: 2009,
        rating: 87,
        genre: ['Drama'],
        director: 'Anurag Kashyap',
        cast: ['Abhay Deol'],
        posterSearch: 'dev d 2009 anurag kashyap movie poster',
        reviews: [
            { text: 'Modern cult film', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 87,
        industry: 'Bollywood'
    },
    {
        id: 'swades',
        title: 'Swades',
        year: 2004,
        rating: 90,
        genre: ['Drama'],
        director: 'Ashutosh Gowariker',
        cast: ['Shah Rukh Khan'],
        posterSearch: 'swades 2004 bollywood movie poster',
        reviews: [
            { text: 'Inspirational classic', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 94,
        criticsScore: 90,
        industry: 'Bollywood'
    },
    {
        id: 'rang_de_basanti',
        title: 'Rang De Basanti',
        year: 2006,
        rating: 91,
        genre: ['Drama'],
        director: 'Rakeysh Omprakash Mehra',
        cast: ['Aamir Khan'],
        posterSearch: 'rang de basanti 2006 bollywood movie poster',
        reviews: [
            { text: 'Impactful and emotional', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 95,
        criticsScore: 91,
        industry: 'Bollywood'
    },
    {
        id: 'masaan',
        title: 'Masaan',
        year: 2015,
        rating: 86,
        genre: ['Drama'],
        director: 'Neeraj Ghaywan',
        cast: ['Vicky Kaushal'],
        posterSearch: 'masaan 2015 bollywood movie poster',
        reviews: [
            { text: 'Raw and poetic', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 86,
        industry: 'Bollywood'
    },
    {
        id: 'neerja',
        title: 'Neerja',
        year: 2016,
        rating: 87,
        genre: ['Biography', 'Drama'],
        director: 'Ram Madhvani',
        cast: ['Sonam Kapoor'],
        posterSearch: 'neerja 2016 bollywood movie poster',
        reviews: [
            { text: 'Inspiring real story', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 87,
        industry: 'Bollywood'
    },
    {
        id: 'toilet_ek_prem_katha',
        title: 'Toilet: Ek Prem Katha',
        year: 2017,
        rating: 79,
        genre: ['Comedy', 'Drama'],
        director: 'Shree Narayan Singh',
        cast: ['Akshay Kumar'],
        posterSearch: 'toilet ek prem katha 2017 movie poster',
        reviews: [
            { text: 'Social message entertainer', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 85,
        criticsScore: 79,
        industry: 'Bollywood'
    },
    {
        id: 'padman',
        title: 'Pad Man',
        year: 2018,
        rating: 80,
        genre: ['Biography', 'Drama'],
        director: 'R. Balki',
        cast: ['Akshay Kumar'],
        posterSearch: 'padman 2018 akshay kumar movie poster',
        reviews: [
            { text: 'Important subject', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 86,
        criticsScore: 80,
        industry: 'Bollywood'
    },
    {
        id: 'sonu_ke_titu_ki_sweety',
        title: 'Sonu Ke Titu Ki Sweety',
        year: 2018,
        rating: 78,
        genre: ['Comedy', 'Romance'],
        director: 'Luv Ranjan',
        cast: ['Kartik Aaryan'],
        posterSearch: 'sonu ke titu ki sweety 2018 movie poster',
        reviews: [
            { text: 'Youth favorite', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 88,
        criticsScore: 78,
        industry: 'Bollywood'
    },
    {
        id: 'raazi',
        title: 'Raazi',
        year: 2018,
        rating: 87,
        genre: ['Thriller', 'Drama'],
        director: 'Meghna Gulzar',
        cast: ['Alia Bhatt'],
        posterSearch: 'raazi 2018 alia bhatt movie poster',
        reviews: [
            { text: 'Gripping spy drama', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 87,
        industry: 'Bollywood'
    },
    {
        id: 'uri',
        title: 'Uri: The Surgical Strike',
        year: 2019,
        rating: 85,
        genre: ['Action', 'War'],
        director: 'Aditya Dhar',
        cast: ['Vicky Kaushal'],
        posterSearch: 'uri surgical strike 2019 movie poster',
        reviews: [
            { text: 'High patriotic impact', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 92,
        criticsScore: 85,
        industry: 'Bollywood'
    },
    {
        id: 'stree',
        title: 'Stree',
        year: 2018,
        rating: 86,
        genre: ['Comedy', 'Horror'],
        director: 'Amar Kaushik',
        cast: ['Rajkummar Rao', 'Shraddha Kapoor'],
        posterSearch: 'stree 2018 bollywood movie poster',
        reviews: [
            { text: 'Perfect horror comedy', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 86,
        industry: 'Bollywood'
    },
    {
        id: 'badhai_ho',
        title: 'Badhaai Ho',
        year: 2018,
        rating: 85,
        genre: ['Comedy', 'Drama'],
        director: 'Amit Sharma',
        cast: ['Ayushmann Khurrana'],
        posterSearch: 'badhaai ho 2018 bollywood movie poster',
        reviews: [
            { text: 'Fresh concept', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 85,
        industry: 'Bollywood'
    },
    {
        id: 'dream_girl',
        title: 'Dream Girl',
        year: 2019,
        rating: 80,
        genre: ['Comedy'],
        director: 'Raaj Shaandilyaa',
        cast: ['Ayushmann Khurrana'],
        posterSearch: 'dream girl 2019 ayushmann bollywood poster',
        reviews: [
            { text: 'Entertaining comedy', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 87,
        criticsScore: 80,
        industry: 'Bollywood'
    },

    // ===== SOUTH INDIAN CINEMA =====
    {
        id: 'bommarillu',
        title: 'Bommarillu',
        year: 2006,
        rating: 85,
        genre: ['Romance', 'Drama'],
        director: 'Bhaskar',
        cast: ['Siddharth'],
        posterSearch: 'bommarillu 2006 telugu movie poster',
        reviews: [
            { text: 'Feel good love story', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 90,
        criticsScore: 85,
        industry: 'South Indian'
    },
    {
        id: 'pokiri',
        title: 'Pokiri',
        year: 2006,
        rating: 86,
        genre: ['Action'],
        director: 'Puri Jagannadh',
        cast: ['Mahesh Babu'],
        posterSearch: 'pokiri 2006 mahesh babu movie poster',
        reviews: [
            { text: 'Mass entertainer', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 91,
        criticsScore: 86,
        industry: 'South Indian'
    },
    {
        id: 'temper',
        title: 'Temper',
        year: 2015,
        rating: 82,
        genre: ['Action', 'Drama'],
        director: 'Puri Jagannadh',
        cast: ['Jr NTR'],
        posterSearch: 'temper 2015 jr ntr movie poster',
        reviews: [
            { text: 'Strong performance', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 88,
        criticsScore: 82,
        industry: 'South Indian'
    },
    {
        id: 'karnan',
        title: 'Karnan',
        year: 2021,
        rating: 89,
        genre: ['Drama', 'Action'],
        director: 'Mari Selvaraj',
        cast: ['Dhanush'],
        posterSearch: 'karnan 2021 dhanush tamil movie poster',
        reviews: [
            { text: 'Powerful social film', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 93,
        criticsScore: 89,
        industry: 'South Indian'
    },
    {
        id: 'mahanati',
        title: 'Mahanati',
        year: 2018,
        rating: 89,
        genre: ['Biography', 'Drama'],
        director: 'Nag Ashwin',
        cast: ['Keerthy Suresh'],
        posterSearch: 'mahanati 2018 telugu movie poster',
        reviews: [
            { text: 'Beautiful biopic', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 93,
        criticsScore: 89,
        industry: 'South Indian'
    },
    {
        id: 'rangasthalam',
        title: 'Rangasthalam',
        year: 2018,
        rating: 88,
        genre: ['Action', 'Drama'],
        director: 'Sukumar',
        cast: ['Ram Charan'],
        posterSearch: 'rangasthalam 2018 ram charan movie poster',
        reviews: [
            { text: 'Strong performances', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 88,
        industry: 'South Indian'
    },
    {
        id: 'ala_vikunthapurramuloo',
        title: 'Ala Vaikunthapurramuloo',
        year: 2020,
        rating: 85,
        genre: ['Action', 'Drama'],
        director: 'Trivikram Srinivas',
        cast: ['Allu Arjun'],
        posterSearch: 'ala vaikunthapurramuloo 2020 allu arjun poster',
        reviews: [
            { text: 'Stylish entertainer', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 90,
        criticsScore: 85,
        industry: 'South Indian'
    },
    {
        id: 'sarpatta_parambarai',
        title: 'Sarpatta Parambarai',
        year: 2021,
        rating: 88,
        genre: ['Sports', 'Drama'],
        director: 'Pa. Ranjith',
        cast: ['Arya'],
        posterSearch: 'sarpatta parambarai 2021 tamil movie poster',
        reviews: [
            { text: 'Gritty sports drama', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 92,
        criticsScore: 88,
        industry: 'South Indian'
    },
    {
        id: 'arjun_reddy',
        title: 'Arjun Reddy',
        year: 2017,
        rating: 84,
        genre: ['Drama'],
        director: 'Sandeep Reddy Vanga',
        cast: ['Vijay Deverakonda'],
        posterSearch: 'arjun reddy 2017 telugu movie poster',
        reviews: [
            { text: 'Raw and intense', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 89,
        criticsScore: 84,
        industry: 'South Indian'
    },
    {
        id: 'eega',
        title: 'Eega',
        year: 2012,
        rating: 86,
        genre: ['Fantasy', 'Action'],
        director: 'S. S. Rajamouli',
        cast: ['Nani'],
        posterSearch: 'eega 2012 rajamouli telugu movie poster',
        reviews: [
            { text: 'Unique concept', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 86,
        industry: 'South Indian'
    },
    {
        id: 'magadheera',
        title: 'Magadheera',
        year: 2009,
        rating: 85,
        genre: ['Action', 'Fantasy'],
        director: 'S. S. Rajamouli',
        cast: ['Ram Charan'],
        posterSearch: 'magadheera 2009 rajamouli telugu movie poster',
        reviews: [
            { text: 'Grand visual spectacle', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 85,
        industry: 'South Indian'
    },
    {
        id: 'jersey_telugu',
        title: 'Jersey',
        year: 2019,
        rating: 90,
        genre: ['Drama', 'Sports'],
        director: 'Gowtam Tinnanuri',
        cast: ['Nani'],
        posterSearch: 'jersey 2019 nani telugu movie poster',
        reviews: [
            { text: 'Emotional sports drama', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 94,
        criticsScore: 90,
        industry: 'South Indian'
    },
    {
        id: 'thani_oruvan',
        title: 'Thani Oruvan',
        year: 2015,
        rating: 88,
        genre: ['Action', 'Thriller'],
        director: 'Mohan Raja',
        cast: ['Jayam Ravi'],
        posterSearch: 'thani oruvan 2015 tamil movie poster',
        reviews: [
            { text: 'Smart villain story', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 88,
        industry: 'South Indian'
    },
    {
        id: 'ratsasan',
        title: 'Ratsasan',
        year: 2018,
        rating: 91,
        genre: ['Crime', 'Thriller'],
        director: 'Ram Kumar',
        cast: ['Vishnu Vishal'],
        posterSearch: 'ratsasan 2018 tamil movie poster',
        reviews: [
            { text: 'Terrifying thriller', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 94,
        criticsScore: 91,
        industry: 'South Indian'
    },
    {
        id: 'doctor',
        title: 'Doctor',
        year: 2021,
        rating: 82,
        genre: ['Comedy', 'Action'],
        director: 'Nelson',
        cast: ['Sivakarthikeyan'],
        posterSearch: 'doctor 2021 sivakarthikeyan tamil movie poster',
        reviews: [
            { text: 'Dark comedy fun', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 88,
        criticsScore: 82,
        industry: 'South Indian'
    },

    // ===== KOREAN CINEMA =====
    {
        id: 'a_taxi_driver',
        title: 'A Taxi Driver',
        year: 2017,
        rating: 89,
        genre: ['Drama', 'History'],
        director: 'Jang Hoon',
        cast: ['Song Kang-ho'],
        posterSearch: 'a taxi driver 2017 korean movie poster',
        reviews: [
            { text: 'Emotional historical drama', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 92,
        criticsScore: 89,
        industry: 'Korean'
    },
    {
        id: 'the_man_from_nowhere',
        title: 'The Man from Nowhere',
        year: 2010,
        rating: 88,
        genre: ['Action', 'Thriller'],
        director: 'Lee Jeong-beom',
        cast: ['Won Bin'],
        posterSearch: 'man from nowhere 2010 korean movie poster',
        reviews: [
            { text: 'Intense action film', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 91,
        criticsScore: 88,
        industry: 'Korean'
    },
    {
        id: 'i_saw_the_devil',
        title: 'I Saw the Devil',
        year: 2010,
        rating: 89,
        genre: ['Thriller', 'Crime'],
        director: 'Kim Jee-woon',
        cast: ['Lee Byung-hun'],
        posterSearch: 'i saw the devil 2010 korean movie poster',
        reviews: [
            { text: 'Brutal and gripping', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 92,
        criticsScore: 89,
        industry: 'Korean'
    },
    {
        id: 'the_handmaiden',
        title: 'The Handmaiden',
        year: 2016,
        rating: 91,
        genre: ['Drama', 'Romance'],
        director: 'Park Chan-wook',
        cast: ['Kim Min-hee'],
        posterSearch: 'the handmaiden 2016 park chan-wook movie poster',
        reviews: [
            { text: 'Elegant storytelling', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 94,
        criticsScore: 91,
        industry: 'Korean'
    },
    {
        id: 'burning',
        title: 'Burning',
        year: 2018,
        rating: 89,
        genre: ['Drama', 'Mystery'],
        director: 'Lee Chang-dong',
        cast: ['Yoo Ah-in'],
        posterSearch: 'burning 2018 korean movie poster',
        reviews: [
            { text: 'Slow and haunting', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 90,
        criticsScore: 89,
        industry: 'Korean'
    },
    {
        id: 'the_wailing',
        title: 'The Wailing',
        year: 2016,
        rating: 90,
        genre: ['Horror', 'Thriller'],
        director: 'Na Hong-jin',
        cast: ['Kwak Do-won'],
        posterSearch: 'the wailing 2016 korean horror movie poster',
        reviews: [
            { text: 'Creepy and intense', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 93,
        criticsScore: 90,
        industry: 'Korean'
    },
    {
        id: 'train_to_busan',
        title: 'Train to Busan',
        year: 2016,
        rating: 92,
        genre: ['Horror', 'Action'],
        director: 'Yeon Sang-ho',
        cast: ['Gong Yoo'],
        posterSearch: 'train to busan 2016 korean movie poster',
        reviews: [
            { text: 'Emotional zombie film', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 95,
        criticsScore: 92,
        industry: 'Korean'
    },
    {
        id: 'oldboy',
        title: 'Oldboy',
        year: 2003,
        rating: 94,
        genre: ['Thriller', 'Drama'],
        director: 'Park Chan-wook',
        cast: ['Choi Min-sik'],
        posterSearch: 'oldboy 2003 park chan-wook movie poster',
        reviews: [
            { text: 'Shocking masterpiece', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 96,
        criticsScore: 94,
        industry: 'Korean'
    },
    {
        id: 'memories_of_murder',
        title: 'Memories of Murder',
        year: 2003,
        rating: 93,
        genre: ['Crime', 'Drama'],
        director: 'Bong Joon-ho',
        cast: ['Song Kang-ho'],
        posterSearch: 'memories of murder 2003 bong joon-ho poster',
        reviews: [
            { text: 'Brilliant investigation story', sentiment: 'positive', author: 'Critic', source: 'Critics' }
        ],
        audienceScore: 95,
        criticsScore: 93,
        industry: 'Korean'
    },

    // ===== LATEST BOLLYWOOD 2024-2026 (Verified) =====

    // Dhurandhar (2025) — Dir: Aditya Dhar | Cast: Ranveer Singh, Akshaye Khanna, Sanjay Dutt, Arjun Rampal, R. Madhavan
    {
        id: 'dhurandhar',
        title: 'Dhurandhar',
        year: 2025,
        rating: 83,
        genre: ['Action', 'Spy', 'Thriller'],
        director: 'Aditya Dhar',
        cast: ['Ranveer Singh', 'Akshaye Khanna', 'Sanjay Dutt', 'Arjun Rampal', 'R. Madhavan'],
        posterSearch: 'Dhurandhar 2025 Ranveer Singh spy thriller',
        reviews: [
            { text: 'Aditya Dhar delivers another gripping spy thriller. Ranveer Singh is brilliant.', sentiment: 'positive', author: 'Bollywood Hungama', source: 'Critics' },
            { text: 'An intense, well-crafted espionage drama with a stellar ensemble cast', sentiment: 'positive', author: 'India Today', source: 'Critics' },
            { text: 'Ranveer and Akshaye Khanna are electric on screen together', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 85,
        criticsScore: 82,
        industry: 'Bollywood'
    },

    // Dhurandhar: The Revenge (2026) — Dir: Aditya Dhar | Released: 19 March 2026
    {
        id: 'dhurandhar_the_revenge',
        title: 'Dhurandhar: The Revenge',
        year: 2026,
        rating: 85,
        genre: ['Action', 'Spy', 'Thriller'],
        director: 'Aditya Dhar',
        cast: ['Ranveer Singh', 'Sanjay Dutt', 'Arjun Rampal', 'R. Madhavan', 'Sara Arjun'],
        posterSearch: 'Dhurandhar The Revenge 2026 Ranveer Singh sequel',
        reviews: [
            { text: 'A worthy sequel that raises the stakes and delivers on every front', sentiment: 'positive', author: 'Screen Daily', source: 'Critics' },
            { text: 'Ranveer Singh owns the screen in this explosive follow-up', sentiment: 'positive', author: 'Audience', source: 'Audience' },
            { text: 'Aditya Dhar continues to redefine Bollywood spy cinema', sentiment: 'positive', author: 'Bollywood Hungama', source: 'Critics' }
        ],
        audienceScore: 87,
        criticsScore: 83,
        industry: 'Bollywood'
    },

    // Sikandar (2025) — Dir: A.R. Murugadoss | Released: 30 March 2025
    {
        id: 'sikandar',
        title: 'Sikandar',
        year: 2025,
        rating: 72,
        genre: ['Action', 'Drama'],
        director: 'A.R. Murugadoss',
        cast: ['Salman Khan', 'Rashmika Mandanna', 'Kajal Aggarwal', 'Sathyaraj', 'Sharman Joshi', 'Prateik Babbar'],
        posterSearch: 'Sikandar 2025 Salman Khan A.R. Murugadoss movie poster',
        reviews: [
            { text: 'Salman Khan delivers his signature mass entertainer style', sentiment: 'positive', author: 'Audience', source: 'Audience' },
            { text: 'Murugadoss brings his trademark punch but the script feels recycled', sentiment: 'neutral', author: 'The Hindu', source: 'Critics' },
            { text: 'The action sequences are impressive but the story needed more depth', sentiment: 'neutral', author: 'India Today', source: 'Critics' }
        ],
        audienceScore: 76,
        criticsScore: 62,
        industry: 'Bollywood'
    },

    // Sky Force (2025) — Dir: Sandeep Kewlani & Abhishek Anil Kapur | Released: 24 Jan 2025
    {
        id: 'sky_force',
        title: 'Sky Force',
        year: 2025,
        rating: 75,
        genre: ['War', 'Action', 'Drama'],
        director: 'Sandeep Kewlani & Abhishek Anil Kapur',
        cast: ['Akshay Kumar', 'Veer Pahariya', 'Sara Ali Khan', 'Nimrat Kaur'],
        posterSearch: 'Sky Force 2025 Akshay Kumar Veer Pahariya Republic Day war film',
        reviews: [
            { text: 'A must-watch patriotic drama — Moneycontrol rates it 4/5', sentiment: 'positive', author: 'Moneycontrol', source: 'Critics' },
            { text: 'A fitting tribute that blends action with storytelling — ToI gives 3.5/5', sentiment: 'positive', author: 'Times of India', source: 'Critics' },
            { text: 'Veer Pahariya is a revelation. Good debut film.', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 78,
        criticsScore: 73,
        industry: 'Bollywood'
    },

    // Chhaava (2025) — Dir: Laxman Utekar | ₹800+ Cr worldwide gross
    {
        id: 'chhaava',
        title: 'Chhaava',
        year: 2025,
        rating: 88,
        genre: ['Historical', 'Action', 'Drama'],
        director: 'Laxman Utekar',
        cast: ['Vicky Kaushal', 'Rashmika Mandanna', 'Akshaye Khanna', 'Divya Dutta', 'Ashutosh Rana'],
        posterSearch: 'Chhaava 2025 Vicky Kaushal Sambhaji Maharaj Maddock Films',
        reviews: [
            { text: 'Vicky Kaushal delivers a powerhouse performance as Chhatrapati Sambhaji Maharaj', sentiment: 'positive', author: 'Forbes India', source: 'Critics' },
            { text: 'A grand historical epic — one of the highest-grossing Indian films of 2025 (₹800 Cr+)', sentiment: 'positive', author: 'Business Standard', source: 'Critics' },
            { text: 'Majestic in scale and deeply emotional — Akshaye Khanna is menacing as Aurangzeb', sentiment: 'positive', author: 'The Hindu', source: 'Critics' }
        ],
        audienceScore: 94,
        criticsScore: 85,
        industry: 'Bollywood'
    },

    // Baby John (2024) — Dir: Kalees | Released: 25 Dec 2024 | Remake of Theri
    {
        id: 'baby_john',
        title: 'Baby John',
        year: 2024,
        rating: 48,
        genre: ['Action', 'Thriller'],
        director: 'Kalees',
        cast: ['Varun Dhawan', 'Keerthy Suresh', 'Wamiqa Gabbi', 'Jackie Shroff'],
        posterSearch: 'Baby John 2024 Varun Dhawan Keerthy Suresh Christmas release',
        reviews: [
            { text: 'Varun Dhawan tries hard but this Theri remake fails to match the original', sentiment: 'negative', author: 'Indian Express', source: 'Critics' },
            { text: 'A major commercial disappointment — ₹57 Cr worldwide on a ₹170 Cr budget', sentiment: 'negative', author: 'Koimoi', source: 'Critics' },
            { text: 'Keerthy Suresh makes a decent Hindi debut but the script lets everyone down', sentiment: 'neutral', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 45,
        criticsScore: 35,
        industry: 'Bollywood'
    },

    // Azaad (2025) — Dir: Abhishek Kapoor | Ajay Devgn's cousin Aaman Devgan's debut
    {
        id: 'azaad',
        title: 'Azaad',
        year: 2025,
        rating: 62,
        genre: ['Action', 'Adventure', 'Period'],
        director: 'Abhishek Kapoor',
        cast: ['Ajay Devgn', 'Aaman Devgan', 'Rasha Thadani'],
        posterSearch: 'Azaad 2025 Ajay Devgn Aaman Devgan period adventure',
        reviews: [
            { text: 'A glossy period adventure — Aaman Devgan makes a confident debut', sentiment: 'positive', author: 'FilmFare', source: 'Critics' },
            { text: 'Familiar revenge story elevated by grand production design and Ajay Devgn\'s screen presence', sentiment: 'neutral', author: 'Times of India', source: 'Critics' },
            { text: 'Entertaining in parts but drags in the second half', sentiment: 'neutral', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 65,
        criticsScore: 58,
        industry: 'Bollywood'
    },

    // Loveyapa (2025) — Dir: Advait Chandan | Junaid Khan & Khushi Kapoor debut
    {
        id: 'loveyapa',
        title: 'Loveyapa',
        year: 2025,
        rating: 58,
        genre: ['Romance', 'Comedy'],
        director: 'Advait Chandan',
        cast: ['Junaid Khan', 'Khushi Kapoor'],
        posterSearch: 'Loveyapa 2025 Junaid Khan Khushi Kapoor Valentine romance debut',
        reviews: [
            { text: 'Both leads have undeniable charm though the script is formulaic', sentiment: 'neutral', author: 'India Today', source: 'Critics' },
            { text: 'A sweet but forgettable Valentine\'s day romance', sentiment: 'neutral', author: 'Hindustan Times', source: 'Critics' },
            { text: 'Fun chemistry between Junaid and Khushi keeps it watchable', sentiment: 'positive', author: 'Audience', source: 'Audience' }
        ],
        audienceScore: 62,
        criticsScore: 52,
        industry: 'Bollywood'
    }
];

// Helper to get a deterministic poster URL
export function getPosterUrl(posterSearch) {
    const encodedQuery = encodeURIComponent(posterSearch);
    return `https://source.unsplash.com/featured/?${encodedQuery}`;
}

// Search function with smart matching
export function searchMovies(query) {
    if (!query.trim()) return [];

    const normalizedQuery = query.toLowerCase().trim();

    return moviesDatabase.filter(movie => {
        const normalizedTitle = movie.title.toLowerCase();
        return normalizedTitle.includes(normalizedQuery) ||
            normalizedQuery.includes(normalizedTitle) ||
            normalizedTitle.split(' ').some(word => word.startsWith(normalizedQuery));
    }).sort((a, b) => {
        // Exact matches first
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();

        if (aTitle === normalizedQuery) return -1;
        if (bTitle === normalizedQuery) return 1;

        // Then starts with
        if (aTitle.startsWith(normalizedQuery) && !bTitle.startsWith(normalizedQuery)) return -1;
        if (!aTitle.startsWith(normalizedQuery) && bTitle.startsWith(normalizedQuery)) return 1;

        // Then by rating
        return b.rating - a.rating;
    });
}

export function getMovieById(id) {
    return moviesDatabase.find(movie => movie.id === id);
}
