<template>
    <div class="bg-black text-white pt-10 px-2 2xl:pt-40 ">
        <h4 class="works-heading"><span class="font-serif-italic">Featured</span><br> Works</h4>
        <div class="works">
            <div class="work-container" v-for="work in works" :key="work">
                <img :src="`../src/assets/img/works/${work.img}`" :alt="work.title" width="500px" height="500px"
                    class="work-img">
                <div class="description">
                    <p class="font-serif-italic text-3xl 2xl:text-5xl">{{ work.title }}</p>
                    <div class="flex justify-between text-sm md:w-1/3 2xl:text-2xl">
                        <p>{{ work.role }}</p>
                        <p>{{ work.year }}</p>
                    </div>


                </div>

            </div>

        </div>
        <div class="text-center py-20"><button class="text-btn">See More Works</button></div>

    </div>
</template>
<script>
import works from "../assets/data/works.json"
export default {
    data() {
        return {
            works
        }
    }
}
</script>