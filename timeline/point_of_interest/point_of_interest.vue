<template>
  <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <div class="point-of-interest-wrapper">
          <p class="point-of-interest-time grey--text">{{dateTime}}</p>
          <v-card class="green white--text">
            <v-card-text>
              <p v-for="text in splitDesc">
                {{text}}
              </p>
            </v-card-text>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
require('./point_of_interest.css')
import timelineMixins from '../mixins/timeline_nodes'
import mediaMixin from '../mixins/media_mixin'
export default {
  mixins: [timelineMixins, mediaMixin],
  name: 'point-of-interest',
  props: ['dateTime'],
  data() {
    return {
    }
  },
  computed: {
    splitDesc() {
      return this.desc.split('#')
    }
  }
}
</script>
