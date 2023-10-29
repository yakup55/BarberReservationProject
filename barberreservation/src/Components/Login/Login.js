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
import { login, setUser } from "../../Redux/actions/authActions";
import { validationSchema } from "../../Admin/user/validationSchema";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Redux/services/authService";
import { openSnacbar } from "../../Redux/actions/appActions";
import BarberLogin from "./BarberLogin";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const service = new AuthService();
  const { handleSubmit, handleBlur, handleChange, errors, touched } = useFormik(
    {
      initialValues: {
        userName: "",
        password: "",
      },
      onSubmit: async (values) => {
        dispacth(login(values));
        const result = await service.login(values);
        if (result.status === 200) {
          dispacth(
            openSnacbar({
              message: "Login succeeded.",
              severity: "success",
            })
          );

          const resp = result.data;

          localStorage.setItem("userId", resp.userId);
          localStorage.setItem("userName", resp.userName);
          localStorage.setItem("surName", resp.surName);
          localStorage.setItem("phoneNumber", resp.phoneNumber);
          localStorage.setItem("message", resp.message);
          localStorage.setItem("accessToken", resp.accessToken);
          localStorage.setItem("refreshToken", resp.refreshToken);
          localStorage.setItem("isLogin", true);

          dispacth(
            setUser({
              userId: resp.userId,
              userName: resp.userName,
              accessToken: resp.accessToken,
              isLogin: true,
            })
          );
          navigate("/user");
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
  console.log(localStorage);
  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Giriş Yap
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
            <ModalHeader>Giriş Yap </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <FormLabel>Kullanıcı Adınızı Giriniz</FormLabel>
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
                <FormLabel>Şifrenizi Giriniz</FormLabel>
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
              <FormControl mt={4}>
                <>
                  <BarberLogin></BarberLogin>
                </>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                onClick={onClose && (() => navigate("/user"))}
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
