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
        }
    },

    created () {
        this.getMovieDetail()
    },

    methods: {
        async getMovieDetail () {
            const response = await httpApi.getRequest(apiUrls.Detail(this.$route.params.id))
            this.movieDetail = response.data
            console.log(response)
        },
    }
}