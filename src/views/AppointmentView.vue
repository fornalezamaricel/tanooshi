
<template>
    <div class="bg-primary-color px-10 pt-40  overflow-x-hidden md:h-screen">
        <h1 class="heading-text text-center w-full  mx-auto lg:w-10/12 2xl:text-8xl 2xl:w-1/2"><span>Let's talk</span> when
            you're
            free. No
            pressure.
        </h1>
        <!-- Calendly inline widget begin -->
        <div class="calendly-inline-widget mt-10 h-[600px] 2xl:h-[700px] 2xl:mt-20"
            data-url="https://calendly.com/tanooshi-studio" style="min-width:320px;">
        </div>

        <!-- Calendly inline widget end -->

        <div class="scroll-text mt-[-120px] ">your webflow team partner your webflow team partner</div>
    </div>
</template>
<!-- <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> -->
<script>
export default {
    mounted() {
        const recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
        document.head.appendChild(recaptchaScript)

    }
}
</script>

