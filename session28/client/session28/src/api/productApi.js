
import axios from "axios"
const getAllProduct = async()=>{
   const res = await axios.get('http://localhost:3000/products')
   return res.data
}
export const getProduct = async()=>{
    const res = await axios.get('http://localhost:3000/cart')
    return res.data
}
export const addProduct = async(product)=>{
    try{
        const res = await axios.post('http://localhost:3000/cart',product)      
        return res.data
    }catch(error){
        console.log(error);
    }
}

export const updateProductQuantity = async ({ id, quantityChange }) => {
  try {
    const res = await axios.patch(`http://localhost:3000/products/${id}`, {
      quantity: quantityChange, 
    });
    return res.data;
  } catch (error) {
    console.error("loi khi cap nhat:", error);
    throw error;
  }
};
export const updateCart  = async(cart)=>{
  const res = await axios.patch(`http://localhost:3000/cart/${cart.id}`,cart)
  return res.data
}



export default getAllProduct;
