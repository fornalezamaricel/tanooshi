<template>
    <main class="bg-black">

        <div class="problems text-white">
            <div class="p-10 pb-2 md:pb-5 md:p-20">
                <h2 class="problem-heading ">
                    Scaling your agency can be a
                    <span class="font-serif-italic">real bummer.</span>
                </h2>
            </div>
            <div class="problem-splide">
                <Splide :options="options" :has-track="false">
                    <div class="relative">
                        <SplideTrack>
                            <SplideSlide>
                                <div class="problem-img-bg neon-green relative">
                                    <img class="problem-img " src="../assets/img/problems/img-kevin-hart-meme.png"
                                        alt="Limited Resources">
                                    <div class="absolute p-10">
                                        <p class="problem-title "><span class="font-serif-italic">Limited</span>
                                            <br>
                                            <span class="uppercase">resources</span>
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div class="problem-img-bg dark-purple relative">
                                    <img class="problem-img " src="../assets/img/problems/img-jackie-chan-meme.png"
                                        alt="High Client Demands">
                                    <div class="absolute p-10">
                                        <p class="problem-title"><span class="font-serif-italic">High</span>
                                            <span class="uppercase"> Client <br> Demands</span>
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div class="problem-img-bg light-purple relative">
                                    <img class="problem-img " src="../assets/img/problems/img-peter-parker-meme.png"
                                        alt="Tight deadlines">
                                    <div class="absolute p-10">
                                        <p class="problem-title"><span class="font-serif-italic">Tight</span>
                                            <br>
                                            <span class="uppercase">Deadlines</span>
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div class="problem-img-bg red relative">
                                    <img class="problem-img " src="../assets/img/problems/img-shaq-o-neil-meme.png"
                                        alt="Keeping Up with the Trend">
                                    <div class="absolute p-10">
                                        <p class="problem-title"><span class="font-serif-italic">Keeping Up</span>
                                            <span class="uppercase"> With <br> the trend</span>
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div class="problem-img-bg light-purple relative">
                                    <img class="problem-img " src="../assets/img/problems/img-dog-meme.png"
                                        alt="Finding skilled Developers">
                                    <div class="absolute p-10">
                                        <p class="problem-title"><span class="font-serif-italic">Finding
                                            </span>
                                            <span class="uppercase"> Skilled <br> developers</span>
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>


                        </SplideTrack>

                    </div>


                </Splide>
            </div>
            <div class="problem-last-container">
                <div class="p-10 pt-20 md:pb-5 md:p-20">
                    <h2 class="problem-last-heading ">
                        You've
                        <span class="font-serif-italic">crazily</span>
                        tried everything.
                    </h2>
                </div>
                <div class="caption-container">
                    <p class="caption">From finding new freelancers, training, in-house developes, hiring a consultant, even
                        investing in
                        courses. .</p>
                    <p class="caption"> Still, the results aren't what you want. </p>
                    <p class="caption">But it doesn't have to be this way.</p>

                </div>
                <div class="overflow-hidden">
                    <div class="scrolling-text">
                        Insanely pretty websites that works. Insanely pretty websites that works. Insanely pretty websites
                        that works
                    </div>
                </div>



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

            pagination: false
        };


        return {
            options
        }

    },

}

</script>