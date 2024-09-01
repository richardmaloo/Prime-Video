const API_KEY='9231b92caa6e9a12be4d27928963ac07'

export default {
    Action: `/movie/now_playing?api_key=${API_KEY}&region=US&with_genres=28`,
    Comedy: `/movie/now_playing?api_key=${API_KEY}&region=US&with_genres=35`,
    Horror: `/movie/now_playing?api_key=${API_KEY}&region=US&with_genres=27`,
    Romance: `/movie/now_playing?api_key=${API_KEY}&region=US&with_genres=10749`,
    Documentaries: `/movie/now_playing?api_key=${API_KEY}&region=US&with_genres=99`
}