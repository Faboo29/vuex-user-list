import userAxios from "../../resources/axios-users";

const state = {
  loading: true,
  users: [],
  searchValue: ""
};

const mutations = {
  STORE_USER(state, userData) {
    console.log(userData);
    userData.forEach(user => {
      state.loading = false;
      state.users.push(user);
    });
  },
  ENTER_SEARCH(state, searchValue) {
    if (searchValue !== "") {
      state.searchValue = searchValue;
    }
  }
};

const actions = {
  postUser({ commit }) {
    userAxios
      .get("/?results=50")
      .then(res => {
        const data = res.data.results;
        const userData = data;

        commit("STORE_USER", userData);
      })
      .catch(error => console.log(error));
  }
};

const getters = {
  users(state) {
    return state.users;
  },
  loading(state) {
    return state.loading;
  },
  searchValue(state) {
    return state.searchValue;
  },
  getSearchedUsers(state) {
    return state.users.filter(user => {
      const names = user.name.first + user.name.last;
      return names.indexOf(state.searchValue) > -1;
    });
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
