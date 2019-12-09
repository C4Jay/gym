<template>
<span>
  <home-palex></home-palex>
  <home-hero></home-hero>
  <home-palex2></home-palex2>
  <home-card></home-card>
</span>
</template>

<script>
  import HomePalex from '@/components/HomePalex'
  import HomeHero from '@/components/HomeHero'
  import HomePalex2 from '@/components/HomePalex2'
  import HomeCard from '@/components/HomeCard'

  export default {
    components: {
      HomePalex,
      HomeHero,
      HomePalex2,
      HomeCard

    }
  }
</script>
