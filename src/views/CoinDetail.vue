<template>
  <div v-for="coin in coins" :key="coin.id" class="container p-2">
    <!-- Coin Price -->
    <div class="coin-price d-flex justify-content-between p-3">
      <div class="d-flex align-items-center">
        <img :src="coin.image" style="width: 3rem" class="me-2" />
        <h1 class="me-2">{{ coin.name }}</h1>
        <h3 class="text-uppercase">({{ coin.symbol }})</h3>
      </div>
      <div class="d-flex align-items-center">
        <h2 class="me-2">${{ coin.current_price.toFixed(2) }}</h2>
        <h5 :class="[coin.price_change_percentage_24h > 0 ? success : danger]">
          {{ coin.price_change_percentage_24h.toFixed(2) }}%
        </h5>
      </div>
    </div>
    <!-- Coin Price End -->
    <!-- Coin Stats -->
    <div class="coin-stats container p-3">
      <div class="row">
        <div class="col d-flex flex-column justify-content-between align-items-center p-3">
          <span>Market Cap</span>
          <span>${{ coin.market_cap.toLocaleString() }}</span>
        </div>
        <div class="col d-flex flex-column justify-content-between align-items-center p-3">
          <span class="p-1">24 Hour Trading Vol</span>
          <span class="p-1">${{ coin.total_volume.toLocaleString() }}</span>
        </div>
        <div class="col d-flex flex-column justify-content-between align-items-center p-3">
          <span class="p-1">Fully Diluted Valuation</span>
          <span class="p-1"
            >${{
              coin.fully_diluted_valuation == null
                ? "-"
                : coin.fully_diluted_valuation.toLocaleString()
            }}</span
          >
        </div>
      </div>
      <div class="row">
        <div class="col d-flex flex-column justify-content-between align-items-center p-3">
          <span class="p-1">Circulating Supply</span>
          <span class="p-1">{{ coin.circulating_supply.toLocaleString() }}</span>
        </div>
        <div class="col d-flex flex-column justify-content-between align-items-center p-3">
          <span class="p-1">Total Supply</span>
          <span class="p-1">{{
            coin.total_supply == null ? "-" : coin.total_supply.toLocaleString()
          }}</span>
        </div>
        <div class="col d-flex flex-column justify-content-between align-items-center p-3">
          <span class="p-1">Max Supply</span>
          <span class="p-1">{{
            coin.max_supply == null ? "-" : coin.max_supply.toLocaleString()
          }}</span>
        </div>
      </div>
    </div>
    <!-- Coin Stats End -->
    <div class="m-3">
      <label for="from">Price history from:</label>
      <input type="date" name="from" @change="getHistoricalValue" />
      <label for="to">to:</label>
      <input type="date" name="to" @change="getHistoricalValue" />
      <!-- <span>{{ historicalValue }}</span> -->
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="title in titles" :key="title">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(values, index) in marketValue.prices" :key="index">
          <td>
            {{ new Date(marketValue.prices[index][0]).toLocaleString().split(" ")[0] }}
          </td>
          <td>${{ marketValue.prices[index][1].toFixed(2).toLocaleString() }}</td>
          <td>${{ marketValue.market_caps[index][1].toFixed(0).toLocaleString() }}</td>
          <td>${{ marketValue.total_volumes[index][1].toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "CoinDetail",
  data() {
    return {
      coins: [],
      historicalValue: 0,
      success: "text-success",
      danger: "text-danger",
      marketValue: {},
      titles: ["Date", "Price", "Market Cap", "24 Hour Trading Vol"],
      from: 0,
      to: Number(new Date()),
    };
  },
  mounted() {
    this.getCoin(), this.getMarketChart();
  },
  methods: {
    async getCoin() {
      const response = await api.get(
        `/coins/markets?vs_currency=usd&ids=${this.$route.params.coin}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      );
      this.coins = response.data;
      //console.log(this.coins);
    },
    // async getHistoricalValue(e) {
    //   let date = e.target.value.split("-").reverse().join("-");
    //   const response = await api.get(
    //     `/coins/${this.$route.params.coin}/history?date=${date}&localization=false`
    //   );
    //   // console.log(response.data.market_data.current_price.usd);
    //   this.historicalValue = response.data.market_data.current_price.usd;
    // },
    async getMarketChart() {
      //let date = e.target.value.split("-").reverse().join("-");
      if (!this.from) {
        let date = new Date();
        date.setDate(date.getHours() - 4);
        this.from = this.to - 86400 * 3;
        console.log("aqui", this.from);
      }
      const response = await api.get(
        `/coins/${this.$route.params.coin}/market_chart/range?vs_currency=usd&from=${this.from}&to=${this.to}`
      );
      this.marketValue = response.data;
      console.log("aqui 2", this.from);
      console.log("aqui 3", this.to);
    },
    updateCoin() {
      setTimeout(() => {
        this.getCoin();
      }, 20000);
    },
  },
  watch: {
    coins() {
      this.updateCoin();
    },
  },
};
</script>

<style scoped>
.container {
  color: #000032;
}
.coin-stats {
  border: 2px solid #000032;
  border-radius: 30px;
}
</style>
