<template>
  <div class="row">
    <div class="col">
      <input
        type="text"
        class="form-control rounded-pill my-4"
        placeholder="Search Coin"
        @keyup="searchCoin()"
        v-model="textSearch"
      />
    </div>
  </div>
  <div class="row">
    <h1>Cryptocurrency Prices by Market Cap</h1>
    <span class="fw-normal">Click on the coin symbol or name to access coin data.</span>
  </div>
  <div class="table-responsive-sm">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col" v-for="title in titles" :key="title">
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(coin, index) in filteredCoins" :key="coin.id">
          <td class="text-muted">
            {{ index + 1 }}
          </td>
          <td>
            <a :href="coin.id">
              <img :src="coin.image" style="width: 2rem" class="me-2" />
              <span>
                {{ coin.name }}
              </span>
              <span class="ms-2 text-uppercase text-muted">
                {{ coin.symbol }}
              </span>
            </a>
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
</template>

<script>
import api from "../services/api";
export default {
  name: "CoinsTable",
  components: {},
  data() {
    return {
      coins: [],
      filteredCoins: [],
      titles: ["#", "Coin", "Price", "1h", "24h", "7d", "24h Volume", "Market Cap"],
      success: "text-success",
      danger: "text-danger",
      textSearch: "",
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
      //console.log(response);
      this.filteredCoins = response.data;
      this.coins = response.data;
    },
    updateCoins() {
      setTimeout(() => {
        this.getCoins();
      }, 20000);
    },
    searchCoin() {
      this.filteredCoins = this.coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
  },
  watch: {
    coins() {
      this.updateCoins();
    },
  },
};
</script>

<style scoped>
.table a span {
  text-decoration: none;
  color: #000032;
}
</style>
