import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getById, update } from "../../Redux/actions/quentionsActions";
export default function Update8() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { quention } = useSelector((state) => state.quention);
  const { id } = useParams();
  const { handleSubmit, handleChange, handleBlur, values, setValues } =
    useFormik({
      initialValues: {
        id: id,
        name: "",
        description: "",
      },
      onSubmit: (values) => {
        dispacth(update(id, values));
        navigate("/admin/quentionslist");
      },
    });
  useEffect(() => {
    dispacth(getById(id));
    setValues({
      id: id,
      name: quention.name,
      description: quention.description,
    });
  }, [id, dispacth, setValues, quention.name, quention.description]);
  console.log(quention);
  return (
    <Container mt={100} maxW={500}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel textAlign={"center"}>Soru İsmi</FormLabel>
            <Input
              id="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Soru İsmi Giriniz"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel textAlign={"center"}>Soru Açıklama Ekle</FormLabel>
            <Input
              id="description"
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Soru Açıklama Ekleyiniz"
            />
          </FormControl>

          <Button type="submit" colorScheme="whatsapp" mr={3}>
            Güncelle
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
