import { object,string } from "yup";

export const validationSchema=object({
    name:string().required("Zorunlu Alan").min(5,"En az 5 karakter olmalı").max(100,"En fazla 100 karakter olmalı"),
    image:string().required("Zorunlu Alan").min(5,"En az 5 karakter olmalı").max(1000,"En fazla 1000 karakter olmalı"),
    description:string().required("Zorunlu Alan").min(5,"En az 5 karakter olmalı").max(300,"En fazla 300 karakter olmalı"),
})