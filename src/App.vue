<script setup>
import ChatMsg from './components/ChatMsg.vue'
import { ref, reactive, nextTick, inject } from 'vue'

const list = reactive([])
const wrapper = ref('wrapper')
const screen = ref('screen')
const Ws = inject('ws')

Ws.onmessage = function (e) {
  const message = JSON.parse(e.data)
  list.push(message.data)

  nextTick(() => {
    let height = wrapper.value.offsetHeight
    screen.value.scrollTo({
      top: height,
      behavior: "smooth"
    })
  })
}

// 发送消息
/**
 * message格式
 * { data: { id, type, name, msg } }
 */
const content = ref('')
const onMsgSend = () => {
  Ws.send(content.value)
}

</script>

<template>
  <div
    ref="screen"
    class="msg-screen"
  >
    <div ref="wrapper">
      <ChatMsg
        v-for="context in list"
        :msg="context.msg"
        :name="context.name"
        :type="context.type"
      />
    </div>
  </div>
  <div class="operation">
    <input
      class="msg-input"
      type="text"
      v-model="content"
    >
    <button
      class="send-btn"
      @click="onMsgSend"
    >
      发送
    </button>
  </div>
</template>

<style scoped>
.msg-screen {
  box-sizing: border-box;
  width: 500px;
  height: 750px;
  border: 1px solid #ccc;
  overflow: auto;
}
.operation {
  box-sizing: border-box;
  width: 500px;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-top: 0;
}
.operation .msg-input {
  flex: auto;
  height: 19px;
  margin: 0;
  padding: 4px 8px;
  border: 1px solid #ccc;
}
.operation .send-btn {
  flex: none;
  margin-left: 10px;
  padding: 6px 18px;
  background: #44b544;
  color: #fff;
  cursor: pointer;
}
.msg-screen::-webkit-scrollbar-track-piece {
  background: #d3dce6;
}

.msg-screen::-webkit-scrollbar {
  width: 0px;
  height: 6px;
}

.msg-screen::-webkit-scrollbar-thumb {
  background: #99a9bf;
  border-radius: 20px;
}
</style>
