<template>
  <div>
    <v-app-bar color="primary" dark height="50" fixed flat>
      <v-toolbar-title>저기요</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn elevation="2" @click="goLogin"> 로그인</v-btn>
      <v-btn elevation="2" @click="goSignup"> 회원가입</v-btn>
    </v-app-bar>
    <v-container>
      <v-main>temp</v-main>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
  methods: {
    goLogin() {
      this.$router.push('/');
    },
    goSignup() {
      console.log(this.$route.path);
      if (this.$route.path !== '/signup') this.$router.push('/signup');
    },
  },
};
</script>
