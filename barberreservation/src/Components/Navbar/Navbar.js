import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import { CalendarIcon, EditIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Login from "../Login/Login";
import UpdatePassword from "../user/UpdatePassword";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import AdminUpdatePassword from "../../Admin/home/AdminUpdatePassword";
function Navbar() {
  const navigate = useNavigate();
  const { toggleColorMode, colorMode } = useColorMode();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("message");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("surName");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate("/");
  };
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

  return (
    <div>
      <Flex bg="" minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading onClick={() => navigate("/")}>𝕭𝖆𝖗𝖇𝖊𝖗 𝕾𝖍𝖔𝖕</Heading>
        </Box>
        <Spacer />
        {localStorage.isLogin === undefined &&
          localStorage.isBarberLogin === undefined && (
            <ButtonGroup gap="3" marginRight={5}>
              <Button rounded="full">
                <IconButton
                  aria-label="toggle theme"
                  rounded="full"
                  size="lg"
                  position="absolute"
                  onClick={toggleColorMode}
                  icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                />
              </Button>

              <Button colorScheme="teal">
                <SignUp></SignUp>
              </Button>
              <Button colorScheme="teal">
                <Login></Login>
              </Button>
            </ButtonGroup>
          )}
        {localStorage.isLogin === "true" && (
          <ButtonGroup gap="3" marginRight={5}>
            <Button rounded="full">
              <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="lg"
                position="absolute"
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              />
            </Button>

            <Menu>
              <MenuButton as={Button} colorScheme="pink">
                Profilim
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem
                    icon={<HomeIcon></HomeIcon>}
                    onClick={() => navigate("/user")}
                  >
                    Ana Sayfa
                  </MenuItem>
                  <MenuItem>
                    <UpdatePassword></UpdatePassword>{" "}
                  </MenuItem>
                  <MenuItem
                    ml={1}
                    onClick={() =>
                      navigate(`/userupdate/${localStorage.userId}`)
                    }
                    icon={<EditIcon></EditIcon>}
                  >
                    Bilgilerimi Güncelle
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem
                    icon={<ExitToAppIcon></ExitToAppIcon>}
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Çıkış Yap
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </ButtonGroup>
        )}
        {localStorage.isBarberLogin === "true" && (
          <ButtonGroup gap="3" marginRight={5}>
            <Button rounded="full">
              <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="lg"
                position="absolute"
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              />
            </Button>

            <Menu>
              <MenuButton as={Button} colorScheme="pink">
                Admin
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem
                    icon={<HomeIcon></HomeIcon>}
                    onClick={() => navigate("/admin")}
                  >
                    Ana Sayfa
                  </MenuItem>
                  <MenuItem>
                    <AdminUpdatePassword></AdminUpdatePassword>
                  </MenuItem>
                  <MenuItem
                    ml={1}
                    onClick={() => navigate("/adminprofile")}
                    icon={<CalendarIcon></CalendarIcon>}
                  >
                    Randevularım
                  </MenuItem>
                  <MenuItem
                    ml={1}
                    onClick={() =>
                      navigate(`/adminupdate/${localStorage.barberId}`)
                    }
                    icon={<EditIcon></EditIcon>}
                  >
                    Bilgilerimi Güncelle
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem
                    icon={<ExitToAppIcon></ExitToAppIcon>}
                    onClick={() => {
                      handleBarberLogout();
                    }}
                  >
                    Çıkış Yap
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </ButtonGroup>
        )}
      </Flex>
    </div>
  );
}
export default Navbar;
