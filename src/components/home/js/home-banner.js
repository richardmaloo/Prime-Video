import httpApi from "@/utils/http-api"
import apiUrls from "@/config/api-urls"

export default {
    name: 'home-banner',
    props: {
        movieCategory: {
            type: String,
            required: true
        }
    },

    data () {
        return {
            baseImageURL: 'https://image.tmdb.org/t/p/original',
            movie: {}
        }
    },

    computed: {
        URL () {
            if (this.$route.name === 'Movies') {
                return apiUrls.Movies[this.movieCategory]
            } else if (this.$route.name === 'TV Shows') {
                return apiUrls['TV Shows'][this.movieCategory]
            } else {
                return apiUrls[this.movieCategory]
            }
        }
    },

    created () {
        this.getMovie()
    },

    methods: {
        async getMovie () {
            const response = await httpApi.getRequest(this.URL)
            this.movie = response.data.results[0]
        }
    }
}