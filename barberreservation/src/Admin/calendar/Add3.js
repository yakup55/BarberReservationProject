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
import { add } from "../../Redux/actions/calendarActions";
import { validationSchema } from "./validationSchema";
import { AddIcon } from "@chakra-ui/icons";
export default function Add3() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, handleChange, errors, touched } = useFormik(
    {
      initialValues: {
        dates: "",
      },
      onSubmit: (values) => {
        dispacth(add(values));
        navigate("/admin/calendarslist");
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
        ADD
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
            <ModalHeader>Gün Ekle</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Gün Giriniz</FormLabel>
                <Input
                  id="dates"
                  name="dates"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.dates && touched.dates}
                  helperText={errors.dates && touched.dates ? errors.dates : ""}
                  ref={initialRef}
                  placeholder="Gün Giriniz"
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
