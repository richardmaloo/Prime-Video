import httpApi from "@/utils/http-api"
import apiUrls from "@/config/api-urls"

export default {
    name: 'home-row-movies',
    props: {
        title: {
            type: String,
            required: true
        }
    },

    created () {
        this.getMovie()
    },

    methods: {
        async getMovie () {
            const response = await httpApi.getRequest(apiUrls[this.title])
            console.log(response)
        }
    }
}