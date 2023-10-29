import { object, string } from "yup";

export const validationSchema = object({
  userName: string()
    .required("Zorunlu Alan")
    .min(2, "En az 2 karakter içermeli")
    .max(20, "En fazla 20 karakter olmalı"),
  surName: string()
    .required("Zorunlu Alan")
    .min(2, "En az 2 karakter içermeli")
    .max(30, "En fazla 30 karakter olmalı"),
  phoneNumber: string()
    .required("Zorunlu Alan")
    .min(11, "En az 11 karakter içermeli")
    .max(11, "En fazla 11 karakter olmalı"),
  password: string()
    .required("Zorunlu Alan")
    .min(3, "En az 3 karakter içermeli")
    .max(11, "En fazla 11 karakter olmalı"),
});
