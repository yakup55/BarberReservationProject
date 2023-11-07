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
import { getById, update } from "../../Redux/actions/aboutActions";
import { EditIcon } from "@chakra-ui/icons";
export default function Update() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { id } = useParams();
  const { about } = useSelector((state) => state.about);
  const { handleSubmit, handleChange, handleBlur, values, setValues } =
    useFormik({
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
    });
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

  return (
    <Container mt={10}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={10}>
          <FormControl>
            <FormLabel>İsim Giriniz</FormLabel>
            <Input
              value={values?.name}
              variant="outline"
              id="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Konum Açıklamasını Giriniz</FormLabel>
            <Input
              value={values?.location}
              id="location"
              name="location"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Konum  Ekleyiniz"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Telefon Numaranızı Giriniz</FormLabel>
            <Input
              value={values?.phoneNumber}
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Telefon Numaranızı Giriniz"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Eposta Adresinizi Giriniz</FormLabel>
            <Input
              value={values?.eposta}
              id="eposta"
              name="eposta"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="E-Posta Adresinizi Giriniz "
            />
          </FormControl>
          <FormControl>
            <FormLabel>Konum Urlsini Giriniz</FormLabel>
            <Input
              value={values?.map}
              id="map"
              name="map"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Harita Uzantısını Giriniz"
            />
          </FormControl>
          <FormControl>
            <Button
              type="submit"
              onClick={() => navigate("/admin/aboutslist")}
              colorScheme="whatsapp"
              leftIcon={<EditIcon></EditIcon>}
            >
              Güncelle
            </Button>
          </FormControl>
        </Stack>
      </form>
    </Container>
  );
}
