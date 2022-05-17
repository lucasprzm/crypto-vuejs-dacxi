<template>
  <div class="container">
    <div class="row">
      <h1>Coin Market</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th v-for="title in titles" :key="title">{{ title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(coin, index) in coins" :key="coin.id">
            <td class="text-muted">
              {{ index + 1 }}
            </td>
            <td>
              <img :src="coin.image" style="width: 2rem" class="me-2" />
              <span>
                {{ coin.name }}
              </span>
              <span class="ms-2 text-uppercase text-muted">
                {{ coin.symbol }}
              </span>
            </td>
            <td>${{ coin.current_price }}</td>
            <td :class="[coin.price_change_percentage_1h_in_currency > 0 ? success : danger]">
              {{ coin.price_change_percentage_1h_in_currency.toFixed(2) }}%
            </td>
            <td :class="[coin.price_change_percentage_24h > 0 ? success : danger]">
              {{ coin.price_change_percentage_24h.toFixed(2) }}%
            </td>
            <td :class="[coin.price_change_percentage_7d_in_currency > 0 ? success : danger]">
              {{ coin.price_change_percentage_7d_in_currency.toFixed(2) }}%
            </td>
            <td>${{ coin.total_volume.toLocaleString() }}</td>
            <td>${{ coin.market_cap.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import "./styles/global.css";
import api from "./services/api";

export default {
  name: "App",
  components: {},
  data() {
    return {
      coins: [],
      titles: ["#", "Coin", "Price", "1h", "24h", "7d", "24h Volume", "Market Cap"],
      success: "text-success",
      danger: "text-danger",
    };
  },
  mounted() {
    this.getCoins();
  },
  methods: {
    async getCoins() {
      const response = await api.get(
        "/coins/markets?vs_currency=usd&ids=bitcoin%2Cterra-luna%2Cethereum%2Ccosmos%2Cdacxi&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
      );
      console.log(response);
      this.coins = response.data;
    },
    updateCoins() {
      setTimeout(() => {
        this.getCoins();
      }, 10000);
    },
  },
  watch: {
    coins() {
      this.updateCoins();
    },
  },
};
</script>
