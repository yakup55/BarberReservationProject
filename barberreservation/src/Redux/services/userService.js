import axios from "axios";

class UserService{
    constructor(){
        this.baseUrl=`${process.env.REACT_APP_BASEURL}/users`;
    }
    async getUsersList(){
        const url=`${this.baseUrl}`
        return await axios.get(url).then((resp)=>resp.data);
    }

    async getByIdUser(id){
        const url=`${this.baseUrl}/${id}`
return await axios.get(url).then((resp)=>resp.data)
    }

    async addUser(user){
        const url=`${this.baseUrl}/addUser`
        return await axios.post(url,user).then((resp)=>{
            return {status:resp.status,data:resp.data};
        }) 
        .catch((err) => {
            return { status: err.response.status };
          });
    }

    async updateUser(id,user){
        const url=`${this.baseUrl}/${id}`
        return await axios.put(url,user).then((resp)=>resp.data)
    }
    async deleteUser(id){
        const url=`${this.baseUrl}/${id}`
        return await axios.delete(url).then((resp)=>resp.data)
    }

}
export default UserService; 