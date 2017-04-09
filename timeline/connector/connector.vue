<template lang="html">
  <div class="connector">
      <div class="inner-circle inner-circle-top" :class="[points ? points : 'grey lighten-2']">
      </div>
      <div class="inner-connector" :class="[bar ? bar : 'grey lighten-1']">
      </div>
      <div class="inner-circle inner-circle-bottom" :class="[points ? points : 'grey lighten-2']">
      </div>
  </div>
</template>

<script>
export default {
  props: ['points', 'bar']
}
</script>
