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
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "./validationSchema";
import { addImage } from "../../Redux/actions/imageActions";
import { openSnacbar } from "../../Redux/actions/appActions";
export default function Add9() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, handleChange, errors, touched } = useFormik(
    {
      initialValues: {
        imageUrl: "",
      },
      onSubmit: (values) => {
        dispacth(addImage(values));
        dispacth(
          openSnacbar({
            message: "Avatar  Eklendi",
            severity: "Success",
          })
        );
        navigate("/admin/imageslist");
        onClose(onClose);
      },
    },
    validationSchema
  );

  const toast = useToast();

  const { snacbar } = useSelector((state) => state.app);
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
            <ModalHeader>Avatar Ekle</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Avatar Urlsi Giriniz</FormLabel>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.imageUrl && touched.imageUrl}
                  helperText={
                    errors.imageUrl && touched.imageUrl ? errors.imageUrl : ""
                  }
                  ref={initialRef}
                  placeholder="Avatar Urlsi Giriniz"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
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
