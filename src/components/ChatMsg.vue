<script setup>
const props = defineProps({
  msg: String,
  name: String,
  type: Number
})

const isSelfMsg = () => props.type === 1
const isSysMsg = () => props.type === 0
</script>

<template>
  <div
    class="msg-container"
    :class="{ 'self-msg': isSelfMsg() }"
  >
    <div
      v-if="type"
      class="contact-name"
    >
      {{ name }}
    </div>
    <div
      class="msg-box"
      :class="{ 'system-msg': isSysMsg() }"
    >
      {{ msg }}
    </div>
  </div>
</template>

<style scoped>
.msg-container {
  padding: 6px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.msg-container.self-msg {
  align-items: flex-end;
}
.contact-name {
  font-size: 14px;
  color: #ccc;
}
.msg-box {
  max-width: 80%;
  padding: 4px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  text-align: left;
}
.system-msg {
  padding: 0 4px;
  margin: 0 auto;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
  background: #ccc;
}
</style>