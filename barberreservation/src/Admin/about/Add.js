import { AddIcon } from "@chakra-ui/icons";
import { Button, Container, Input, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../Redux/actions/aboutActions";
import { validationSchema } from "./validationSchema";
export default function Add() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        name: "",
        image: "",
        description: "",
      },
      onSubmit: (values) => {
        dispacth(add(values));
        navigate("/admin/aboutslist");
      },
      validationSchema,
    }
  );

  return (
    <Container mt={20}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={8}>
          <Input
            variant="outline"
            id="name"
            name="name"
            placeholder="Hakkında Adı Giriniz"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name : ""}
          />
          <Input
            variant="outline"
            id="image"
            name="image"
            placeholder="Hakkında Resmi Giriniz"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.image && touched.image}
            helperText={errors.image && touched.image ? errors.image : ""}
          />
          <Input
            variant="outline"
            id="description"
            name="description"
            placeholder="Hakkında Açıklama Giriniz"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.description && touched.description}
            helperText={
              errors.description && touched.description
                ? errors.description
                : ""
            }
          />

          <Button
            variant="outline"
            type="submit"
            //onClick={() => navigate("/admin/aboutslist")}
            colorScheme="whatsapp"
            leftIcon={<AddIcon></AddIcon>}
          >
            ADD
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
