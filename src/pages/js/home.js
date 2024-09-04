import apiUrls from "@/config/api-urls"
import HomeRowMovies from "@/components/home/HomeRowMovies.vue"
import HomeBanner from "@/components/home/HomeBanner.vue"

export default {
    name: 'home',
    components: {
        HomeRowMovies,
        HomeBanner
    },
    data () {
        return {
            titles: Object.keys(apiUrls)
        }
    }
}