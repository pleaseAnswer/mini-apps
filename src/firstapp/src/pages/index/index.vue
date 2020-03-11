<template>
    <!-- <div class="contaioner" @click="clickHandle">
        <div class="message">{{msg}}</div>
        <click-counter :init-num="10" @clicknum="handleClickNum" />
        <click-counter :init-num="20" @clicknum="handleClickNum">
            <input type="checkbox" /> 禁用
        </click-counter>
    </div> -->
    <div class="container">
        <div>计数结果：{{count}}</div>
        <a href="/pages/test1/main" class="navlink">进入计数器页面</a>
    </div>
</template>

<script>
// import ClickCounter from '@/components/click-counter'
import globalStore from '../../stores/global-store'

// export default {
//     components: { ClickCounter },

//     data() {
//         return {
//             msg: 'Hello'
//         }
//     },

//     methods: {
//         clickHandle() {
//             this.msg = 'Clicked!!!'
//         },
//         handleClickNum(data) {
//             console.log('>>>>', data.num)
//         }
//     }
// }

export default {
    computed: {
        count() {
            return globalStore.state.count
        }
    }
}
</script>

<style scoped>
/* .message {
    color: red;
    padding: 10px;
    text-align: center;
} */

.navlink {
    text-decoration: underline;
}
</style>
