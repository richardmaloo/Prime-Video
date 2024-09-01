<template>
    <div class="home-row-movies">
        <div class="home-row-movies__header header">
            {{ title }}
        </div>
        <div class="home-row-movies__cards cards">
        <vueper-slides 
            :bullets="false"
            :visible-slides="9"
            slide-multiple
            fixed-height="225px"
        >
            <vueper-slide v-for="movie in movies">
                <template #content>
                    <div class="vueperslide__content-wrapper">
                        <HomeCardMovie :movie="movie"/>
                    </div>
                </template>
            </vueper-slide>
        </vueper-slides>
        </div>
    </div>
</template>

<script src="./js/home-row-movies.js"></script>

<style scoped lang="scss">
    .home-row-movies {
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