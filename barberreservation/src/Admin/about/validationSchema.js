import { object, string } from "yup";

export const validationSchema = object({
  name: string()
    .required("Zorunlu Alan")
    .min(5, "En az 5 karakter olmalı")
    .max(100, "En fazla 100 karakter olmalı"),
  location: string()
    .required("Zorunlu Alan")
    .min(5, "En az 5 karakter olmalı")
    .max(1000, "En fazla 1000 karakter olmalı"),
  phoneNumber: string()
    .required("Zorunlu Alan")
    .min(11, "En az 1 karakter olmalı")
    .max(11, "En fazla 11 karakter olmalı"),
  eposta: string()
    .required("Zorunlu Alan")
    .min(5, "En az 5 karakter olmalı")
    .max(100, "En fazla 100 karakter olmalı"),
  map: string()
    .required("Zorunlu Alan")
    .min(5, "En az 3 karakter olmalı")
    .max(300, "En fazla 300 karakter olmalı"),
});
