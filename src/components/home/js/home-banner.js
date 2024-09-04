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

    created () {
        this.getMovie()
    },

    methods: {
        async getMovie () {
            const response = await httpApi.getRequest(apiUrls[this.movieCategory])
            this.movie = response.data.results[0]
        }
    }
}