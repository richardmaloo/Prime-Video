<template>
    <div class="home">
        <HomeRowMovies
            v-for="movie in titles"
            :title="movie"
        />
    </div>
</template>

<script src="./js/home.js"></script>

<style scoped lang="scss"></style>