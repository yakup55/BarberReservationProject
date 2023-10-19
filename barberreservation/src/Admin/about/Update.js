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
            id="image"
            name="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.image}
            error={errors?.image && touched?.image}
            helperText={errors?.image && touched?.image ? errors?.image : ""}
          />
          <Input
            variant="outline"
            id="description"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
            error={errors?.description && touched?.description}
            helperText={
              errors?.description && touched?.description
                ? errors?.description
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
