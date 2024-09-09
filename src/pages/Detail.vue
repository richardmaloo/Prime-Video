<template>
    <div class="detail">
        <DetailMovieInfo
            :movie-detail="movieDetail"
        />
        <DetailRelatedMovie 
            :key="uniqueKey"
            @refresh-movie="refreshMovie"
        />
    </div>
</template>

<script src="./js/detail.js"></script>

<style scoped lang="scss">
    .detail {
        background-color: #00050D;
        min-height: 100vh;
        overflow-x: hidden;
    }
</style>