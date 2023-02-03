import { Image } from "@chakra-ui/react";
// import Image from "next/image";
import React from "react";
import { Container, Center } from "@chakra-ui/react";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <Container maxW="1200px" p={{ base: "10px 0 40px", md: "20px 0 60px" }}>
        <Center>
          <Link href="#">
            <Image
              src="/images/logo.webp"
              alt="Dan Abramov"
              width={{ base: "160px", md: "200px" }}
            />
          </Link>
        </Center>
      </Container>
    </header>
  );
};

export default Header;
