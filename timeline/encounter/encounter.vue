<template lang="html">
  <v-layout row wrap>
    <v-flex xs4 offset-xs4>
        <v-card class="red darken-1 white--text">
          <v-card-text>
            <div>
              <slot name="text">
                <p class="text-xs-center title">{{desc}}</p>
              </slot>
              </div>
          </v-card-text>
                <v-progress-linear class="red darken-1" v-if="media" v-model="percentPlayed"></v-progress-linear>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
import timelineMixins from '../mixins/timeline_nodes'
import mediaMixin from '../mixins/media_mixin'
export default {
  mixins: [timelineMixins, mediaMixin],
  name: 'encounter',
    methods: {
      play() {
          this.playAudio()
      }
    }
}
</script>

<style scoped>
    .progress-linear{
        margin:0;
    }
</style>
