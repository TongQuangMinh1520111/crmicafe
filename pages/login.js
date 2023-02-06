import { Formik, Field } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Heading,
  Container,
  Center,
  Stack,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Layout from "@/components/Layout";
const Login = () => {
  return (
    <Layout>
      <Container maxW="900px" pb="60px">
        <Center mb="40px">
          <Heading fontSize={{ base: "25px", md: "30px" }}>Login</Heading>
        </Center>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <FormControl mb="20px">
                <Flex flexWrap={{ base: "wrap", sm: "nowrap" }}>
                  <FormLabel
                    htmlFor="email"
                    w={{ base: "100%", sm: "160px", lg: "200px" }}
                    fontSize={{ base: "16px", md: "18px" }}
                    flexShrink="0"
                  >
                    Email
                  </FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    placeholder="Email"
                    focusBorderColor="crimson"
                    isRequired
                  />
                </Flex>
              </FormControl>
              <FormControl mb={{ base: "40px", md: "60px" }}>
                <Flex flexWrap={{ base: "wrap", sm: "nowrap" }}>
                  <FormLabel
                    htmlFor="password"
                    w={{ base: "100%", sm: "160px", lg: "200px" }}
                    fontSize={{ base: "16px", md: "18px" }}
                    flexShrink="0"
                  >
                    Mật Khẩu
                  </FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="text"
                    variant="filled"
                    placeholder="Nhập Mật Khẩu"
                    focusBorderColor="crimson"
                    isRequired
                  />
                </Flex>
              </FormControl>
              <Center>
                <Button
                  type="submit"
                  colorScheme="red"
                  width="280px"
                  h="50px"
                  fontSize="20px"
                >
                  Login
                </Button>
              </Center>
            </form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};

export default Login;
