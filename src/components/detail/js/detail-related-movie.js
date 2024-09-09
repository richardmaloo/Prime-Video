import httpApi from "@/utils/http-api"
import apiUrls from "@/config/api-urls"
import HomeCardMovie from "@/components/home/HomeCardMovie.vue"
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'detail-related-movie',
    components: {
        HomeCardMovie,
        VueperSlide,
        VueperSlides
    },

    data () {
        return {
            movies: []
        }
    },

    created () {
        this.getRelatedMovies()
    },

    methods: {
        async getRelatedMovies () {
            const response = await httpApi.getRequest(apiUrls.Related(this.$route.params.id))
            this.movies = response.data.results
        },

        goToDetailPage (movieId) {
            this.$emit('refresh-movie', movieId)
            // this.$router.push({
            //     name: 'Detail',
            //     params: {
            //         id: movieId
            //     }
            // })
        }
    }
}