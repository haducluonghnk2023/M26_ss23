import axios from "axios"

//API lấy toàn bộ thông tin sản phẩm 
export const getAllProduct = async () => {
    const res = await axios.get('http://localhost:3000/products')
    return res.data
}
// API lấy chi tiết 1 sản phẩm
export const getOneProduct = (id) => {

}
// API thêm mới 1 sản phẩm 
export const addProduct = async (product) => {
    try {
        const res = await axios.post('http://localhost:3000/products', product)
        return res.data
    } catch (error) {
        console.log(error);

    }
}