import { TriangleUpIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import { yellow } from "@mui/material/colors";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;

      if (scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <IconButton
      width={50}
      height={50}
       isRound={true}
       variant='solid'
       colorScheme='teal'
       aria-label='Done'
       fontSize='20px'
        onClick={handleClick}
        style={{
            backgroundColor:"darkorange",
          visibility: isVisible ? "visible" : "hidden",
          position: "fixed",
          bottom: "100px",
          right: "20px",
          
        }}
      >
        <TriangleUpIcon 
        
          rounded="full"
          size="lg"
          position="absolute"
        ></TriangleUpIcon>
      </IconButton>
    </>
  );
}
