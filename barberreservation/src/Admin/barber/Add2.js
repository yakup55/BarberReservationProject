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
import { add } from "../../Redux/actions/barberActions";
import { validationSchema } from "./validationSchema";
export default function Add2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, handleChange, errors, touched } = useFormik(
    {
      initialValues: {
        name: "",
        surName: "",
        phoneNumber: "",
        experience: "",
        image: "",
      },
      onSubmit: (values) => {
        dispacth(add(values));
        navigate("/admin/barberslist");
        onClose(onClose);
      },
    },
    validationSchema
  );

  return (
    <>
      <Button
        leftIcon={<AddIcon></AddIcon>}
        colorScheme="facebook"
        onClick={onOpen}
      >
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
            <ModalHeader>Berber Ekle</ModalHeader>
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
              <FormControl mt={4}>
                <FormLabel>Kaç Yıl Deneyimlisiniz</FormLabel>
                <Input
                  id="experience"
                  name="experience"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.experience && touched.experience}
                  helperText={
                    errors.experience && touched.experience
                      ? errors.experience
                      : ""
                  }
                  ref={initialRef}
                  placeholder="Kaç Yıl Deneyimlisiniz"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Resim Giriniz</FormLabel>
                <Input
                  id="image"
                  name="image"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.image && touched.image}
                  helperText={errors.image && touched.image ? errors.image : ""}
                  ref={initialRef}
                  placeholder="Resim Giriniz"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Ekle
              </Button>
              <Button onClick={onClose}>İptal</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
