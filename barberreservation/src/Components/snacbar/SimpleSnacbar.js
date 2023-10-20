import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSnacbar } from "../../Redux/actions/appActions";
import { Button, Wrap, WrapItem, useToast } from "@chakra-ui/react";

export default function SimpleSnacbar() {
  const toast = useToast();
  return (
    <Button
      type="submit"
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }
    >
      Kayıt Ol
    </Button>
  );
}
