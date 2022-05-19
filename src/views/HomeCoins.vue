<template>
  <div class="container">
    <div class="row">
      <img class="img-fluid flip-horizontal-bottom" src="../assets/Coin.svg" alt="Coin" />
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
.flip-horizontal-bottom {
  animation: flip-horizontal-bottom 2s ease-in-out infinite both;
}

@keyframes flip-horizontal-bottom {
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(180deg);
  }
  75% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
</style>
