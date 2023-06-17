<template>
    <div>
        <div class="p-10 2xl:p-20">
            <h4 class="benefits-heading text-center">Do <span class="font-serif-italic">more</span> with Tanooshi <span
                    class="font-serif-italic">literally</span></h4>
            <div class="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:mt-10 2xl:gap-20">
                <div>
                    <Vue3Lottie class="benefits-icon bell" :animationData="notificatioBell" :loop="true" :speed="1"
                        :autoPlay="true" />
                    <p class="benefits-caption">Score more projects than ever before</p>
                </div>
                <div>
                    <Vue3Lottie class="benefits-icon" :animationData="dollarDonations" :loop="true" :speed="1"
                        :autoPlay="true" />
                    <p class="benefits-caption">Boost your savings by a whopping 7.5x</p>
                </div>
                <div>
                    <Vue3Lottie class="benefits-icon" :animationData="customerService" :loop="true" :speed="1"
                        :autoPlay="true" />
                    <p class="benefits-caption">Happy self + clients</p>
                </div>

            </div>

        </div>
        <div class="benefits-testimonial">
            <img src="../assets/svg/icon-quote.svg" class="quote-icon">
            <p class="testimonial">It's my <span class="font-serif-italic">first time</span> to hire and I'm impressed.</p>
            <p class="company">remrise</p>
        </div>

    </div>
</template>
<script>
import { Vue3Lottie } from "vue3-lottie";
import dollarDonations from "../assets/data/dollar-donation.json"
import notificatioBell from "../assets/data/notification-bell.json"
import customerService from "../assets/data/customer-service-chat.json"
export default {
    components: {
        Vue3Lottie
    },
    data() {
        return {
            dollarDonations, notificatioBell, customerService
        }

    }
}
</script>