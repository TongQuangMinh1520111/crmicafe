// import { Image } from '@chakra-ui/react';
import Image from "next/image";
import React from 'react';
import {logo} from "../public/images/logo.webp";
const Header = () => {
    return (
        <header>
            <h1><a href='./'> <Image src={logo} alt='Dan Abramov' /></a></h1>
        </header>
    );
};

export default Header;