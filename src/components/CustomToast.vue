<script setup>
const props = defineProps({
  visible: Boolean
})

</script>

<template>
  <div
    v-if="visible"
    class="mask"
  >
    <div class="toast-container">

      <div class="header">
        <slot name="header">
          header
        </slot>
      </div>
      
      <div class="main">
        <slot name="main">
          main content in this part.
          its a long paragraph.
          <!-- you can see the behavior in this content. -->
        </slot>
      </div>

      <div class="footer">
        <slot name="footer">
          <button @click="$emit('close')">确认</button>
          <!-- <button>取消</button> -->
        </slot>
      </div>

    </div>
  </div>
</template>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .45);
}
.toast-container {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 46%;
  height: 160px;
  border-radius: 8px;
  background: #fff;
  color: #333;
  transform: translate(-50%,-50%);
  overflow: hidden;
}
.toast-container > .header {
  height: 40px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toast-container > .main {
  box-sizing: border-box;
  padding: 4px 10px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.toast-container > .footer {
  height: 40px;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
}
.toast-container > .footer > button {
  flex: 1;
  height: 100%;
  cursor: pointer;
}
.toast-container > .footer > button + button {
  border-left: 1px solid #ccc;
}
</style>