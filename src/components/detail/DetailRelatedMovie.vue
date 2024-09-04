<template>
    <div class="detail-related-movie">
        <div class="detail-related-movie__header header">
            Related
        </div>
        <div class="detail-related-movie__cards cards">
        <vueper-slides 
            :bullets="false"
            :visible-slides="9"
            slide-multiple
            fixed-height="225px"
        >
            <vueper-slide v-for="movie in movies">
                <template #content>
                    <div
                        class="vueperslide__content-wrapper"
                        @click="goToDetailPage(movie.id)"
                    >
                        <HomeCardMovie :movie="movie"/>
                    </div>
                </template>
            </vueper-slide>
        </vueper-slides>
        </div>
    </div>
</template>

<script src="./js/detail-related-movie.js"></script>

<style scoped lang="scss">
    .detail-related-movie {
        margin-left: 40px;

        .header {
            color: white;
            font-weight: bold;
            margin-bottom: 30px;
        }

        .cards {
            max-width: calc(100vw - 150px);
            margin: auto;
        }
    }

    :deep(.vueperslides__arrow) {
        color: white
    }
</style>