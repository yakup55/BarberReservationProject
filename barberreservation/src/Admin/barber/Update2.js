import { EditIcon } from "@chakra-ui/icons";
import { Button, Container, Input, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getById, update } from "../../Redux/actions/barberActions";
import { validationSchema } from "./validationSchema";
export default function Update2() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { id } = useParams();
  const { barber } = useSelector((state) => state.barber);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setValues,
  } = useFormik({
    initialValues: {
      id: id,
      name: "",
      surName: "",
      phoneNumber: "",
      experience: "",
      image: "",
    },
    onSubmit: (values) => {
      dispacth(update(values));
      navigate("/admin/barberslist");
    },
    validationSchema,
  });
  useEffect(() => {
    dispacth(getById(id));
    setValues({
      id: id,
      name: barber.name,
      surName: barber.surName,
      phoneNumber: barber.phoneNumber,
      experience: barber.experience,
      image: barber.image,
    });
  }, [
    id,
    dispacth,
    barber.name,
    barber.surName,
    barber.phoneNumber,
    barber.experience,
    barber.image,
    setValues,
  ]);
  return (
    <Container mt={20}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Input
            variant="outline"
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.name}
            error={errors?.name && touched?.name}
            helperText={errors?.name && touched?.name ? errors?.name : ""}
          />
          <Input
            variant="outline"
            id="surName"
            name="surName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.surName}
            error={errors?.surName && touched?.surName}
            helperText={
              errors?.surName && touched?.surName ? errors?.surName : ""
            }
          />
          <Input
            variant="outline"
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
            error={errors?.phoneNumber && touched?.phoneNumber}
            helperText={
              errors?.phoneNumber && touched?.phoneNumber
                ? errors?.phoneNumber
                : ""
            }
          />
          <Input
            id="experience"
            name="experience"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.experience}
            error={errors.experience && touched.experience}
            helperText={
              errors.experience && touched.experience ? errors.experience : ""
            }
            placeholder="Kaç Yıl Deneyimlisiniz"
          />
          <Input
            id="image"
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.image}
            error={errors.image && touched.image}
            helperText={errors.image && touched.image ? errors.image : ""}
            placeholder="Resim Giriniz"
          />

          <Button
            type="submit"
            onClick={() => navigate("/admin/barberslist")}
            colorScheme="whatsapp"
            leftIcon={<EditIcon></EditIcon>}
          >
            UPDATE
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
