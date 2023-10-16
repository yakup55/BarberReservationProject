import axios from "axios";

class ReservationService{
    constructor(){
        this.baseUrl=`${process.env.REACT_APP_BASEURL}/reservations`;
    }
    async getReservationsList(){
        const url=`${this.baseUrl}`
        return await axios.get(url).then((resp)=>resp.data);
    }

    async getByIdReservation(id){
        const url=`${this.baseUrl}/${id}`
return await axios.get(url).then((resp)=>resp.data)
    }

    async addReservation(reservation){
        const url=`${this.baseUrl}/addReservation`
        return await axios.post(url,reservation).then((resp)=>{
            return {status:resp.status,data:resp.data};
        }) 
        .catch((err) => {
            return { status: err.response.status };
          });
    }

    async updateReservation(id,reservation){
        const url=`${this.baseUrl}/${id}`
        return await axios.put(url,reservation).then((resp)=>resp.data)
    }
    async deleteReservation(id){
        const url=`${this.baseUrl}/${id}`
        return await axios.delete(url).then((resp)=>resp.data)
    }
    
}
export default ReservationService;