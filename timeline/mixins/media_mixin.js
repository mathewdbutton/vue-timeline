// define a mixin object
var myMixin = {
    props: ['media'],
    data() {
        return {
            audio: '',
            percentPlayed: 0
        }
    },
    watch: {
        visible() {
            if (this.media !== undefined) {
                this.playAudio()
            }
        }
    },
    computed:{
      time() {
          if(this.audio !== '') {
              return this.audio.currentTime
          } else {
              return 0
          }
      }
    },
    methods: {
        playAudio() {
            this.audio.play()
            this.trackCurrentAudioTime()
        },
        trackCurrentAudioTime(){
            if(!this.audio.ended){
                this.percentPlayed = Math.ceil((this.audio.currentTime/this.audio.duration) * 100)
                setTimeout(() => {
                    this.trackCurrentAudioTime()
                }, 200)
            } else {
                this.percentPlayed = 100;
            }
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
