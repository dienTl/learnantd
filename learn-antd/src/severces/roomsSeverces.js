import {del, post ,get ,patch} from "../utils/request"

 export const createroom =  async (options) =>{
    const result = await post("Rooms" , options)
    return result
}

export const getlistRoom = async () =>{
    const result = await get("Rooms")
    return result
}

export const deleteRoom = async(id) =>{
    const result = await del(`Rooms/${id}`);
    return result;
}
export const Updateroom = async( id , options)=>{
    const result =await patch(`Rooms/${id}`,options)
    return result;
}