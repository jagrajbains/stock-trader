import stocks from '../../data/stocks';
const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RANDOM_STOCKS' (state) {

  }
};

const actions = {
  buyStocks: ({ commit }, order) => {
    commit();
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