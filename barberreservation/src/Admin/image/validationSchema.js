import { object, string } from "yup";

export const validationSchema = object({
  imageUrl: string()
    .required("Zorunlu Alan")
    .min(2, "En az 2 karakter olmalı")
    .max(200, "En fazla 200 karakter olmalı"),
});
