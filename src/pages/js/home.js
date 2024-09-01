import apiUrls from "@/config/api-urls"
import HomeRowMovies from "@/components/home/HomeRowMovies.vue"

export default {
    name: 'home',
    components: {
        HomeRowMovies
    },
    data () {
        return {
            titles: Object.keys(apiUrls)
        }
    }
}