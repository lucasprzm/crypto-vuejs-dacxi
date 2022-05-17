<template>
  <div>
    <img :src="coin.image" style="width: 2rem" class="me-2" />
    <span class="text-uppercase">{{ coin.name }} ({{ coin.symbol }})</span>
  </div>
  <div>
    <span>{{ coin.current_price }}</span>
    <span>{{ coin.price_change_percentage_24h }}</span>
  </div>
  <div>
    <div>
      <span>Barra de Progresso</span>
      <div>
        <span>{{ coin.low_24h }}</span>
        <span>24h Range</span>
        <span>{{ coin.high_24h }}</span>
      </div>
    </div>
    <div>
      <div>
        <div>
          <span>Market Cap</span>
          <span>{{ coin.market_cap }}</span>
        </div>
        <div>
          <span>24 Hour Trading Vol</span>
          <span>{{ coin.total_volume }}</span>
        </div>
        <div>
          <span>Fully Diluted Valuation</span>
          <span>{{ coin.fully_diluted_valuation }}</span>
        </div>
      </div>
      <div>
        <div>
          <span>Circulating Supply</span>
          <span>{{ coin.circulating_supply }}</span>
        </div>
        <div>
          <span>Total Supply</span>
          <span>{{ coin.total_supply }}</span>
        </div>
        <div>
          <span>Max Supply</span>
          <span>{{ coin.max_supply }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "CoinDetail",
  data() {
    return {
      coin: [],
    };
  },
  mounted() {
    this.getCoin();
  },
  methods: {
    async getCoin() {
      const response = await api.get(
        `/coins/markets?vs_currency=usd&ids=${this.$route.params.coin}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      );
      //console.log(response.data);
      this.coin = response.data[0];
    },
  },
};
//
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false
</script>
