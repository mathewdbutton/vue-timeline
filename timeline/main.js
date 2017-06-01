import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.mixin({
    methods: {
        getAssetUrl(url) {
            return `/${url}`
        }
    }
})


new Vue({
    el: '#app',
    render: h => h(App)
})
