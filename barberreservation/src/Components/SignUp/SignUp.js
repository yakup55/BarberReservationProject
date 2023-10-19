import { AddIcon } from "@chakra-ui/icons";
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
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../Redux/actions/userActions";
import { validationSchema } from "../../Admin/user/validationSchema";

export default function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, handleChange, errors, touched, values } =
    useFormik({
      initialValues: {
        name: "",
        surName: "",
        phoneNumber: "",
      },
      onSubmit: (values) => {
        dispacth(add(values));
        //navigate("/admin/barberslist");
        onClose={onClose}
      },
      validationSchema,
    });
  useEffect(() => {
   
  }, [dispacth]);
  return (
    <>
      <Button
        colorScheme="teal"
        onClick={onOpen}
      >
        Kayıt Ol
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
            <ModalHeader>Kayıt Ol </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Adınız</FormLabel>
                <Input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name ? errors.name : ""}
                  ref={initialRef}
                  placeholder="Adınızı Giriniz"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Soy Adınız</FormLabel>
                <Input
                  id="surName"
                  name="surName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.surName && touched.surName}
                  helperText={
                    errors.surName && touched.surName ? errors.surName : ""
                  }
                  ref={initialRef}
                  placeholder="Soy Adınız Giriniz"
                />
              </FormControl>
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
                Kayıt Ol
              </Button>
              <Button onClick={onClose}>İptal</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}