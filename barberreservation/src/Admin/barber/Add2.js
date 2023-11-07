import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  SimpleGrid,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "./validationSchema";
import { getImagesList } from "../../Redux/actions/imageActions";
import { openSnacbar } from "../../Redux/actions/appActions";
import { barberRegister } from "../../Redux/actions/barberActions";
export default function Add2() {
  const { images } = useSelector((state) => state.image);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const { handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik(
      {
        initialValues: {
          userName: "",
          surName: "",
          phoneNumber: "",
          experience: "",
          imageId: 0,
          password: "",
        },
        onSubmit: (values) => {
          dispacth(barberRegister(values));
          dispacth(
            openSnacbar({
              message: "Berber Eklendi",
              severity: "Success",
            })
          );
          navigate("/admin/barberslist");
          onClose(onClose);
        },
      },
      validationSchema
    );
  useEffect(() => {
    dispacth(getImagesList());
  }, [dispacth]);
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
            <ModalHeader>Berber Ekle</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Adınız</FormLabel>
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
                  error={errors.surName && touched.surName}
                  helperText={
                    errors.surName && touched.surName ? errors.surName : ""
                  }
                  ref={initialRef}
                  placeholder="Soy Adınız Giriniz"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Telefon Numaranız</FormLabel>
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
                <FormLabel>Kaç Yıl Deneyimlisiniz</FormLabel>
                <Input
                  id="experience"
                  name="experience"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.experience && touched.experience}
                  helperText={
                    errors.experience && touched.experience
                      ? errors.experience
                      : ""
                  }
                  ref={initialRef}
                  placeholder="Kaç Yıl Deneyimlisiniz"
                />
              </FormControl>
              <FormControl as="fieldset">
                <FormLabel as="legend">Avatar Seçiniz</FormLabel>

                <RadioGroup defaultValue="Itachi">
                  <HStack spacing="30px">
                    <SimpleGrid mt={2} mb={6} columns={0} spacing={10}>
                      <Box height="80px">
                        {images.map((image) => (
                          <Radio
                            id="imageId"
                            name="imageId"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.imageId && touched.imageId}
                            helperText={
                              errors.imageId && touched.imageId
                                ? errors.imageId
                                : ""
                            }
                            ref={initialRef}
                            key={image.id}
                            value={image.id}
                          >
                            <Avatar src={`${image.imageUrl}`}></Avatar>
                          </Radio>
                        ))}
                      </Box>
                    </SimpleGrid>
                  </HStack>
                </RadioGroup>
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
