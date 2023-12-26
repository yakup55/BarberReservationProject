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
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PinIcon from "@mui/icons-material/Pin";
import { openSnacbar } from "../../Redux/actions/appActions";
import BarberService from "../../Redux/services/barberService";

export default function AdminUpdatePassword() {
  const toast = useToast();
  const { snacbar } = useSelector((state) => state.app);
  const service = new BarberService();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate = useNavigate();
  const dispacth = useDispatch();

  const handleBarberLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isBarberLogin");
    localStorage.removeItem("message");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("surName");
    localStorage.removeItem("barberId");
    localStorage.removeItem("userName");
    navigate("/");
  };
  const { handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      barberId: localStorage.barberId,
      oldPassword: "",
      newPassword: "",
    },
    onSubmit: async (values) => {
      const result = await service.updateBarberPassword(values);
      if (result.status === 400) {
        dispacth(
          openSnacbar({
            message: `Eski Şifreniz Hatalı`,
            severity: "error",
          })
        );
      } else if (result.status === 200) {
        dispacth(
          openSnacbar({
            message: `Şifreniz Güncellenmiştir`,
            severity: "success",
          })
        );
        handleBarberLogout();
        onClose(onClose);
      }
    },
  });
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
                  id="oldPassword"
                  name="oldPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Eski Şifrenizi Giriniz"
                />
              </FormControl>
            </ModalBody>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Yeni Şifrenizi Giriniz</FormLabel>
                <Input
                  id="newPassword"
                  name="newPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Yeni Şifrenizi Giriniz"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="whatsapp"
                onClick={() =>
                  toast({
                    title: `${snacbar.severity}`,
                    description: `${snacbar.message}`,
                    status: `${snacbar.severity}`,
                    duration: 4000,
                    isClosable: true,
                  })
                }
                mr={3}
              >
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
