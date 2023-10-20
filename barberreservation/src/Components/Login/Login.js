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
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../Redux/actions/userActions";
import { validationSchema } from "../../Admin/user/validationSchema";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, handleChange, errors, touched } = useFormik(
    {
      initialValues: {
        name: "",
        surName: "",
        phoneNumber: "",
      },
      onSubmit: (values) => {
        dispacth(add(values));
        //navigate("/admin/barberslist");
      },
    },
    validationSchema
  );
  useEffect(() => {}, [dispacth]);
  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Giriş Yap
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
            <ModalHeader>Giriş Yap </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Telefon Numaranız</FormLabel>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phoneNumber && touched.phoneNumber}
                  helperText={
                    errors.phoneNumber && touched.phoneNumber
                      ? errors.phoneNumber
                      : ""
                  }
                  ref={initialRef}
                  placeholder="Telefon Numaranızı Giriniz"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Giriş Yap
              </Button>
              <Button onClick={onClose}>İptal</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
