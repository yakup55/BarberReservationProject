import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByHourId, update } from "../../Redux/actions/hourActions";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
export default function Update4() {
  const dispacth = useDispatch();
  const { id } = useParams();
  const { hour } = useSelector((state) => state.hour);
  const navigate=useNavigate();
  const { handleSubmit, handleBlur, handleChange, values, setValues } =
    useFormik({
      initialValues: {
        id: id,
        hour: "",
      },
      onSubmit: (values) => {
        dispacth(update(id, values));
        navigate("/admin/hourslist")
      },
    });
  useEffect(() => {
    dispacth(getByHourId(id));
    setValues({
      id: id,
      hour: hour.hour,
    });
  }, [dispacth, id, setValues, hour.hour]);
  return (
    <Container mt={20}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel textAlign={"center"}>Saat Giriniz</FormLabel>
            <Input
              id="hour"
              name="hour"
              value={values.hour}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Saat Giriniz"
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
