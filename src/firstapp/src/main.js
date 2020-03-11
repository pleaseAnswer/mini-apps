import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        pages: [
            '^pages/index/main'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackGroundColor: '#fff',
            navigationBarTitleText: '第一个小程序',
            navigationBarTextStyle: 'black'
        }
    }
}
