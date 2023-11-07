import {
  Avatar,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { openSnacbar } from "../../Redux/actions/appActions";
import { getByBarberId, update } from "../../Redux/actions/barberActions";
export default function AdminUpdate() {
  const toast = useToast();
  const { snacbar } = useSelector((state) => state.app);
  const { id } = useParams();
  const { barber } = useSelector((state) => state.barber);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, handleChange, values, setValues } =
    useFormik({
      initialValues: {
        id: id,
        surName: "",
        experience: "",
      },
      onSubmit: (values) => {
        dispacth(update(id, values));
        dispacth(
          openSnacbar({
            message: "Bilgileriniz Güncellendi ",
            severity: "Success",
          })
        );
        navigate(`/admin/barberslist`);
      },
    });
  useEffect(() => {
    dispacth(getByBarberId(id));
    setValues({
      id: id,
      surName: barber.surName,
      experience: barber.experience,
      imageUrl: barber.imageUrl,
    });
  }, [
    id,
    dispacth,
    setValues,
    barber.surName,
    barber.experience,
    barber.imageUrl,
  ]);

  console.log(barber);
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl textAlign={"center"}>
            <Avatar src={barber.imageUrl} w={200} h={200}></Avatar>
          </FormControl>
          <FormControl>
            <FormLabel>Kullanıcı Adınız</FormLabel>
            <Input isDisabled value={barber.userName} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Soy Adınız</FormLabel>
            <Input
              value={values.surName}
              id="surName"
              name="surName"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Telefon Numaranız</FormLabel>
            <Input value={barber.phoneNumber} isDisabled />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Kaç Yıl Deneyimlisiniz</FormLabel>
            <Input
              value={values.experience}
              id="experience"
              name="experience"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Kaç Yıl Deneyimlisiniz"
            />
          </FormControl>
          <Button
          mb={2}
            type="submit"
            colorScheme="whatsapp"
            onClick={() =>
              toast({
                title: `${snacbar.severity}`,
                description: `${snacbar.message}`,
                status: `${snacbar.severity}`,
                duration: 5000,
                isClosable: true,
              })
            }
          >
            Güncelle
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
