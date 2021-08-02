const state = () => ({
  year_options: [],
  base_year: 1930
});

const getters = {
  getYearOpts: state => {
    let this_year = new Date().getFullYear();
    let len = this_year - state.base_year;
    let years = Array.from({ length: len }, (_, i) => this_year - i);
    years.splice(len / 3, 0, { text: "選擇年份", value: null, disabled: true });
    return years;
  }
};

// const actions = {
//     async fetchResult({ commit }, text) {
//         let payload = await getSearch(text);
//         commit("ADD_RESULT", payload);
//     }
// };

// const mutations = {
//     ADD_RESULT(state, payload) {
//         state.results = payload.data || [];
//     }
// };

export default {
  namespaced: true,
  state,
  getters
  // actions,
  // mutations
};
