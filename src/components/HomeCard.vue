<template>
<div class="main2">
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Why choose Jeff`s GYM</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="https://images.wallpaperscraft.com/image/gym_weightlifting_disks_118224_938x1668.jpg" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline yellow--text">Equipment</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0"><v-btn flat="true" large="true" left="true" ripple="true">Equipment</v-btn></h3>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aut a nihil beatae pariatur, dolor quod cum ipsum possimus. Minima eos corporis, necessitatibus omnis nisi ipsam dolores velit illum
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions v-if="['explore'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('keto')">Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="https://origin-singapore-fitnessfirst-cdprod.evolutionwellness.com/-/media/project/evolution-wellness/fitness-first/south-east-asia/singapore/personal-training/personal-training_fb-sharing.jpg" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline yellow--text">Personal Trainers</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0"><v-btn flat="true" large="true" left="true">Personal Trainers</v-btn></h3>
                            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio et deleniti dolorum facere natus, nisi accusantium enim! Accusamus aliquid dolorem enim veniam vel maiores sint, quis doloribus odio deleniti ipsam.
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions v-if="['explore'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('paleo')">Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="https://i.pinimg.com/736x/1e/56/6e/1e566e9fd53245730e95965b27988496--bodybuilding-motivation-trains.jpg" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline yellow--text">Programs</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0"><v-btn flat="true" large="true" left="true">Programs</v-btn></h3>
                            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ducimus quas quidem, saepe laborum at facere reiciendis ea. Eaque veritatis quaerat deserunt harum, inventore expedita consectetur quia nam quae dicta.
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions v-if="['explore'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('vegan')">Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>

export default {
    name: 'HomeCard'
};
</script>

<style>
.main2{
    background-color: yellow
}
</style>
