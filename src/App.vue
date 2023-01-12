<script setup>
import ChatMsg from './components/ChatMsg.vue'
import { createMsg } from './utils/utils'
import { ref, reactive, nextTick } from 'vue'

let count = ref(0)
const list = reactive([])
const wrapper = ref('wrapper')
const screen = ref('screen')

// 模拟chat
const chat = function() {

  // 暂时模拟10条
  if (count.value >= 10) return 
  setTimeout(() => {
    // 模拟消息
    list.push(createMsg())
    count.value++

    // 滑动消息内容
    nextTick(() => {
      let height = wrapper.value.offsetHeight
      screen.value.scrollTo({
        top: height,
        behavior: "smooth"
      })
    })
    
    chat()
  }, 800)
}

chat()


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
    >
    <button class="send-btn">发送</button>
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
