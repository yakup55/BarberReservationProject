import { object, string } from "yup";

export const validationSchema = object({
  dates: string()
    .required("Zorunlu Alan")
    .min(4, "En az 4 karakter olmalı")
    .max(9, "En fazla 9 karakter içermeli"),
});
