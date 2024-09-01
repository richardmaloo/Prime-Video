import httpApi from "@/utils/http-api"
import apiUrls from "@/config/api-urls"
import HomeCardMovie from "../HomeCardMovie.vue"
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'home-row-movies',
    components: {
        HomeCardMovie,
        VueperSlide,
        VueperSlides
    },
    props: {
        title: {
            type: String,
            required: true
        }
    },

    data () {
        return {
            movies: []
        }
    },

    created () {
        this.getMovie()
    },

    methods: {
        async getMovie () {
            const response = await httpApi.getRequest(apiUrls[this.title])
            this.movies = response.data.results
        }
    }
}