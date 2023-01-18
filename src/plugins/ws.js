export default {
  install: (app, options) => {
    const wsInstance = new WebSocket(options.url)
    wsInstance.onerror = function (e) {
      console.log(e)
    }
    app.provide('ws', wsInstance)
  }
}