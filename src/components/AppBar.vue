<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="#ffff99" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
<!--   <v-toolbar app color="#1A1E29" dark> -->
    <v-toolbar app color="#060606" dark>
   
       <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer=!drawer"></v-toolbar-side-icon>
       <v-toolbar-title>{{appTitle}}</v-toolbar-title>
       <v-btn color="#9C7A44" class="hidden-sm-and-down">Menu</v-btn>
       <v-spacer class="hidden-sm-and-down"></v-spacer>
       <v-btn color="#9C7A44" class="hidden-sm-and-down">SIGN IN</v-btn>
       <v-btn color="#9C7A44" class="hidden-sm-and-down">JOIN</v-btn>
   </v-toolbar>
   </span>
</template>

<script>
export default {
    name: 'AppBar',
    data() {
        return {
            appTitle:'CR7',
            drawer: false,
            color:"#A7CD1E",
            items: [
                { title: 'Menu' },
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        };
    }
};
</script>

<style>

</style>