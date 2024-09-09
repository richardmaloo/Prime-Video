<template>
    <div class="navigation-bar">
        <div class="navigation-bar__left-section left-section">
            <div class="left-section__brand-name">
                <router-link to="/" class="left-section__link">Prime Video</router-link>
            </div>
            <div class="left-section__navigation-item">
                <router-link to="/" class="left-section__link">Home</router-link>
            </div>
            <div class="left-section__navigation-item">
                <router-link to="/movies" class="left-section__link">Movies</router-link>
            </div>
            <div class="left-section__navigation-item">
                <router-link to="/tv-shows" class="left-section__link">TV Shows</router-link>
            </div>
            <div class="left-section__navigation-item">Sports</div>
            <div class="left-section__navigation-item">Live TV</div>
        </div>
        <div class="navigation-bar__right-section right-section">
            <el-icon>
                <Search />
            </el-icon>
            <el-icon>
                <User />
            </el-icon>
        </div>
    </div>
</template>

<script src="./js/navigation-bar.js"></script>

<style scoped lang="scss">
    .navigation-bar {
        width: 90%;
        height: 80px;
        background-color: #141921;
        color: white;
        margin: auto;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;

        .left-section {
            display: flex;
            gap: 30px;

            &__brand-name {
                font-weight: bold;
            }

            &__link {
                text-decoration: none;
                color: white;
            }
        }

        .right-section {
            display: flex;
            gap: 20px;
        }
    }
</style>