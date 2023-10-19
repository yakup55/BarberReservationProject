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
import { add } from "../../Redux/actions/quentionsActions";
import { validationSchema } from "./validationSchema";
export default function Add8() {
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues: {
        name: "",
        description: "",
      },
      onSubmit: (values) => {
        dispacth(add(values));
        navigate("/admin/quentionslist");
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
            <ModalHeader>Sıkça Sorulan Soru Ekle</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Soru İsmi</FormLabel>
                <Input
                  id="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
                  helperText={errors.name && touched.name ? errors.name : ""}
                  ref={initialRef}
                  placeholder="Soru İsmi Giriniz"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Soru Açıklama Ekle</FormLabel>
                <Input
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
                  ref={initialRef}
                  placeholder="Soru Açıklama Ekleyiniz"
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
