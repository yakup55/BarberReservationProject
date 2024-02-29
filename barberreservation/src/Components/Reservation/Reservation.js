import React, { useEffect } from "react";
import {
  Button,
  Container,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { add } from "../../Redux/actions/reservationActions";
import { validationSchema } from "../../Admin/reservation/validationSchema";
import { getList2 } from "../../Redux/actions/barberActions";
import { getList4 } from "../../Redux/actions/hourActions";
import ReservationService from "../../Redux/services/reservationService";
import { openSnacbar } from "../../Redux/actions/appActions";
export default function Reservation() {
  const dispacth = useDispatch();
  const service = new ReservationService();
  const { barbers } = useSelector((state) => state.barber);
  const { hours } = useSelector((state) => state.hour);
  const toast = useToast();
  const { snacbar } = useSelector((state) => state.app);
  const { handleSubmit, handleChange, errors, touched, values, handleBlur } =
    useFormik({
      initialValues: {
        barberId: 0,
        hourId: 0,
        userId: localStorage.userId,
        description: "",
        status: false,
        date: "",
      },
      onSubmit: async (values) => {
        const result = await service.check(
          values.barberId,
          values.hourId,
          values.date
        );
        if (result.status === 200) {
          dispacth(
            openSnacbar({
              message: `Bu berberin bu günde ve saattte randevusu vardır`,
              severity: "error",
            })
          );
        } else if (result.status === 404) {
          dispacth(add(values));
          dispacth(
            openSnacbar({
              message: "Randevunuz başarılı bir şekilde oluşturulmuştur",
              severity: "success",
            })
          );
        }
      },
      validationSchema,
    });
  useEffect(() => {
    dispacth(getList2());
    dispacth(getList4());
  }, [dispacth]);
  return (
    <>
    {localStorage.getItem("isBarberLogin")===null &&(
 <Container maxW={800} marginTop={10}>
 <Heading mb={10} textAlign={"center"}>
   Randevu Alın
 </Heading>
 <form onSubmit={handleSubmit}>
   <SimpleGrid columns={1} spacingX="20px" spacingY="20px">
     <Box height="60px">
       <Input
         id="date"
         name="date"
         onChange={handleChange}
         onBlur={handleBlur}
         error={errors.date && touched.date}
         helperText={errors.date && touched.date ? errors.date : ""}
         placeholder="Tarih Seçiniz"
         size="md"
         type="date"
       />
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
             {barber?.userName}
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
         helperText={
           errors.hourId && touched.hourId ? errors.hourId : ""
         }
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
       <Button
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
         Randevu Al
       </Button>
     </Box>
   </SimpleGrid>
 </form>
</Container>
    )}
     
    </>
  );
}
