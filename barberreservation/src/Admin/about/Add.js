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
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../Redux/actions/aboutActions";
import { validationSchema } from "./validationSchema";
export default function Add() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        name: "",
        location: "",
        phoneNumber: "",
        eposta: "",
        map: "",
      },
      onSubmit: (values) => {
        dispacth(add(values));
        navigate("/admin/aboutslist");
        onClose(onClose);
      },
    
    },
    validationSchema,
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
            <ModalHeader>Hakkında Ekle</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Hakkında İsmi</FormLabel>
                <Input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name ? errors.name : ""}
                  ref={initialRef}
                  placeholder="Hakkında İsmi Giriniz"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Konum Ekle</FormLabel>
                <Input
                  id="location"
                  name="location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.location && touched.location}
                  helperText={
                    errors.location && touched.location ? errors.location : ""
                  }
                  ref={initialRef}
                  placeholder="Konum  Ekleyiniz"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Telefon Numaranızı Giriniz </FormLabel>
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
                <FormLabel>E-Posta Adresinizi Giriniz </FormLabel>
                <Input
                  id="eposta"
                  name="eposta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.eposta && touched.eposta}
                  helperText={
                    errors.eposta && touched.eposta ? errors.eposta : ""
                  }
                  ref={initialRef}
                  placeholder="E-Posta Adresinizi Giriniz "
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Harita Uzantısını Giriniz </FormLabel>
                <Input
                  id="map"
                  name="map"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.map && touched.map}
                  helperText={errors.map && touched.map ? errors.map : ""}
                  ref={initialRef}
                  placeholder="Harita Uzantısını Giriniz"
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
