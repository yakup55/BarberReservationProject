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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../Redux/actions/hourActions";
import { useFormik } from "formik";
export default function Add4() {
  const dispacth = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  if (typeof originalPrompt === 'undefined') {
    var originalPrompt = 'Bu, orijinal istemdir.';
  }
  
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  
  const { handleSubmit, handleBlur, handleChange, errors, values, touched } =
    useFormik({
      initialValues: {
        hour: "",
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
