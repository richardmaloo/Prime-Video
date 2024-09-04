<template>
    <div class="home">
        <HomeBanner
            :movie-category="titles[0]"
        />
        <HomeRowMovies
            v-for="movie in titles"
            :title="movie"
        />
    </div>
</template>

<script src="./js/home.js"></script>

<style scoped lang="scss">
    .home {
        background-color: #00050D;
        min-height: 100vh;
        overflow-x: hidden;
    }
</style>