import { object, string } from "yup";

export const validationSchema = object({
  name: string()
    .required("Zorunlu Alan")
    .min(2, "En az 2 karakter olmalı")
    .max(20, "En fazla 20 karakter içermeli"),
  phoneNumber: string()
    .required("Zorunlu Alan")
    .min(11, "En az 11 karakter olmalı")
    .max(11, "En fazla 11 karakter içermeli"),
  description: string()
    .required("Zorunlu Alan")
    .min(2, "En az 2 karakter olmalı")
    .max(200, "En fazla 200 karakter içermeli"),
});
