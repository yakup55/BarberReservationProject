import { string, object, number, boolean } from "yup";
export const validationSchema = object({
  hour: string().required("Zorunlu Alan"),
  status: boolean().required("Zorunlu Alan"),
  barberId: number().required().positive().integer(),
});
