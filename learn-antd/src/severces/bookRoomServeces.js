import { post} from "../utils/request"

export const bookRoom = async (options) =>{
    const result = await post("book-room",options)
    return result ;
} 
// export const createProduct = async (options) =>{
//     const result =await post("products",options);
//     return result
// }

// export const deleteProduct =async (id) =>{
//     const result = await del(`products/${id}`)
//     return result;
// }

// export const editProduct = async (id,options) =>{
//     const result = await patch(`products/${id}`,options)
//     return result;
// }