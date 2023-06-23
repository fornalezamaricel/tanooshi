<script setup>
import TopNav from "../components/TopNav.vue";

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
    <header class="sticky top-0 z-[9000]">
      <div class="absolute w-full  ">
        <TopNav class="" @scrollToElement="scrollToElement" />

      </div>
    </header>
    <HeroSection ref="home" />
    <SocialProof />
    <ProblemSection />
    <BenefitsSection ref="why-us" />
    <TestimonialSection />
    <WorkSection ref="works" />
    <PainPoints />
    <SolutionSection />
    <BrandsSection />
    <MatchSection @scrollToElement="scrollToElement" />
    <FooterSection ref="contact" />


  </div>
</template>
<script>
export default {
  methods: {
    scrollToElement(el) {
      this.$refs[el].$el.scrollIntoView({ behavior: "smooth" })
    }
  }
}
</script>

