<template>
    <div class="movies">
        <HomeBanner
            :movie-category="titles[0]"
        />
        <HomeRowMovies
            v-for="movie in titles"
            :title="movie"
        />
    </div>
</template>

<script src="./js/movies.js"></script>

<style scoped lang="scss">
    .movies {
        background-color: #00050D;
        min-height: 100vh;
        overflow-x: hidden;
    }
</style>