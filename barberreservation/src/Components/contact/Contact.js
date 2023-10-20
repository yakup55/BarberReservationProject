import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { validationSchema } from "./validationSchema";
import { add } from "../../Redux/actions/contactActions";
import { Button, Container, Heading, Input, Stack } from "@chakra-ui/react";

export default function Contact() {
  const dispacth = useDispatch();
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        name: "",
        phoneNumber: "",
        description: "",
      },
      onSubmit: (values) => {
        dispacth(add(values));
      },
    },
    validationSchema
  );
  return (
    <Container maxW={700}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Heading textAlign={"center"} fontSize={"2xl"} fontStyle={"italic"}>
            İletişim Yap
          </Heading>
          <Input
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name}
            helperText={errors.name && touched.name ? errors.name : ""}
            variant="outline"
            placeholder="Adınızı Giriniz"
          />
          <Input
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
            variant="outline"
            placeholder="Telefon Numaranızı Giriniz"
          />
          <Input
            id="description"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.description && touched.description}
            helperText={
              errors.description && touched.description
                ? errors.description
                : ""
            }
            variant="outline"
            placeholder="Açıklama  Giriniz"
          />
          <Button colorScheme="whatsapp" type="submit">
            Gönder
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
