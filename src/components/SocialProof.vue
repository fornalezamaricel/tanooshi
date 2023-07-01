<template>
    <main class="bg-black">
        <div class="social-reel">
            <div class="p-10 pb-2 md:pb-5 md:p-20">
                <h2 class="social-heading ">
                    Designs for
                    <span class="font-serif-italic"><span class="text-primary-accent">unstopable</span> brands.</span>
                </h2>
            </div>
            <div class="reel-container">
                <iframe width="150%" height="100%"
                    src="https://www.youtube.com/embed/NqWP-pl1CfQ?controls=0&autoplay=1&mute=1&loop=1" title="Social Reel"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
        </div>

        <div class="socials text-white">
            <div class="title">Our <span class="title-accent ">serious clients</span> are
                making the
                headlines, and we're just happy to be along
                for the ride. </div>
            <div class="social-splide">
                <Splide :options="options" :has-track="false">
                    <div class="relative">
                        <SplideTrack>

                            <SplideSlide>
                                <img class="mx-auto md:h-[70px] 2xl:h-[100px]  " src="../assets/svg/logo-abc.svg" alt="ABC">
                            </SplideSlide>
                            <SplideSlide>
                                <img class="mx-auto md:h-[70px] 2xl:h-[100px]  " src="../assets/svg/logo-buzzfeed.svg"
                                    alt="Buzzfeed">
                            </SplideSlide>
                            <SplideSlide>
                                <img class="mx-auto md:h-[70px] 2xl:h-[100px]  " src="../assets/svg/logo-dji.svg" alt="DJI">
                            </SplideSlide>
                            <SplideSlide>
                                <img class="mx-auto md:h-[70px] 2xl:h-[100px]  " src="../assets/svg/logo-forbes.svg"
                                    alt="Forbes">
                            </SplideSlide>
                            <SplideSlide>
                                <img class="mx-auto md:h-[70px] 2xl:h-[100px]  " src="../assets/svg/logo-fox-news.svg"
                                    alt="Fox News">
                            </SplideSlide>
                            <SplideSlide>
                                <img class="mx-auto md:h-[70px] 2xl:h-[100px]  " src="../assets/svg/logo-imdb.svg"
                                    alt="IMDB">
                            </SplideSlide>
                            <SplideSlide>
                                <img class="mx-auto md:h-[70px] 2xl:h-[100px]  " src="../assets/svg/logo-techcrunch.svg"
                                    alt="Techcrunch">
                            </SplideSlide>


                        </SplideTrack>

                    </div>


                </Splide>
            </div>

        </div>
    </main>
</template>
<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';


export default {
    components: {
        Splide, SplideSlide, SplideTrack
    },
    setup() {

        const options = {
            type: 'loop',
            gap: '1rem',
            autoplay: true,
            arrows: false,
            width: 'fit-content',
            perPage: 3,
            mediaQuery: 'min',
            breakpoints: {
                1024: {
                    perPage: 4
                },
                1280: {
                    perPage: 5
                },


            },
            pagination: false
        };

        return {
            options,
        }

    },

}

</script>