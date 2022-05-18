<template>
  <main-header />
  <router-view />
</template>

<script>
import "./styles/global.css";
import MainHeader from "./components/MainHeader.vue";
export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>
