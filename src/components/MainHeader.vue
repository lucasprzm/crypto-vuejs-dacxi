<template>
  <nav class="navbar p-2">
    <div class="container-sm d-flex justify-content-center justify-content-sm-between">
      <a class="navbar-brand" :href="homeRef"><img src="../assets/Logo.svg" alt="Brand Logo" /></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      homeRef: process.env.NODE_ENV === "production" ? "/crypto-vuejs-dacxi/" : "/",
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #000032;
}
</style>
