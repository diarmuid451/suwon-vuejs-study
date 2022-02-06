<template>
  <v-app>
    <AppHeader />
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppHeader from '@/components/common/AppHeader';

export default {
  name: 'App',

  components: { AppHeader },

  data: () => ({
    //
  }),
};
</script>
