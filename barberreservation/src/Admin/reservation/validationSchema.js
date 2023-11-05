import { string, object, number, date } from "yup";
export const validationSchema = object({
  barberId: number().required("Zorunlu Alan").positive(),
  hourId: number().required("Zorunlu Alan").positive(),

  userId: number().required("Zorunlu Alan").positive(),
  description: string()
    .required("Zorunlu Alan")
    .min(5, "En az 5 karakter olmalı"),
  date: date().required("Zorunlu Alan"),
});
