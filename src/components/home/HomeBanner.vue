<template>
    <div 
        :style="{ backgroundImage: `url(${baseImageURL}${movie.backdrop_path})` }"
        class="home-banner"
    >
        <div class="home-banner__contents contents">
            <div class="contents__title">
                {{ movie.original_name || movie.original_title }}
            </div>
            <div class="contents__description">
                {{ movie.overview }}
            </div>
        </div>

        <div class="home-banner__shadow"></div>
    </div>
</template>

<script src="./js/home-banner.js"></script>

<style scoped lang="scss">
    .home-banner {
        height: 500px;
        width: 100%;
        background-size: cover;
        background-position: center;
        margin-bottom: 30px;

        .contents {
            box-sizing: border-box;
            padding-top: 140px;
            margin-left: 60px;
            color: white;
            width: 45%;
            height: 400px;
            
            &__title {
                font-size: 48px;
                font-weight: bold;
            }

            &__description {
                font-size: 14px;
                font-weight: bold;
            }
        }

        &__shadow{
            background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, .61), #111);
            height: 100px;
            width: 100%;
        }
    }
</style>