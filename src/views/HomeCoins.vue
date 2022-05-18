<template>
  <div class="container">
    <div class="row">
      <img class="img-fluid" src="../assets/Coin.svg" alt="Coin" />
    </div>
    <div class="row">
      <coins-table />
    </div>
  </div>
</template>

<script>
import CoinsTable from "../components/CoinsTable.vue";
export default {
  name: "HomeCoins",
  components: { CoinsTable },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.img-fluid {
  max-height: 28vh;
}
</style>
