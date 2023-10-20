import { Button, Container, Input, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getById, update } from "../../Redux/actions/aboutActions";
import { EditIcon } from "@chakra-ui/icons";
import { validationSchema } from "./validationSchema";
export default function Update() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { id } = useParams();
  const { about } = useSelector((state) => state.about);
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    setValues,
  } = useFormik(
    {
      initialValues: {
        id: id,
        name: "",
        location: "",
        phoneNumber: "",
        eposta: "",
        map: "",
      },
      onSubmit: (values) => {
        dispacth(update(id, values));
        navigate("/admin/aboutslist");
      },
    },
    validationSchema
  );
  useEffect(() => {
    dispacth(getById(id));
    setValues({
      id: id,
      name: about.name,
      location: about.location,
      phoneNumber: about.phoneNumber,
      eposta: about.eposta,
      map: about.map,
    });
  }, [
    id,
    dispacth,
    about.name,
    about.location,
    about.phoneNumber,
    about.eposta,
    about.map,
    setValues,
  ]);
  console.log(about);
  return (
    <Container mt={20}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Input
            value={values?.name}
            variant="outline"
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.name && touched?.name}
            helperText={errors?.name && touched?.name ? errors?.name : ""}
          />
          <Input
            value={values?.location}
            id="location"
            name="location"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.location && touched.location}
            helperText={
              errors.location && touched.location ? errors.location : ""
            }
            placeholder="Konum  Ekleyiniz"
          />
          <Input
            value={values?.phoneNumber}
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phoneNumber && touched.phoneNumber}
            helperText={
              errors.phoneNumber && touched.phoneNumber
                ? errors.phoneNumber
                : ""
            }
            placeholder="Telefon Numaranızı Giriniz"
          />
          <Input
            value={values?.eposta}
            id="eposta"
            name="eposta"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.eposta && touched.eposta}
            helperText={errors.eposta && touched.eposta ? errors.eposta : ""}
            placeholder="E-Posta Adresinizi Giriniz "
          />
          <Input
            value={values?.map}
            id="map"
            name="map"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.map && touched.map}
            helperText={errors.map && touched.map ? errors.map : ""}
            placeholder="Harita Uzantısını Giriniz"
          />

          <Button
            type="submit"
            onClick={() => navigate("/admin/aboutslist")}
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
