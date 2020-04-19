import stocks from '../../data/stocks';
const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RANDOM_STOCKS' (state) {
    state.stocks.forEach((stock) => {
      let newPrice = Math.round(stock.price * (1 + Math.random() - 0.5))
      if (newPrice === 1) {
        newPrice = 20;
      }
      stock.price = newPrice;
    })
  }
};

const actions = {
  buyStocks: ({ commit }, order) => {
    commit('BUY_STOCKS', order);
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RANDOM_STOCKS')
  }
}

const getters = {
  stocks: state => state.stocks
};

export default {
  state, mutations, actions, getters
}