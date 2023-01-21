<script setup>
import { reactive } from 'vue';

const userInfo = reactive({
  username: '',
  password: ''
})

const onLogin = async () => {
  const res = await fetch('/api/login')
  const response = res.json()
  if (response.code === 0) {
    this.$router.push({ name: 'ChatMain' })
  }
}

const onRegister = async () => {
  console.log(JSON.stringify(userInfo))
  const res = await fetch(
    '/api/register',
    {
      method: 'POST',
      body: JSON.stringify(userInfo)
    }
  )
  console.log(res)
  const response = res.json()
  console.log(response)
}
</script>

<template>
  <div class="login-form">
    <h1>Our-Chat</h1>
    <div class="form-item">
      <label
        class="form-item-name"
        for="username"
      >
        用户名：
      </label>
      <input
        class="form-item-input"
        type="text"
        name="username"
        v-model="userInfo.username"
      >
    </div>

    <div class="form-item">
      <label
        class="form-item-name"
        for="password"
      >
        密码：
      </label>
      <input
        class="form-item-input"
        type="password"
        name="password"
        v-model="userInfo.password"
      >
    </div>

    <div class="form-item">
      <label class="form-item-name"></label>
      <button
        class="login-btn"
        @click="onLogin"
      >
        login
      </button>
    </div>

    <p class="register-tips">if you don't have account,please <button class="register-btn" @click="onRegister">register</button> first.</p>
  </div>
</template>

<style scoped>
.login-form {
  position: relative;
  margin: 30% auto;
  width: 100%;
}
.form-item {
  display: flex;
  padding: 10px 20%;
}
.form-item-name {
  flex: none;
  width: 40%;
  /* text-align: right; */
}
.form-item-input {
  flex: auto;
  width: 100%;
}
.login-btn {
  padding: 4px 10px;
  border: 1px solid #666;
}
.register-tips {
  text-align: center;
}
.register-btn {
  text-decoration: underline;
}
</style>