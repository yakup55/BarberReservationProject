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
import { validationSchema } from "../../Admin/user/validationSchema";
import { useNavigate } from "react-router-dom";
import { openSnacbar } from "../../Redux/actions/appActions";
import { barberLogin } from "../../Redux/actions/barberActions";
import { setBarber } from "../../Redux/actions/authActions";
import BarberService from "../../Redux/services/barberService";

export default function BarberLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const service = new BarberService();
  const { handleSubmit, handleBlur, handleChange, errors, touched } = useFormik(
    {
      initialValues: {
        userName: "",
        password: "",
      },
      onSubmit: async (values) => {
        dispacth(barberLogin(values));
        const result = await service.barberLogin(values);
        if (result.status === 200) {
          dispacth(
            openSnacbar({
              message: "Login succeeded.",
              severity: "success",
            })
          );

          const resp = result.data;

          localStorage.setItem("barberId", resp.barberId);
          localStorage.setItem("userName", resp.userName);
          localStorage.setItem("surName", resp.surName);
          localStorage.setItem("phoneNumber", resp.phoneNumber);
          localStorage.setItem("image", resp.image);
          localStorage.setItem("expriences", resp.expriences);
          localStorage.setItem("message", resp.message);
          localStorage.setItem("accessToken", resp.accessToken);
         // localStorage.setItem("refreshToken", resp.refreshToken);
          localStorage.setItem("isBarberLogin", true);

          dispacth(
            setBarber({
              barberId: resp.barberId,
              userName: resp.userName,
              accessToken: resp.accessToken,
              isBarberLogin: true,
            })
          );
          navigate("/adminprofile");
        }

        if (result.status === 401) {
          dispacth(
            openSnacbar({
              message: "Login failed.",
              severity: "error",
            })
          );
        }
      },
    },
    validationSchema
  );
  return (
    <>
      <Button colorScheme="teal"  onClick={onOpen}>
        Berber Girişi
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
            <ModalHeader onClick={onClose}>Berber Giriş Yap </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Berber Kullanıcı Adınızı Giriniz</FormLabel>
                <Input
                  id="userName"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.userName && touched.userName}
                  helperText={
                    errors.userName && touched.userName ? errors.userName : ""
                  }
                  ref={initialRef}
                  placeholder="Kullanıcı Adınızı  Giriniz"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Berber Şifrenizi Giriniz</FormLabel>
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
                  placeholder="Şifrenizi Giriniz"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                onClick={onClose && (() => navigate("/adminprofile"))}
                colorScheme="blue"
                mr={3}
              >
                Giriş Yap
              </Button>
              <Button onClick={onClose}>İptal</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
