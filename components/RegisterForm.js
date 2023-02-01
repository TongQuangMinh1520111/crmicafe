import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Container,
} from "@chakra-ui/react";
import React from "react";

const RegisterForm = () => {
  return (
    <Container maxW="900px">
      <FormControl>
        <FormLabel fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Email address</FormLabel>
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input placeholder="large size" size="lg" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Container>
  );
};

export default RegisterForm;
