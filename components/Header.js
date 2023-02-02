import { Image } from '@chakra-ui/react';
// import Image from "next/image";
import React from "react";
import { Container ,Center} from "@chakra-ui/react";
import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <Container maxW="1200px"  p="20px 0 60px">
        <Center>
            <Link href="#">
            <Image
              src="/images/logo.webp"
              alt="Dan Abramov"
              width={200}
            />
            </Link>
        </Center>
      </Container>
    </header>
  );
};

export default Header;
