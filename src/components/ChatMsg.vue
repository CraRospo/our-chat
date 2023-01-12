<script setup>
defineProps({
  msg: String,
  name: String,
  type: Number
})
</script>

<template>
  <div class="msg-container" :class="{ 'self-msg': type }">
    <div class="contact-name">
      {{ name }}
    </div>
    <div class="msg-box">
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
</style>