import getAllProduct, {  addProduct, getProduct, updateCart, updateProductQuantity } from "@/api/productApi"

const product = {
  state: {
    products: [],// Danh sách sản phẩm trong kho
    cart: [], // Danh sách sản phẩm trong giỏ hàng
  },
  mutations: {
     // Lấy tất cả sản phẩm từ API và lưu vào state
    getAllProduct: async (state, products) => {
      state.products = products
    },
     // Lấy tất cả sản phẩm trong giỏ hàng từ API
    getAllProductInCart: (state, product) => {
      state.cart = product;
    },
    // Thêm sản phẩm vào giỏ hàng
    addToCart:async(state, product) =>{
      const cartItem = state.cart.find((item) => item.id === product.id);
      // console.log("cartItem",cartItem);
      // console.log('state',product.cartQuantity);
      const quantityProduct = product.cartQuantity

      if (cartItem) {
        // console.log(cartItem);
        // console.log(product.quantity);
        cartItem.quantity += quantityProduct;
        const res = await updateCart(cartItem)
        const a = state.cart.findIndex(c => c.id === res.id)
        if(a !== -1){
          state.cart[a] = {...state.cart[a],...res};
        } 
        console.log("cap nhat thanh cong:", cartItem.cartQuantity);
      } else {
        const res = await addProduct(product);
        state.cart.push(res);
        console.log("them thanh cong:", product);
      }
    },
    // Cập nhật số lượng sản phẩm  
    updateCartProductQuantity: (state, { productId ,diffQuantity}) => {
      const productItem = state.products.find(item => item.id === productId);
      // console.log(productItem);
      // console.log(productId);
      // console.log(diffQuantity);
      if(productItem){
        productItem.quantity = diffQuantity;
      }
    }
    
  },
  actions: {
    // Lấy tất cả sản phẩm từ API
    getAllProduct: async ({ commit }) => {
      try {
        const products = await getAllProduct()
        commit('getAllProduct', products)
      } catch (error) {
        console.error('loi:', error)
      }
    },
      // Lấy tất cả sản phẩm trong giỏ hàng từ API
    getAllProductInCart: async ({ commit }) => {
      try {
        const product = await getProduct();
        // console.log(11111111111, product);
        commit('getAllProductInCart', product);
      } catch (error) {
        console.error('loi:', error)
      }
    },
    addToCart: async({ commit }, product) => {
      commit("addToCart", product);
    },
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateProductQuantity:async({ commit }, { productId, diffQuantity }) => {
      try { 
        await updateProductQuantity({ id: productId, quantityChange: diffQuantity });
        commit("updateCartProductQuantity", { productId, diffQuantity });
      } catch (error) {
        console.error("loi khi cap nhat:", error);
      }
    }
  },
}
export default product