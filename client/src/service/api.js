import axios from 'axios'

const URL='http://localhost:8000';

export const addUser = async(data)=>{
    try{
    await axios.post(`${URL}/add`,data);
    }
    catch(error){
        console.log("error while calling add user api",error);
    }
}
export const getUsers = async()=>{
    try{
        return await axios.get(`${URL}/all`)
    }
    catch(error){
        console.log("error while calling getuser api",error);
    }
}
export const getUser = async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log("error while calling getUser API", error)
    }
}
export const editUser = async(user,id)=>{
    try{
        return await axios.post(`${URL}/${id}`,user)
    }
    catch(error){
        console.log("error while calling editUser api",error)
    }
}
export const deleteUser = async(id)=>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log("error while calling deleteUser api",error);
    }
}