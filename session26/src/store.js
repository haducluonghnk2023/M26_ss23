import { createStore } from 'vuex';
const store = createStore({
    state :{
        count: 0,
        todos:[
            {
                id:1,
                name:'Task 1',
                status:true
            },
            {
                id:2,
                name:'Task 2',
                status:false
            },
            {
                id:3,
                name:'Task 3',
                status:true
            },
        ]
    },
    getters:{
        
        getCount:(state)=>{
            return state.count
        },
        doneTodos : (a)=>{
            return a.todos.filter(todo=>todo.status)
        }
    },
    mutations:{
        // đi định nghĩa các phương thức để tương tác với state, chính là dữ liệu
        increment:(state,payload)=>{
            state.count+=payload.amount
            console.log(payload.amount);
            
        }
    },
    actions: {

        // destructuring
        incrementAsync ({ commit }) {
          setTimeout(() => {
            commit('increment',{
                amount: 10,
  
            })
          }, 3000)
        }
      }
})
export default store