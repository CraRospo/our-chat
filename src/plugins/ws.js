import { reactive } from 'vue'
export default {
  install: (app, options) => {
    const ws = reactive({})

    app.provide('ws', ws)
  }
}