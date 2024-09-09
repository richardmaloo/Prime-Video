import apiUrls from "@/config/api-urls"
import httpApi from "@/utils/http-api"
import DetailMovieInfo from "@/components/detail/DetailMovieInfo.vue"
import DetailRelatedMovie from "@/components/detail/DetailRelatedMovie.vue"

export default {
    name: 'detail',
    components: {
        DetailMovieInfo,
        DetailRelatedMovie
    },

    data () {
        return {
            movieDetail: {},
            uniqueKey: 0
        }
    },

    created () {
        this.getMovieDetail()
    },

    methods: {
        async getMovieDetail () {
            const response = await httpApi.getRequest(apiUrls.Detail(this.$route.params.id))
            this.movieDetail = response.data
        },

        async refreshMovie (movieId) {
            await this.$router.push({
                name: 'Detail',
                params: {
                    id: movieId
                }
            })
            this.getMovieDetail()
            this.reloadComponent()
        },

        reloadComponent () {
            this.uniqueKey += 1
        }
    }
}