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
import { getByUserId, update } from "../../Redux/actions/userActions";
export default function UserUpdate() {
  const toast = useToast();
  const { snacbar } = useSelector((state) => state.app);
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, handleChange, values, setValues } =
    useFormik({
      initialValues: {
        id: id,
        surName: "",
      },
      onSubmit: (values) => {
        dispacth(update(id, values));
        dispacth(
          openSnacbar({
            message: "Bilgileriniz Güncellendi ",
            severity: "Success",
          })
        );
        navigate(`/user`);
      },
    });
  useEffect(() => {
    dispacth(getByUserId(id));
    setValues({
      id: id,
      surName: user.surName,
    });
  }, [
    id,
    dispacth,
    setValues,
    user.surName
  ]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl textAlign={"center"}>
            <Avatar  w={200} h={200}></Avatar>
          </FormControl>
          <FormControl>
            <FormLabel>Kullanıcı Adınız</FormLabel>
            <Input isDisabled value={user.name} />
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
            <Input value={user.phoneNumber} isDisabled />
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
