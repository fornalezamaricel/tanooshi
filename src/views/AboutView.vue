<template>
    <div class="bg-black pt-40 parallax-wrapper lg:pt-28 2xl:pt-40">

        <!-- https://github.com/KiaanCastillo/Pure-CSS-Multilayer-Parallax/blob/master/css/main.css 
        https://codepen.io/pehaa/pen/zYxbxQg
    https://freefrontend.com/css-parallax/-->

        <h1 class="heading-text about">Meet <br><span class="text-primary-accent">Tanooshi</span></h1>
        <div class="parallax-group">
            <div class="parallax-layer envelop">
                <img src="../assets/img/about/img-maricel-luxury-bag-envelop.png" alt="">
            </div>
            <div class="parallax-layer phone">
                <img src="../assets/img/about/img-maricel-luxury-bag-iphone.png" alt="">
            </div>
            <div class="parallax-layer laptop">
                <img src="../assets/img/about/img-maricel-luxury-bag-tablet-website-design.png" alt="">
            </div>
            <div class="parallax-layer card-pen">
                <img src="../assets/img/about/img-maricel-luxury-bag-pen-and-business-card.png" alt="">
            </div>
            <div class="parallax-layer card">
                <img src="../assets/img/about/img-maricel-luxury-bag-business-card.png" alt="">
            </div>
            <div class="parallax-layer brand">
                <img src="../assets/img/about/img-maricel-luxury-bag-brand-colors.png" alt="">
            </div>
        </div>


        <div class="pt-20 px-5 md:px-28 parallax-group !h-fit z-50 bg-[#000000]">
            <h2 class=" about-h2">We're designers, developers, strategists, and <span
                    class="font-serif-italic">awkward</span> dancers.</h2>
            <button class="btn-primary mx-auto flex gap-5 items-center md:text-xl 2xl:text-2xl">
                <span><img class="rounded-full lg:h-[40px] lg:w-[40px]"
                        src="../assets/img/image-rosiel-cay-tanooshi-founder.png" alt="Rosiel Cay | Tanooshi Founder "
                        height='50px' width="50px"></span>
                <span> Book a <span class="font-serif-italic"> 15-min </span> call
                </span>

            </button>
            <div class=" about-numbers" v-observe-visibility="{
                callback: visibilityChanged,
                once: false,
            }">
                <div>
                    <p class="count">{{ num1 }}+</p>
                    <p class="label">Clients' revenue</p>
                </div>
                <div>
                    <p class="count">{{ num2 }}+</p>
                    <p class="label">Clients' revenue</p>
                </div>
                <div>
                    <p class="count">{{ num3 }}+</p>
                    <p class="label">Clients' revenue</p>
                </div>

            </div>

        </div>
        <div class="about-why">
            <h3 class="heading">The <br>Insane <br>Why~</h3>
            <div class="about-img"></div>
            <div class="caption">
                <h4 class="heading">We hate to see <span class="font-serif-italic text-light-purple">ambitious
                        brands</span> go to waste... It breaks our hearts!</h4>
                <p class="subcaption">We've witnessed far too many awesome brands with incredible potential miss out on
                    opportunities because
                    of <span class="font-serif-italic">“shitty”</span> websites. </p>
            </div>
        </div>
        <div class="about-ceo-section">
            <div class="about-ceo-container">
                <div class="about-ceo">
                    <div class="quote">
                        <p><span class="q-mark"><svg width="54" height="40" viewBox="0 0 54 40" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.9"
                                        d="M15.616 17.4011C19.456 17.4011 22.144 18.8091 24.064 22.3931C24.832 24.1851 25.6 24.0571 26.112 22.1371C29.312 11.0011 35.712 2.93711 44.672 0.249108C49.536 -1.03089 51.712 2.93711 51.712 4.98512C51.712 5.62511 51.456 6.13711 50.688 6.52111C42.112 9.33711 30.72 12.7931 30.72 20.2171C30.72 22.2651 31.488 23.2891 32.64 23.2891C34.432 23.2891 35.584 17.4011 42.88 17.4011C50.432 17.4011 53.76 22.9051 53.76 28.1531C53.76 34.4251 49.536 39.8011 41.088 39.8011C36.096 39.8011 31.872 37.1131 28.032 31.0971C27.008 29.3051 25.984 29.4331 25.344 31.3531C22.912 36.8571 18.944 39.8011 13.696 39.8011C6.144 39.8011 0 33.6571 0 24.3131C0 13.4331 7.168 3.32111 17.28 0.249108C22.144 -1.03089 24.32 2.93711 24.32 4.98512C24.32 5.62511 24.064 6.13711 23.296 6.52111C14.72 9.33711 3.2 12.7931 3.2 20.2171C3.2 22.2651 3.968 23.2891 5.248 23.2891C7.04 23.2891 8.192 17.4011 15.616 17.4011Z"
                                        fill="white" />
                                </svg>
                            </span>
                            Making space for <span>ambitious brands</span> to be seen and valued by
                            <span>their</span> people
                            <span class="q-mark inline-flex align-top"><svg width="54" height="40" viewBox="0 0 54 40"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.9"
                                        d="M38.1438 17.4011C34.3038 17.4011 31.6158 18.8091 29.6958 22.3931C28.9278 24.1851 28.1598 24.0571 27.6478 22.1371C24.4478 11.0011 18.0478 2.93711 9.08776 0.249108C4.22376 -1.03089 2.04776 2.93711 2.04776 4.98512C2.04776 5.62511 2.30376 6.13711 3.07177 6.52111C11.6478 9.33711 23.0398 12.7931 23.0398 20.2171C23.0398 22.2651 22.2718 23.2891 21.1198 23.2891C19.3278 23.2891 18.1758 17.4011 10.8798 17.4011C3.32776 17.4011 -0.000236511 22.9051 -0.000236511 28.1531C-0.000236511 34.4251 4.22376 39.8011 12.6718 39.8011C17.6638 39.8011 21.8878 37.1131 25.7278 31.0971C26.7518 29.3051 27.7758 29.4331 28.4158 31.3531C30.8478 36.8571 34.8158 39.8011 40.0638 39.8011C47.6158 39.8011 53.7598 33.6571 53.7598 24.3131C53.7598 13.4331 46.5918 3.32111 36.4798 0.249108C31.6158 -1.03089 29.4398 2.93711 29.4398 4.98512C29.4398 5.62511 29.6958 6.13711 30.4638 6.52111C39.0398 9.33711 50.5598 12.7931 50.5598 20.2171C50.5598 22.2651 49.7918 23.2891 48.5118 23.2891C46.7198 23.2891 45.5678 17.4011 38.1438 17.4011Z"
                                        fill="white" />
                                </svg>
                            </span>
                        </p>
                    </div>
                    <div class="ceo-details">
                        <img src="../assets/img/img-rosiel-cay-tanooshi-founder-formal.png"
                            alt="Rosiel Cay | Tanooshi Founder">
                        <div class="details">
                            <h5 class="name">Rosiel Cay</h5>
                            <p class="position">Founder at Tanooshi</p>
                            <p class="message">"For the past couple of years, I've beaan totally dedicated to helping B2B
                                brands slay the
                                online game with killer design.</p>
                            <p class="message">I've seen firsthand how design can make or break a brand."</p>
                            <button class="btn-primary mt-10 flex gap-5 items-center md:text-base 2xl:text-2xl">

                                <span> Book a <span class="font-serif-italic"> 15-min </span> call
                                </span>

                            </button>
                        </div>
                    </div>
                </div>


                <div class="overflow-hidden">
                    <div class="scrolling-text text-[#9747FF] flex  items-center">
                        <span>Designs made with <span class="font-serif-italic "> Swag </span></span>
                        <span class="mx-10"><svg width="50" height="60" viewBox="0 0 86 96" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M42.8828 96C37.2589 96 32.8065 91.7854 32.8065 84.9951C32.8065 76.0976 39.1335 70.9463 41.2425 58.7707C42.1798 54.322 38.1962 52.4488 34.6812 55.2585C25.0736 62.9854 23.6676 70.7122 15.9346 75.3951C13.8256 76.5659 11.951 77.0341 9.84196 77.0341C6.32698 77.0341 3.04632 75.161 1.17166 72.1171C0.468665 70.4781 0 68.839 0 66.9659C0 63.4537 1.87466 60.1756 5.85831 57.8342C13.3569 53.6195 21.0899 56.1951 33.0409 52.2146C37.4932 50.8098 37.2589 46.1268 32.8065 44.4878C21.0899 40.039 13.5913 42.6146 5.85831 38.4C1.87466 36.0585 0 32.5463 0 29.0341C0 27.3951 0.468665 25.522 1.17166 24.1171C3.04632 21.0732 6.32698 18.9659 9.84196 18.9659C11.951 18.9659 13.8256 19.4341 15.9346 20.839C23.6676 25.2878 25.0736 33.2488 34.6812 41.6781C37.9618 44.4878 42.4142 42.3805 41.4768 37.6976C39.1335 25.2878 32.8065 20.1366 32.8065 11.0049C32.8065 4.21464 37.2589 0 42.8828 0C48.5068 0 52.9591 4.21464 52.9591 11.0049C52.9591 20.1366 46.8665 25.2878 44.9918 37.6976C44.0545 42.1463 48.0381 44.4878 51.3188 41.6781C60.9264 33.4829 62.3324 25.2878 69.8311 20.839C71.9401 19.4341 74.049 18.9659 75.9237 18.9659C79.673 18.9659 82.7193 21.0732 84.594 24.1171C85.5313 25.522 86 27.3951 86 29.0341C86 32.5463 83.891 36.0585 79.9074 38.4C72.4087 42.6146 64.6757 40.039 53.1935 44.4878C48.5068 46.1268 48.5068 50.8098 52.9591 52.2146C64.6757 56.1951 72.6431 53.6195 79.9074 57.8342C83.891 60.1756 86 63.4537 86 66.9659C86 68.839 85.5313 70.4781 84.594 72.1171C82.7193 75.161 79.673 77.0341 75.9237 77.0341C74.049 77.0341 71.9401 76.5659 69.8311 75.3951C62.3324 70.9463 60.9264 62.9854 51.3188 55.2585C47.8038 52.4488 44.0545 54.322 44.9918 58.7707C46.8665 70.9463 52.9591 76.3317 52.9591 84.9951C52.9591 91.7854 48.5068 96 42.8828 96Z"
                                    fill="#9747FF" />
                            </svg>
                        </span>
                        <span>Designs made with <span class="font-serif-italic "> Swag </span></span>
                        <span class="mx-10"><svg width="50" height="60" viewBox="0 0 86 96" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M42.8828 96C37.2589 96 32.8065 91.7854 32.8065 84.9951C32.8065 76.0976 39.1335 70.9463 41.2425 58.7707C42.1798 54.322 38.1962 52.4488 34.6812 55.2585C25.0736 62.9854 23.6676 70.7122 15.9346 75.3951C13.8256 76.5659 11.951 77.0341 9.84196 77.0341C6.32698 77.0341 3.04632 75.161 1.17166 72.1171C0.468665 70.4781 0 68.839 0 66.9659C0 63.4537 1.87466 60.1756 5.85831 57.8342C13.3569 53.6195 21.0899 56.1951 33.0409 52.2146C37.4932 50.8098 37.2589 46.1268 32.8065 44.4878C21.0899 40.039 13.5913 42.6146 5.85831 38.4C1.87466 36.0585 0 32.5463 0 29.0341C0 27.3951 0.468665 25.522 1.17166 24.1171C3.04632 21.0732 6.32698 18.9659 9.84196 18.9659C11.951 18.9659 13.8256 19.4341 15.9346 20.839C23.6676 25.2878 25.0736 33.2488 34.6812 41.6781C37.9618 44.4878 42.4142 42.3805 41.4768 37.6976C39.1335 25.2878 32.8065 20.1366 32.8065 11.0049C32.8065 4.21464 37.2589 0 42.8828 0C48.5068 0 52.9591 4.21464 52.9591 11.0049C52.9591 20.1366 46.8665 25.2878 44.9918 37.6976C44.0545 42.1463 48.0381 44.4878 51.3188 41.6781C60.9264 33.4829 62.3324 25.2878 69.8311 20.839C71.9401 19.4341 74.049 18.9659 75.9237 18.9659C79.673 18.9659 82.7193 21.0732 84.594 24.1171C85.5313 25.522 86 27.3951 86 29.0341C86 32.5463 83.891 36.0585 79.9074 38.4C72.4087 42.6146 64.6757 40.039 53.1935 44.4878C48.5068 46.1268 48.5068 50.8098 52.9591 52.2146C64.6757 56.1951 72.6431 53.6195 79.9074 57.8342C83.891 60.1756 86 63.4537 86 66.9659C86 68.839 85.5313 70.4781 84.594 72.1171C82.7193 75.161 79.673 77.0341 75.9237 77.0341C74.049 77.0341 71.9401 76.5659 69.8311 75.3951C62.3324 70.9463 60.9264 62.9854 51.3188 55.2585C47.8038 52.4488 44.0545 54.322 44.9918 58.7707C46.8665 70.9463 52.9591 76.3317 52.9591 84.9951C52.9591 91.7854 48.5068 96 42.8828 96Z"
                                    fill="#9747FF" />
                            </svg>
                        </span>
                        <span>Designs made with <span class="font-serif-italic "> Swag </span></span>


                    </div>
                </div>
            </div>
        </div>
        <FooterSectionVue />
    </div>
</template>
<script>
import FooterSectionVue from '../components/FooterSection.vue'

export default {
    data() {
        return {
            num1: '',
            num2: 0,
            num3: '',
            i: 0,
            j: 0
        }

    },
    components: {
        FooterSectionVue
    },
    methods: {
        visibilityChanged(isVisible) {
            if (isVisible) {
                this.setCount1()
                this.setCount2()
                this.setCount3()
            } else {
                this.reset()

            }


        },
        setCount1() {
            if (this.i <= 100) {
                if (this.i < 100) {
                    setTimeout(() => {
                        this.i++
                        this.num1 = this.i + 'k'
                        this.setCount1()
                    }, 25)
                } else {
                    this.num1 = '1M'
                }
            }
        },
        setCount2() {


            if (this.num2 < 50) {
                setTimeout(() => {
                    this.num2++
                    this.setCount2()
                }, 50)
            }

        },
        setCount3() {
            if (this.j <= 100) {
                if (this.j < 100) {
                    setTimeout(() => {
                        this.j++
                        this.num3 = this.j + 'H'
                        this.setCount3()
                    }, 25)
                } else {
                    this.num3 = '8k'
                }
            }
        },
        reset() {
            this.num1 = 0;
            this.num2 = '0'
            this.num3 = "0"
            this.j = 0
            this.i = 0
        }
    }

}
</script>