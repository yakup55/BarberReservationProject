import React, { useEffect } from "react";
import {
  Button,
  Container,
  Heading,
  Select,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { add } from "../../Redux/actions/reservationActions";
import { validationSchema } from "../../Admin/reservation/validationSchema";
import { getList2 } from "../../Redux/actions/barberActions";
import { getList4 } from "../../Redux/actions/hourActions";
import { getList3 } from "../../Redux/actions/calendarActions";
export default function Reservation() {
  const dispacth = useDispatch();
  const { barbers } = useSelector((state) => state.barber);
  const { hours } = useSelector((state) => state.hour);
  const { calendars } = useSelector((state) => state.calendar);
  const { handleSubmit, handleChange, errors, touched, values, handleBlur } =
    useFormik({
      initialValues: {
        barberId: 0,
        hourId: 0,
        calendarId: 0,
        description: "",
      },
      onSubmit: (values) => {
        dispacth(add(values));
      },
      validationSchema,
    });
  useEffect(() => {
    dispacth(getList2());
    dispacth(getList3());
    dispacth(getList4());
  }, [dispacth]);
  console.log(hours);
  return (
    <Container maxW={1000} marginTop={10}>
      <Heading mb={10} textAlign={"center"}>
        Randevu Alın
      </Heading>
      <form onSubmit={handleSubmit}>
        <SimpleGrid columns={1} spacingX="20px" spacingY="20px">
          <Box height="60px">
            <Select
              value={values.calendarId}
              id="calendarId"
              name="calendarId"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.calendarId && touched?.calendarId}
              helperText={
                errors?.calendarId && touched?.calendarId
                  ? errors?.calendarId
                  : ""
              }
              placeholder="Gün Seçiniz"
            >
              {calendars.map((calendar) => (
                <option key={calendar?.id} value={calendar?.id}>
                  {calendar?.dates}
                </option>
              ))}
            </Select>
          </Box>
          <Box height="60px">
            <Select
              value={values?.barberId}
              id="barberId"
              name="barberId"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.barberId && touched.barberId}
              helperText={
                errors.barberId && touched.barberId ? errors.barberId : ""
              }
              placeholder="Berber Seçiniz"
            >
              {barbers.map((barber) => (
                <option key={barber?.id} value={barber?.id}>
                  {barber?.name}
                </option>
              ))}
            </Select>
          </Box>
          <Box height="60px">
            <Select
              value={values?.hourId}
              id="hourId"
              name="hourId"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.hourId && touched.hourId}
              helperText={errors.hourId && touched.hourId ? errors.hourId : ""}
              placeholder="Saat Seçiniz"
            >
              {hours.map((hour) => (
                <option key={hour?.id} value={hour?.id}>
                  {hour?.hour}
                </option>
              ))}
            </Select>
          </Box>
          <Box height="90px">
            <Textarea
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
              placeholder="Not Ekleyebilirsiniz..."
            />
          </Box>
          <Box height="60px">
            <Button type="submit" alignItems="center">
              Randevu Al
            </Button>
          </Box>
        </SimpleGrid>
      </form>
    </Container>
  );
}
