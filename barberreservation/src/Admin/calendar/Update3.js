import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getById, update } from "../../Redux/actions/calendarActions";
import { validationSchema } from "./validationSchema";
import { Button, Container, Input, Stack } from "@chakra-ui/react";

export default function Update3() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { calendar } = useSelector((state) => state.calendar);
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    values,
    setValues,
  } = useFormik(
    {
      initialValues: {
        id: id,
        dates: "",
      },
      onSubmit: (values) => {
        dispacth(update(values, id));
        navigate("/admin/calendarslist");
      },
    },
    validationSchema
  );
  useEffect(() => {
    dispacth(getById(id));
    setValues({
      id: id,
      dates: calendar?.dates,
    });
  }, [id, dispacth, calendar?.dates, setValues]);
  console.log(calendar);
  return (
    <Container mt={100}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={10}>
          <Input
            value={values?.dates}
            id="dates"
            name="dates"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.dates && touched.dates}
            helperText={errors.dates && touched.dates ? errors.dates : ""}
            placeholder="Gün Giriniz"
          />

          <Button type="submit" colorScheme="blue" mr={3}>
            Güncelle
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
