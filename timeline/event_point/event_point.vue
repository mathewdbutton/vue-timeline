<template>
    <div class="event-point-wrapper">
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <p class="event-point-time grey--text">{{dateTime}}</p>
                <v-card>
                    <v-card-text class="green darken-2 white--text">
                        <p class="white--text title">{{title}}</p>
                    </v-card-text>
                    <v-card :flat="true" color="green">

                    </v-card>
                    <v-card-media
                            class="white--text"
                            height="300px"
                            :contain="true"
                            :src="getAssetUrl(image)"
                    >
                    </v-card-media>

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
