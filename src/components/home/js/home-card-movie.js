export default {
    name: 'home-card-movie',
    props: {
        movie: {
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