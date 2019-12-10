<template>
<span>
  <home-palex></home-palex>
  <home-hero></home-hero>
  <home-palex2></home-palex2>
  <home-film></home-film>
  <home-card></home-card>
</span>
</template>

<script>
  import HomePalex from '@/components/HomePalex'
  import HomeHero from '@/components/HomeHero'
  import HomePalex2 from '@/components/HomePalex2'
  import HomeCard from '@/components/HomeCard'
  import HomeFilm from '@/components/HomeFilm'

  export default {
    components: {
      HomePalex,
      HomeHero,
      HomePalex2,
      HomeCard,
      HomeFilm

    }
  }
</script>
