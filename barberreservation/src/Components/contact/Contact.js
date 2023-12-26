import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { validationSchema } from "./validationSchema";
import { add } from "../../Redux/actions/contactActions";
import {
  Button,
  Container,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";

export default function Contact() {
  const toast = useToast();
  const { snacbar } = useSelector((state) => state.app);
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
    <Container maxW={800}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Heading textAlign={"center"} fontSize={"2xl"} fontStyle={"italic"}>
            Geri Bildirim Yap
          </Heading>
          <Input
            aria-errormessage={errors.name && touched.name}
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
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
          <Button
            type="submit"
            colorScheme="whatsapp"
            onClick={() =>
              toast({
                title: `${snacbar.severity}`,
                description: `${snacbar.message}`,
                status: `${snacbar.severity}`,
                duration: 4000,
                isClosable: true,
              })
            }
            mr={3}
          >
            Gönder
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
