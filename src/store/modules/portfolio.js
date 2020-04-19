const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  'BUY_STOCKS'(state, { stockId, quantity, stockPrice}) {
    const record = state.stocks.find((ele) => ele.id == stockId);
    if(record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity
      });
    }
    state.funds -= quantity * stockPrice;
  },
  'SELL_STOCKS'(state, { stockId, quantity, stockPrice}) {
    console.log(state.stocks)
    const record = state.stocks.find((ele) => ele.id == stockId);
    if(record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record, 1))
    }
    state.funds += stockPrice * quantity
  }
}

const actions = {
  sellStocks({commit}, order) {
    commit('SELL_STOCKS', order)
  }
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map((stock) => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}