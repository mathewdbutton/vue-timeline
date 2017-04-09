<template>
  <v-container fluid="fluid">
    <v-row>
      <v-col sm3="sm3"></v-col>
      <v-col sm6="sm6">
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
      </v-col>
    </v-row>
  </v-container>
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
