<template>
    <div class="light-purple text-white px-3 pt-10 md:px-10">
        <p class="painpoints-heading">Your time as an agency owner is <span
                class="font-serif-italic text-primary-color">priceless</span> and you don't want to:</p>

        <div class="painpoints-splide">
            <Splide :options="options" :has-track="false">
                <div>
                    <SplideTrack>
                        <SplideSlide>
                            <div class=" static">
                                <img class="painpoints-img " src="../assets/img/nope.png" alt="Limited Resources">
                                <div class="absolute bottom-10 p-10">
                                    <p class="painpoints-title "><span class="uppercase">Waste Time and money</span>
                                        <br>
                                        <span class="font-serif-italic">on unreliable freelancers</span>
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </div>
            </Splide>
        </div>

        <p class="painpoints-caption">
            It's time to <span class="highlight">get back on track</span> and focus on what you do best - serving your
            clients.
        </p>
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
            gap: '1.5rem',
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

            pagination: false
        };


        return {
            options
        }

    },

}
</script>