<template>
    <div class="home">
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
        margin-left: 40px;
        overflow-x: hidden;
    }
</style>