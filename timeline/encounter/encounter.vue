<template lang="html">
  <v-container fluid="fluid">
    <v-row>
      <v-col sm4="sm4"></v-col>
      <v-col sm4="sm4">
        <v-card class="red darken-1 white--text">
          <v-card-text>
            <div>
              <slot name="text">
                <p class="text-xs-center title">{{desc}}</p>
              </slot>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import timelineMixins from '../mixins/timeline_nodes'
import mediaMixin from '../mixins/media_mixin'
export default {
  mixins: [timelineMixins, mediaMixin],
  name: 'encounter'
}
</script>
