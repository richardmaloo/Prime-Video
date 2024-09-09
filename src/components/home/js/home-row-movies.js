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

    computed: {
        URL () {
            if (this.$route.name === 'Movies') {
                return apiUrls.Movies[this.title]
            } else if (this.$route.name === 'TV Shows') {
                return apiUrls['TV Shows'][this.title]
            } else {
                return apiUrls[this.title]
            }
        }
    },

    created () {
        this.getMovie()
    },

    methods: {
        async getMovie () {
            const response = await httpApi.getRequest(this.URL)
            this.movies = response.data.results
        },

        goToDetailPage (movieId) {
            this.$router.push({
                name: 'Detail',
                params: {
                    id: movieId
                }
            })
        }
    }
}