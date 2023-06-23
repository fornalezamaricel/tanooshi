<template>
    <div class="bg-primary-accent">
        <div class="overflow-hidden">
            <div class="scrolling-text text-white">
                Proudly designed for people. Proudly designed for people. Proudly designed for people
            </div>
        </div>
        <div class="video-testimonial">
            <iframe width="150%" height="100%"
                src="https://www.youtube.com/embed/8LSt8_11wbQ?controls=0&autoplay=1&mute=1&loop=1" title="Social Reel"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <div>
            <h4 class="testimonial-heading"><span class="font-serif-italic">Why us? </span> <br><span class="uppercase">Ask
                    them.</span></h4>
            <div class="testimonial-splide mb-10">
                <Splide :options="options" :has-track="false" :extensions="extensions">
                    <div>
                        <SplideTrack>
                            <SplideSlide v-for="testimonial in Testimonials" :key="testimonial">
                                <div class="testimonials">
                                    <img v-for="n in testimonial.star" :key="n" class="star "
                                        src="../assets/svg/icon-rating.svg">
                                    <p class="title">{{ testimonial.title }}</p>
                                    <p class="testimonial">{{ testimonial.testimonial }}</p>
                                    <p class="company">{{ testimonial.company }}</p>
                                </div>
                            </SplideSlide>
                        </SplideTrack>
                    </div>
                </Splide>
            </div>
            <div class="testimonial-splide">
                <Splide :options="options2" :has-track="false" :extensions="extensions">
                    <div>
                        <SplideTrack>
                            <SplideSlide v-for="testimonial in Testimonials" :key="testimonial">
                                <div class="testimonials">
                                    <img v-for="n in testimonial.star" :key="n" class="star "
                                        src="../assets/svg/icon-rating.svg">
                                    <p class="title">{{ testimonial.title }}</p>
                                    <p class="testimonial">{{ testimonial.testimonial }}</p>
                                    <p class="company">{{ testimonial.company }}</p>
                                </div>
                            </SplideSlide>
                        </SplideTrack>
                    </div>
                </Splide>
            </div>
            <div class="flex justify-center"><button class="secondary-button">
                    See our works
                </button></div>

        </div>
        <div class="overflow-hidden">
            <div class="scrolling-text text-black/80">
                worth flexing sites. worth flexing sites. worth flexing sites.
            </div>
        </div>

    </div>
</template>
<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import Testimonials from "../assets/data/testimonials.json"
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
export default {
    mounted() {
        AutoScroll
    },
    components: {
        Splide, SplideSlide, SplideTrack
    },
    setup() {

        const options = {
            type: 'loop',
            gap: '0rem',
            autoplay: true,
            arrows: false,
            width: 'fit-content',
            perPage: 3,
            breakpoints: {
                767: {
                    perPage: 1
                },
                912: {
                    perPage: 2
                }

            },

            pagination: false,

            autoScroll: {
                speed: 1,
                pauseOnHover: true,
                pauseOnFocus: false,
            }
        };
        const options2 = {
            type: 'loop',
            gap: '0rem',
            autoplay: true,
            arrows: false,
            width: 'fit-content',
            perPage: 3,
            breakpoints: {
                767: {
                    perPage: 1
                },
                912: {
                    perPage: 2
                }

            },

            pagination: false,

            autoScroll: {
                speed: -1,
                pauseOnHover: true,
                pauseOnFocus: false,
            }
        };


        return {
            options, options2, Testimonials, extensions: { AutoScroll },
        }

    },


}

</script>