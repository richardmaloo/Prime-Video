export default {
    name: 'detail-movie-info',
    props: {
        movieDetail: {
            type: Object,
            required: true
        }
    },
    
    data () {
        return {
            baseImageURL: 'https://image.tmdb.org/t/p/original'
        }
    },
}