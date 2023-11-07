import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getById, updateImage } from "../../Redux/actions/imageActions";
import { openSnacbar } from "../../Redux/actions/appActions";
import { useFormik } from "formik";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";

export default function Update9() {
  const toast = useToast();
  const { snacbar } = useSelector((state) => state.app);
  const { image } = useSelector((state) => state.image);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { id } = useParams();
  const { handleSubmit, handleBlur, handleChange, values, setValues } =
    useFormik({
      initialValues: {
        id: id,
        imageUrl: "",
      },
      onSubmit: (values) => {
        dispacth(updateImage(id, values));
        dispacth(
          openSnacbar({
            message: "Avatar  Güncellendi",
            severity: "Success",
          })
        );
        navigate("/admin/imageslist");
      },
    });
  useEffect(() => {
    dispacth(getById(id));
    setValues({
      id: id,
      imageUrl: image.imageUrl,
    });
  }, [dispacth, id, setValues, image.imageUrl]);
  return (
    <Container mt={100} maxW={500}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel textAlign={"center"}>Avatar Urlsi Giriniz</FormLabel>
            <Input
              id="imageUrl"
              name="imageUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Avatar Urlsi Giriniz"
              value={values.imageUrl}
            />
          </FormControl>
          <FormControl>
            <Button
              colorScheme="whatsapp"
              type="submit"
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
          </FormControl>
        </Stack>
      </form>
    </Container>
  );
}
