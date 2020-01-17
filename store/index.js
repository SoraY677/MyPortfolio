export const state = () => ({
  pageState: "index"
});

export const mutations = {
  changePage(state, pageState) {
    state.pageState = pageState;
  }
};

