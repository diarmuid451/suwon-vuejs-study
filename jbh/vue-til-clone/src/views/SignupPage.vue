<template>
  <form @click.prevent="signupSubmit">
    <div>
      <label for="id">id: </label>
      <input type="text" id="id" />
    </div>
    <div>
      <label for="password">password:</label>
      <input type="text" id="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input type="text" id="nickname" />
    </div>
    <button type="submit">회원가입</button>
  </form>
</template>

<script>
export default {
  name: 'SignupPage',
  methods: {
    signupSubmit() {
      console.log('signupSubmit');
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid black;
}
button {
  border: 1px solid black;
}
</style>
