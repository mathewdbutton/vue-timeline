<template>
    <v-app>
        <v-content>
       <timeline :allEvents="events" :currentIndex="events.nodes.length-1"></timeline>
       <button @click="go">Go</button>
       <button @click="updateEvents()">update</button>
        </v-content>
    </v-app>
</template>

<script>
    import Timeline from './timeline.vue'
    export default {
        props: {},
        name: 'App',
        components: {
            Timeline
        },
        data () {
            return {
                index: 0,
                events: {'nodes': [
                    {
                        'type': `encounter`,
                        'desc': `It all began one night after frisbee`
                    },
                    {
                        'type': `point-of-interest`,
                        'date_time': '04/06/2015 11:25AM',
                        'desc': 'Mathew: So about that beverage, is there a day that suits you?'
                    },
                    {
                        'type': `event-point`,
                        'title': `Euro Trip - The Netherlands - Amsterdam`,
                        'date_time': '18/07/2016',
                        'desc': `So that's what a coffee house is. no I don't want to see any prostitutes. there is no where that is not bikes`,
                        'image': 'dist/Amsterdam.jpg'
                    },
                    {
                        'type': `encounter`,
                        'desc': `She made it!`,
                        'media': 'dist/at_last.mp3'
                    },
                    {
                        'type': `encounter`,
                        'desc': `It all began one night after frisbee`
                    }

                ]},
            }
        },
        computed: {
            event_point_array() {
                console.log("array_updated")
                return {'nodes': [
                    {
                        'type': `encounter`,
                        'desc': `It all began one night after frisbee`
                    }]};
            }
        },
        methods: {
            go() {
                this.index += 1
            },
            updateEvents() {
                this.events = {'nodes': [
                    {
                        'type': `encounter`,
                        'desc': `blergy blerg`
                    }
                ]}
            }
        }
    }
</script>
