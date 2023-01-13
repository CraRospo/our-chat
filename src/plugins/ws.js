export default {
  install: (app, options) => {
    const wsInstance = new WebSocket(options.url)
    app.provide('ws', wsInstance)
  }
}