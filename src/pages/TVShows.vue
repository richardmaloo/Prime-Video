<template>
    <div class="tv-shows">
        <HomeBanner
            :movie-category="titles[0]"
        />
        <HomeRowMovies
            v-for="movie in titles"
            :title="movie"
        />
    </div>
</template>

<script src="./js/tv-shows.js"></script>

<style scoped lang="scss">
    .tv-shows {
        background-color: #00050D;
        min-height: 100vh;
        overflow-x: hidden;
    }
</style>