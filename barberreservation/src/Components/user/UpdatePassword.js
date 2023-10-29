import {
  Button,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
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
import { AddIcon } from "@chakra-ui/icons";
import PinIcon from "@mui/icons-material/Pin";

export default function UpdatePassword() {
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
    }
  );
  return (
    <>
      <MenuItem ml={-3} icon={<PinIcon></PinIcon>} onClick={onOpen}>
        Şifre Güncelle
      </MenuItem>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form onSubmit={handleSubmit}>
          <ModalContent>
            <ModalHeader>Şifre Güncelle</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Eski Şifrenizi Giriniz</FormLabel>
                <Input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                  ref={initialRef}
                  placeholder="Eski Şifrenizi Giriniz"
                />
              </FormControl>
            </ModalBody>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Yeni Şifrenizi Giriniz</FormLabel>
                <Input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                  ref={initialRef}
                  placeholder="Yeni Şifrenizi Giriniz"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Güncelle
              </Button>
              <Button onClick={onClose}>İptal</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
