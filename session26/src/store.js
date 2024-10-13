import { createStore } from "vuex";
const store = createStore({
  state: {
    count: 0,
    todos: [
      {
        id: 1,
        name: "Task 1",
        status: true,
      },
      {
        id: 2,
        name: "Task 2",
        status: false,
      },
      {
        id: 3,
        name: "Task 3",
        status: true,
      },
    ],
    user: {
      id: 1,
      userName: "Nguyễn Văn Nam",
      gender: "Nam",
      dateOfBirth: "20/03/2023",
      address: "Thanh Xuân, Hà Nội",
    },
    users: [
      {
        id: 1,
        userName: "Nguyễn Văn A",
        gender: "Nam",
        dateOfBirth: "20/03/2023",
        address: "Thanh Xuân, Hà Nội",
      },
      {
        id: 2,
        userName: "Nguyễn Văn B",
        gender: "Nam",
        dateOfBirth: "02/03/2022",
        address: "Ha Dong, Hà Nội",
      },
    ],
    products: [
      {
        id: 1,
        productName: "Cam sanh",
        price: "20.000 ",
        quantity: 10,
      },
      {
        id: 2,
        productName: "Buoi ba roi",
        price: "25.0000",
        quantity: 15,
      },
    ],
    randomNumbers: [],
    company: 'Rikkei Academy',
    language: 'en'
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    doneTodos: (a) => {
      return a.todos.filter((todo) => todo.status);
    },
    getUser(state) {
      return state.user;
    },
    getUsers(state) {
      return state.users;
    },
    getProducts(state) {
      return state.products;
    },
    getRandomNumbers(state) {
      return state.randomNumbers;
    },
    getCompany: (state) => state.company,
    getDarkModeStatus: (state) => state.isDarkMode,
    setLanguage(state, lang) {
        state.language = lang;
      }

  },
  mutations: {
    // đi định nghĩa các phương thức để tương tác với state, chính là dữ liệu
    increment: (state, payload) => {
      //   state.count += payload.amount;
      //   console.log(payload.amount);
      state.count++;
    },
    decrement: (state, payload) => {
      state.count--;
    },
    ADD_RANDOM_NUMBER(state, number) {
      state.randomNumbers.push(number);
    },
    setCompany(state, newCompany) {
        state.company = newCompany;
      },
      toggleDarkMode(state) {
        state.isDarkMode = !state.isDarkMode;  
      }
  },
  actions: {
    // destructuring
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment", {
          amount: 10,
        });
      }, 3000);
    },
    generateRandomNumber({ commit }) {
      const randomNumber = Math.floor(Math.random() * 100);
      commit("ADD_RANDOM_NUMBER", randomNumber);
    },
    changeCompany({ commit }) {
        commit('setCompany', 'RikkeiSoft');
      }
  },
});
export default store;
