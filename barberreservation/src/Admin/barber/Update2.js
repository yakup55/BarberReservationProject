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
      image: "",
      description: "",
    },
    onSubmit: (values) => {
      dispacth(update(values));
      navigate("/admin/aboutslist");
    },
    validationSchema,
  });
  useEffect(() => {
    dispacth(getById(id));
  }, []);
  return (
    <Container mt={20}>
      <from onSubmit={handleSubmit}>
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

          <Button
            type="save"
            onClick={() => navigate("/admin/aboutslist")}
            colorScheme="whatsapp"
            leftIcon={<EditIcon></EditIcon>}
          >
            UPDATE
          </Button>
        </Stack>
      </from>
    </Container>
  );
}
