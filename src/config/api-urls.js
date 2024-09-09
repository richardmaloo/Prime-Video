const API_KEY='9231b92caa6e9a12be4d27928963ac07'

export default {
    Originals: `/discover/tv?api_key=${API_KEY}&with_networks=21`,
    Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    'Top Rated': `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    Comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    Horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomCom: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    Detail: (id) => `/movie/${id}?api_key=${API_KEY}`,
    Related: (id) => `/movie/${id}/similar?api_key=${API_KEY}`,
    Movies: {
        Action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        SciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
        Thriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    },
    'TV Shows': {
        Crime: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
        Documentary: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        Drama: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    }
}