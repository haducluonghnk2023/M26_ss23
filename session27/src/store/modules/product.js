import { addProduct, getAllProduct } from "@/api/productApi"

const product = {
    state :{
        products : []
    },
    mutations:{
        getAllProduct:async (state) => {
            state.products = await getAllProduct()
        },
        addProduct:async (state,payload)=>{
            console.log("giá trị sản phẩm vừa thêm vào",payload);
            const res = await addProduct(payload.data)
            state.products.push(res)
        }
    },
    actions:{
        // xử lí các tác vụ bất đồng bộ
        // hàm đi lấy tất cả sản phẩm

        getAllProduct:({commit})=>{
            commit('getAllProduct')
        },
        addProduct:({commit},payload)=>{
            commit('addProduct',payload)
        }
    },
}
export default product