<template>
  <div class="event-point-wrapper">
    <p class="event-point-time grey--text">{{dateTime}}</p>
    <v-card horizontal>
      <v-card-row :img="getAssetUrl(image)" height="200px">
      </v-card-row>
      <v-card-column>
        <v-card-row height="75px" class="green white--text">
          <v-card-text>
            <strong>{{title}}</strong>
            <div>{{desc}}</div>
          </v-card-text>
        </v-card-row>
        <v-card-row actions class="green darken-2 ">
        </v-card-row>
      </v-card-column>
    </v-card>
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
    return {
    }
  }
}
</script>

<style scoped>
.event-point-image {
  height: 145px;
}
</style>
