import Vue from 'vue'

export const loadAsyncData = ({ commit }) => {
  Vue.http.get('data.json')
  .then((resp) => resp.json())
  .then((data) => {
    if(data) {
      const stocks = data.stocks
      const funds = data.funds
      const stockPortfolio = data.stockPortfolio
      
      const portfolio = {
        funds,
        stockPortfolio
      }
      commit('SET_STOCKS', stocks)
      commit('SET_PORTFOLIO', portfolio)
    }
  })
}