<script setup>
import { reactive } from 'vue';

const userInfo = reactive({
  username: '',
  password: ''
})

const onLogin = async () => {
  const res = await fetch('/api/register')
  const response = res.json()
  console.log(response)
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
  <h1>Our-Chat</h1>
  <input type="text" name="username" v-model="userInfo.username">
  <input type="password" name="password" v-model="userInfo.password">
  <button @click="onLogin">login</button>
  <button @click="onRegister">register</button>
</template>