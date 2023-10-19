import {string,object, number} from "yup"
export const validationSchema=object({
    barberId:number().required("Zorunlu Alan").positive(),
    hourId:number().required("Zorunlu Alan").positive(),
    calendarId:number().required("Zorunlu Alan").positive(),
    description:string().required("Zorunlu Alan").min(5,"En az 5 karakter olmalı")
})