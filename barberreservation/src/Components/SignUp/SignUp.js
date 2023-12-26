import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validationSchema } from "../../Admin/user/validationSchema";
import { openSnacbar } from "../../Redux/actions/appActions";
import { getList6 } from "../../Redux/actions/userActions";
import AuthService from "../../Redux/services/authService";

export default function SignUp() {
  const toast = useToast();
  const { snacbar } = useSelector((state) => state.app);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispacth = useDispatch();
  const { users } = useSelector((state) => state.user);
  const service = new AuthService();
  const { handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      userName: "",
      surName: "",
      phoneNumber: "",
      password: "",
    },
    onSubmit: async (values) => {
      const result = await service.register(values);

      if (users.find((x) => x.phoneNumber === values.phoneNumber)) {
        dispacth(
          openSnacbar({
            message: `Bu Telefon Numarası Kayıtlıdır`,
            severity: "error",
          })
        );
      } else if (users.find((x) => x.name === values.userName)) {
        dispacth(
          openSnacbar({
            message: `Bu Kullanıcı Adı Daha Önce Kullanılmış`,
            severity: "error",
          })
        );
      } else if (result.status === 400) {
        dispacth(
          openSnacbar({
            message: `Kayıtda Bir Hata Oldu`,
            severity: "error",
          })
        );
      } else if (result.status === 201) {
        dispacth(
          openSnacbar({
            message: `Kayıt başarılı giriş yapabilirsiniz`,
            severity: "success",
          })
        );
      }
    },
    validationSchema,
  });

  useEffect(() => {
    dispacth(getList6());
  }, [dispacth]);

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
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
                  id="userName"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  placeholder="Soy Adınız Giriniz"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Telefon Numaranız</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+90" />
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Telefon Numaranızı Giriniz"
                  />
                </InputGroup>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Şifre Giriniz</FormLabel>
                <Input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Şifre  Giriniz"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="blue"
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
