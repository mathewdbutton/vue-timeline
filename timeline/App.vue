<template>
   <div>
        blerp
       <timeline :allEvents="events" :currentIndex="index"></timeline>
       <button @click="go">Go</button>
   </div>
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
                events: {
                    'nodes': [
                        {
                            'type': `encounter`,
                            'desc': `It all began one night after frisbee`
                        },
                        {
                            'type': `encounter`,
                            'desc': `It all began one night after frisbee`
                        },
                        {
                            'type': `encounter`,
                            'desc': `It all began one night after frisbee`
                        }]
                },
            }
        },
        computed: {},
        methods: {
            go() {
                this.index += 1
            }
        }
    }
</script>
