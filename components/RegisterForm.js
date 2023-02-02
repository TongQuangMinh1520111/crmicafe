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

const RegisterForm = () => {
  return (
    <Container maxW="900px">
      <Center mb="40px">
        <Heading>Register</Heading>
      </Center>
      <Formik
        initialValues={{
          name: "",
          number: "",
          email: "",
          address: "",
          game: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <FormControl mb="20px">
              <Flex>
                <FormLabel htmlFor="name" w="200px" fontSize="18px">
                  Họ Và Tên
                </FormLabel>
                <Field
                  as={Input}
                  id="name"
                  name="name"
                  type="text"
                  variant="filled"
                  placeholder="Họ Và Tên"
                  focusBorderColor="crimson"
                  isRequired
                />
              </Flex>
            </FormControl>
            <FormControl mb="20px">
              <Flex>
                <FormLabel htmlFor="number" w="200px" fontSize="18px">
                  Số Điện Thoại
                </FormLabel>
                <Field
                  as={Input}
                  id="number"
                  name="number"
                  type="number"
                  variant="filled"
                  placeholder="Số Điện Thoại"
                  focusBorderColor="crimson"
                  isRequired
                />
              </Flex>
            </FormControl>
            <FormControl mb="20px">
              <Flex>
                <FormLabel htmlFor="email" w="200px" fontSize="18px">
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
            <FormControl mb="20px">
              <Flex>
                <FormLabel htmlFor="address" w="200px" fontSize="18px">
                  Địa Chỉ
                </FormLabel>
                <Field
                  as={Input}
                  id="address"
                  name="address"
                  type="address"
                  variant="filled"
                  placeholder="Địa Chỉ"
                  focusBorderColor="crimson"
                  isRequired
                />
              </Flex>
            </FormControl>

            <FormControl mb="20px">
              <Flex>
                <FormLabel w="200px" fontSize="18px">
                  Nhu Cầu
                </FormLabel>
                <Stack spacing={5} direction="row">
                  <Field
                    as={Checkbox}
                    id="game"
                    name="game"
                    colorScheme="red"
                  >
                    Phòng Game
                  </Field>
                  <Field
                    as={Checkbox}
                    id="project"
                    name="project"
                    colorScheme="red"
                  >
                    Dự án
                  </Field>
                </Stack>
              </Flex>
            </FormControl>
            <FormControl mb="60px">
              <Flex>
                <FormLabel htmlFor="notes" w="200px" fontSize="18px">
                  Ghi Chú
                </FormLabel>
                <Textarea
                  id="notes"
                  name="notes"
                  variant="filled"
                  focusBorderColor="crimson"
                  isRequired
                  placeholder="Ghi Chú"
                  h="150px"
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
                Register
              </Button>
            </Center>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;
