<template>
    <div class="brands">
        <p class="brands-title">Brands</p>
        <p class="brands-title-highlight md:ml-40">insanely</p>
        <p class="brands-title">love us</p>
        <div class="brands-logo">
            <div class="brands-splide">
                <Splide :options="options" :has-track="false">
                    <div>
                        <SplideTrack>
                            <SplideSlide class="logo-slide">
                                <div class="logo">Canva</div>
                            </SplideSlide>
                            <SplideSlide class="logo-slide">
                                <div class="logo">remrise</div>
                            </SplideSlide>
                        </SplideTrack>
                    </div>
                </Splide>
            </div>
        </div>
        <p class="brands-title md:text-left md:ml-20 lg:ml-60">and we <span class="brands-title-highlight">can't</span></p>
        <p class="brands-title md:ml-20"><span class="brands-title-highlight">blame</span> them</p>
    </div>
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
            gap: '0rem',
            autoplay: true,
            arrows: false,
            width: 'fit-content',
            perPage: 3,
            mediaQuery: 'min',
            breakpoints: {
                820: {
                    perPage: 4
                },
                1024: {
                    perPage: 5
                },



            },

            pagination: false
        };


        return {
            options
        }

    },

}

</script>