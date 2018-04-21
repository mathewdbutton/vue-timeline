<template>
  <div class="timeline-container">
    <template v-for="(event_point, index) in event_point_array">
      <div :class="['event',visible(index) ? 'show-event' : 'hide-event']">
        <connector v-if="index > 0"></connector>
        <component :is="event_point.type"
                   :desc="event_point.desc"
                   :visible="visible(index)"
                   :media="event_point.media"
                   :image="event_point.image"
                   :title="event_point.title"
                   :date-time="event_point.date_time">
        </component>
      </div>
    </template>
  </div>
</template>

<script>
  require('./timeline.css')
  import EventPoint from './event_point/event_point.vue'
  import PointOfInterest from './point_of_interest/point_of_interest.vue'
  import Encounter from './encounter/encounter.vue'
  import Connector from './connector/connector.vue'
  export default {
    props: {
      allEvents: {
        type: Object,
        required: true
      },
      currentIndex: {
        type: Number,
        required: true
      }
    },
    name: 'timeline',
    components: {
      'event-point': EventPoint,
      'encounter': Encounter,
      'point-of-interest': PointOfInterest,
        'connector': Connector
    },
    data () {
      return {}
    },
    computed: {
        event_point_array() {
            console.log(this.allEvents)
            return this.allEvents.nodes
        }
    },
    methods: {
      visible(index) {
        return index <= this.currentIndex
      }
    }
  }
</script>
