<template>
    <div class="navigation-bar">
        <div class="navigation-bar__left-section left-section">
            <div class="left-section__brand-name">Prime Video</div>
            <div class="left-section__navigation-links">Home</div>
            <div class="left-section__navigation-links">Movies</div>
            <div class="left-section__navigation-links">TV Shows</div>
            <div class="left-section__navigation-links">Sports</div>
            <div class="left-section__navigation-links">Live TV</div>
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
        background-color: #00050D;
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
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-weight: bold;
            }

            &__navigation-links {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
        }

        .right-section {
            display: flex;
            gap: 20px;
        }
    }


</style>