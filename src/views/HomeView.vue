<script setup>

import HeroSection from '../components/HeroSection.vue';
import SocialProof from '../components/SocialProof.vue';
import ProblemSection from '../components/ProblemSection.vue';
import BenefitsSection from '../components/BenefitsSection.vue';
import TestimonialSection from '../components/TestimonialSection.vue';
import WorkSection from '../components/WorkSection.vue';
import PainPoints from '../components/PainPoints.vue'
import SolutionSection from '../components/SolutionSection.vue'
import BrandsSection from '../components/BrandsSection.vue';
import MatchSection from '../components/MatchSection.vue';
import FooterSection from '../components/FooterSection.vue';
</script>
<template>
  <div>

    <HeroSection id="/" ref="home" />
    <SocialProof />
    <ProblemSection />
    <BenefitsSection id="why-us" v-observe-visibility="visibilityChanged" />
    <TestimonialSection />
    <WorkSection id="works" />
    <PainPoints />
    <SolutionSection />
    <BrandsSection />
    <MatchSection />
    <FooterSection @scrollToElement="scrollToElement" id="contact" />


  </div>
</template>
<script>
export default {
  methods: {
    scrollToElement(el) {
      this.$refs[el].$el.scrollIntoView({ behavior: "smooth" })
    },
    goTo(el) {
      this.$emit("scrollToElement", el)
    },
    visibilityChanged() {
      console.log('hello')

    },
  }
}
</script>

