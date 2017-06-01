<template>
    <div class="event-point-wrapper">
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <p> {{getAssetUrl(image)}}</p>
                <p class="event-point-time grey--text">{{dateTime}}</p>
                <v-card>
                    <v-card-row class="green darken-2 white--text">
                        <v-card-title>
                            <span class="white--text">{{title}}</span>
                        </v-card-title>
                    </v-card-row>
                    <v-layout row wrap>
                        <v-flex xs4 offset-xs4>
                            <v-card-row :img="getAssetUrl(image)" height="200px"></v-card-row>

                        </v-flex>
                    </v-layout>
                    <v-card-text class="blue-grey darken-3 white--text">
                        <div v-text="desc"></div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    require('./event_point.css')
    import timelineMixins from '../mixins/timeline_nodes'
    import mediaMixin from '../mixins/media_mixin'
    export default {
        mixins: [timelineMixins, mediaMixin],
        name: 'event-point',
        props: ['image', 'title'],
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .event-point-image {
        height: 145px;
    }
</style>
