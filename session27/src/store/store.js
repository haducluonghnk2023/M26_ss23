import { createStore } from 'vuex'
import { count } from './modules/count'
import { user } from './modules/user'
import product from './modules/product'



const store = createStore({
    modules: {
        count,
        user,
        product,
    }
})
export default store