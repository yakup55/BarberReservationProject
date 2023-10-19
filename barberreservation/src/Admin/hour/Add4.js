import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Switch,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList2 } from "../../Redux/actions/barberActions";
import { add } from "../../Redux/actions/hourActions";
import { useFormik } from "formik";
export default function Add4() {
  const { barbers } = useSelector((state) => state.barber);
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    dispacth(getList2());
  }, [dispacth]);
  const { handleSubmit, handleBlur, handleChange, errors, values, touched } =
    useFormik({
      initialValues: {
        hour: "",
        status: false,
        barberId: 0,
      },
      onSubmit: (values) => {
        dispacth(add(values));
        onClose(onClose);
      },
    });
  return (
    <>
      <Button colorScheme="facebook" onClick={onOpen}>
        EKLE
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>Saat Ekle</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Saat Giriniz</FormLabel>
                <Input
                  id="hour"
                  name="hour"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  ref={initialRef}
                  placeholder="Saat Giriniz"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Berber Seçiniz</FormLabel>
                <Select
                  key={values?.barberId}
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
                  {barbers?.map((barber) => (
                    <option key={barber?.id} value={barber?.id}>
                      {barber?.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl mt={4} display="flex" alignItems="center">
                <FormLabel htmlFor="Aktif-Pasif" mb="0">
                  Aktif?Pasif
                </FormLabel>
                <Switch
                  key="status"
                  id="status"
                  name="status"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.status}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                EKLE
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
