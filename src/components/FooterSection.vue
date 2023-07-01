<template>
    <div>
        <div class="contacts bg-primary-accent">
            <div>
                <p>San Andres, Bicol, Philippines, 4810</p>
                <p class="underline">+639 6205 56131</p>
                <p class="underline">tanooshi.studio@gmail.com</p>
            </div>

            <div class="arrow cursor-pointer" @click="goTo('home')"><img class="md:h-[50px] xl:h-[75px] 2xl:h-[100px]"
                    src="../assets/img/arrow.svg" alt="">
            </div>

        </div>
        <div class="bg-black">
            <div class="overflow-hidden bg-primary-color text-white py-5 rounded-b-3xl">
                <div class="scrolling-text font-normal uppercase ">
                    We build websites that are worth flexing.
                    We build websites that are worth flexing.
                </div>
            </div>
        </div>


        <div class="bg-black">
            <div class="overflow-hidden py-5 text-primary-color rounded-b-3xl">
                <div class=" whitespace-nowrap leading-none text-center uppercase text-[20rem] ">
                    tanooshi

                </div>
            </div>
            <button class="secondary-button text-white w-full lg:py-20 lg:text-4xl">GET IN <span
                    class="font-serif-italic lowercase">touch</span></button>
            <div class="social-media">
                <p>Instagram</p>
                <p>Behance</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goTo(el) {
            this.$emit("scrollToElement", el)
        }
    }
}
</script>