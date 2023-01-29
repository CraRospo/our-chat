<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const userInfo = reactive({
  username: '',
  password: ''
})

const onLogin = async () => {
  const res = await fetch('/api/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    }
  )
  const response = await res.json()
  console.log(response)
  if (response.code === 0) {
    router.push({ name: 'ChatMain' })
  }
}

</script>

<template>
  <div class="login-form">
    <h1>Our Chat</h1>
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
        class="login-btn "
        @click="onLogin"
      >
        登录
      </button>
    </div>

    <p class="register-tips">Please agreen our <router-link :to="{ 'name': 'PrivateProtocal' }">protocal</router-link> before you signin. </p>
  </div>
</template>

<style scoped>
.login-form {
  position: relative;
  margin: 30% auto;
  width: 100%;
}
.form-item {
  padding: 10px 20px;
}
.form-item-name {
  display: block;
  text-align: left;
  margin-bottom: 8px;
}
.form-item-input {
  box-sizing: border-box;
  width: 100%;
  padding: 0 6px;
  height: 30px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.form-item-input:focus {
  border-color: #409eff;
}
.login-btn {
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  padding: 4px 10px;
  background-color: #409eff;
  border-radius: 4px;
  color: #fff;
}
.register-tips {
  text-align: center;
}
</style>