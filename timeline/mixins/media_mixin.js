// define a mixin object
var myMixin = {
  props: ['media'],
  data() {
    return {
      audio: ''
    }
  },
  watch: {
    visible() {
      if (this.media !== undefined) {
        this.playAudio()
      }
    }
  },
  methods: {
    playAudio() {
      this.audio = new Audio(this.getAssetUrl(this.media))
      this.audio.play()
    },
    stopAudio() {
      this.fadeVolume(this.audio.pause)
    },
    fadeVolume(callback) {
      var factor = 0.01
      var speed = 5
      if (this.audio.volume > factor) {
        setTimeout(() => {
          this.fadeVolume((this.audio.volume -= factor), callback)
        }, speed)
      } else {
        (typeof (callback) !== 'function') || callback()
      }
    }
  }
}

export default myMixin
