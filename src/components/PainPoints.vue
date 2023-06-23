<template>
    <div class="light-purple text-white pt-10 ">
        <p class="painpoints-heading px-5 md:px-10">Your time as an agency owner is <span
                class="font-serif-italic text-primary-color">priceless</span> and you don't want to:</p>

        <div class="painpoints-splide">
            <Splide :options="options" :has-track="false">
                <div>
                    <SplideTrack>
                        <SplideSlide>
                            <div class=" static">
                                <img class="painpoints-img " src="../assets/gif/nope.gif" alt="Limited Resources">


                                <div class="absolute bottom-10 p-10">
                                    <p class="painpoints-title "><span class="uppercase">Waste Time and money</span>
                                        <br>
                                        <span class="font-serif-italic">on unreliable freelancers</span>
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class=" static">
                                <img class="painpoints-img " src="../assets/gif/no-way.gif" alt="Limited Resources">
                                <div class="absolute bottom-10 p-10">
                                    <p class="painpoints-title "><span class="uppercase">Worry about the cost of</span>
                                        <br>
                                        <span class="font-serif-italic">in-house developers</span>
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class=" static">
                                <img class="painpoints-img " src="../assets/gif/no.gif" alt="Limited Resources">
                                <div class="absolute bottom-10 p-10">
                                    <p class="painpoints-title "><span class="uppercase">Spend time on</span>
                                        <br>
                                        <span class="font-serif-italic">training newbies</span>
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class=" static">
                                <img class="painpoints-img " src="../assets/gif/do-not-want.gif" alt="Limited Resources">
                                <div class="absolute bottom-10 p-10">
                                    <p class="painpoints-title "><span class="uppercase">Struggle to</span>
                                        <br>
                                        <span class="font-serif-italic">keep up with the trends</span>
                                    </p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div class=" static">
                                <img class="painpoints-img " src="../assets/gif/never.gif" alt="Limited Resources">
                                <div class="absolute bottom-10 p-10">
                                    <p class="painpoints-title "><span class="uppercase">Deal with</span>
                                        <br>
                                        <span class="font-serif-italic">unhappy clients</span>
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
            gap: '1rem',
            autoplay: true,
            arrows: false,
            width: 'fit-content',
            padding: '3rem',
            perPage: 3,
            breakpoints: {
                767: {
                    perPage: 1
                },
                912: {
                    perPage: 2
                },
                1536: {

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