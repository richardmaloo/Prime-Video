<template>
    <div 
        :style="{ background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${baseImageURL}${movieDetail.backdrop_path})` }"
        class="detail-movie-info"
    >
        <div class="detail-movie-info__contents contents">
            <div class="contents__title">
                {{ movieDetail.original_title }}
            </div>
            <div class="contents__description">
                {{ movieDetail.overview }}
            </div>
            <div class="contents__info info">
                <div class="info__rating">
                    IMDb {{ movieDetail.vote_average }}
                </div>
                <div class="info__runtime">
                    {{ movieDetail.runtime }}m
                </div>
                <div class="info__release-date">
                    {{ movieDetail.release_date }}
                </div>
            </div>
            <div class="contents__genre genre">
                <div
                    v-for="(genre, index) in movieDetail.genres"
                    class="genre__text text"
                >
                    <div class="text__name">
                        {{ genre.name }}
                    </div>
                    <div 
                        v-if="index !== movieDetail.genres.length - 1"
                        class="text__dot"
                    >
                        •
                    </div>
                </div>
            </div>
        </div>

        <div class="detail-movie-info__shadow"></div>
    </div>
</template>

<script src="./js/detail-movie-info.js"></script>

<style scoped lang="scss">
    .detail-movie-info {
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

            .info {
                display: flex;
                gap: 20px;
                margin-top: 10px;
                color: #929293;
                font-weight: bold;
            }

            .genre {
                display: flex;
                gap: 10px;
                margin-top: 10px;
                color: white;
                font-weight: bold;

                .text {
                    display: flex;
                    gap: 10px;

                    &__name {
                        text-decoration: underline;
                    }
                }
            }
        }

        &__shadow {
            background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, .61), #111);
            height: 100px;
            width: 100%;
        }
    }
</style>