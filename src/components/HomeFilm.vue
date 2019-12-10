<template>
<!-- <div class="text-xs-center">  -->
    <div class="main1">
<v-container grid-list-lg>
    <v-hover v-slot:default="{ hover }">
    <v-layout row>
       <v-flex xs12 class="text-xs-center display-1 yellow font-weight-black my-5"><v-card :elevation="hover ? 19 : 4" :color="hover ? '#ffe11f' : '#ffff'"><v-card-title class="justify-center">Get a Pump 1</v-card-title></v-card></v-flex>

    </v-layout>
    </v-hover>
    <v-layout
    
      align-center
      column
      justify-center
    >
    <v-row align-center>
    <v-flex xs12 sm6 md12>
              
                <v-img class="align-end">
                   <youtube width="819" :video-id="videoId" ref="youtube" @playing="playing"></youtube>
                </v-img>
                
    </v-flex>
<!--
    <v-flex xs12 sm6 md12>
                <v-card width="656" height="356">
                    <v-img>
                   <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
                    </v-img>
                </v-card>
        </v-flex>                
        -->
    </v-row>
    </v-layout>
</v-container>
    </div>
</template>



<script>
export default {
    name: 'HomeFilm',
   data() {
    return {
      videoId: '7nZ3NE4LnAA'
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('\o/ we are watching!!!')
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>

<style>
.main1{
    background: #1f1f1e
}
</style>
