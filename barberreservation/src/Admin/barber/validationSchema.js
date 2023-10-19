import {object, string } from "yup";

export const validationSchema = object({
  name: string()
    .required("Zorunlu Alan")
    .min(2, "En az 2 karakter olmalı")
    .max(20, "En fazla 20 karakter olmalı"),
  surName: string()
    .required("Zorunlu Alan")
    .min(2, "En az 2 karakter olmalı")
    .max(20, "En fazla 20 karakter olmalı"),
  phoneNumber: string()
    .required("Zorunlu Alan")
    .min(2, "En az 2 karakter olmalı")
    .max(20, "En fazla 20 karakter olmalı"),
  experience: string()
    .required("Zorunlu Alan")
    .max(30, "En fazla 30 karakter olmalı"),
  iamge: string()
    .required("Zorunlu Alan")
    .min(2, "En az 2 karakter olmalı")
    .max(500, "En fazla 500 karakter olmalı"),
});
