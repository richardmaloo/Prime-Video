<template>
    <div 
        :style="{ backgroundImage: `url(${baseImageURL}${movie.poster_path})` }"
        class="home-card-movie"
    >

    </div>
</template>

<script src="./js/home-card-movie.js"></script>

<style scoped lang="scss">
    .home-card-movie {
        height: 225px;
        width: 150px;
        border-radius: 8px;
        background-size: cover;
    }
</style>
