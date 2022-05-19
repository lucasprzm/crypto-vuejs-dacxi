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
        <h2 class="me-3">${{ coin.current_price.toFixed(2) }}</h2>
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
    <!-- Historical Data Text and Inputs -->
    <div class="p-3">
      <h3>Historical Data</h3>
      <span
        >Price history of 7 days ago, you can change the day and time or reset. Above 90 days of
        interval, the data will have a daily interval.</span
      >
      <form class="d-flex justify-content-between align-items-center m-3">
        <label for="history-from">From:</label>
        <input type="datetime-local" name="history-from" @change="getDateTimeInputFrom" />
        <label for="history-to">To:</label>
        <input type="datetime-local" name="history-to" @change="getDateTimeInputTo" />
        <input class="px-2" type="reset" @click="resetDateTimeInput" value="Reset" />
      </form>
    </div>
    <!-- Historical Data Text and Inputs End -->
    <!-- Historical Data Table -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="title in titles" :key="title">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(values, index) in sevenDaysHistory.prices" :key="index">
          <td>
            {{ new Date(sevenDaysHistory.prices[index][0]).toLocaleString().split(" ")[0] }}
          </td>
          <td>
            {{ new Date(sevenDaysHistory.prices[index][0]).toLocaleString().split(" ")[1] }}
          </td>
          <td>${{ sevenDaysHistory.prices[index][1].toFixed(2).toLocaleString() }}</td>
          <td>${{ sevenDaysHistory.market_caps[index][1].toFixed(0).toLocaleString() }}</td>
          <td>${{ sevenDaysHistory.total_volumes[index][1].toLocaleString() }}</td>
        </tr>
      </tbody>
    </table>
    <!-- Historical Data Table End -->
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "CoinDetail",
  data() {
    return {
      coins: [],
      success: "text-success",
      danger: "text-danger",
      sevenDaysHistory: {},
      titles: ["Date", "Time", "Price", "Market Cap", "24 Hour Trading Vol"],
      from: "",
      to: "",
    };
  },
  mounted() {
    this.getCoin(), this.getSevenDays();
  },
  methods: {
    async getCoin() {
      const response = await api.get(
        `/coins/markets?vs_currency=usd&ids=${this.$route.params.coin}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      );
      this.coins = response.data;
    },
    updateCoin() {
      setTimeout(() => {
        this.getCoin();
      }, 20000);
    },
    async getSevenDays() {
      if (!this.from) {
        let date = new Date();
        date.setDate(date.getDate() - 7);
        this.from = date / 1000;
        this.to = Number(new Date()) / 1000;
      }
      try {
        const response = await api.get(
          `/coins/${this.$route.params.coin}/market_chart/range?vs_currency=usd&from=${this.from}&to=${this.to}`
        );
        this.sevenDaysHistory = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    getDateTimeInputFrom(e) {
      this.from = Date.parse(e.target.value) / 1000;
      this.getSevenDays();
    },
    getDateTimeInputTo(e) {
      this.to = Date.parse(e.target.value) / 1000;
      this.getSevenDays();
    },
    resetDateTimeInput() {
      this.from = "";
      this.to = Number(new Date()) / 1000;
      this.getSevenDays();
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
