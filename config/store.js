// store.js
//import { reactive } from 'vue'
const { reactive } = Vue

export const store = reactive({
  count: 777,
  /*state () {
    return {
      count: 1
    }
  }*/
})
