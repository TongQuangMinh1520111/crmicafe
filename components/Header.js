import { FormControl, Image, Select } from "@chakra-ui/react";
// import Image from "next/image";
import React from "react";
import { Container, Center } from "@chakra-ui/react";
import Link from "next/link";
import { Field, Formik } from "formik";
const Header = () => {
  return (
    <header>
      <div className="header-top">
        <Formik
          initialValues={{
            staff: "",
          }}
          onSubmit={(value) => {
            alert(JSON.stringify(value, null, 2));
          }}
        >
          {({ values: { value }, handleChange, submitForm }) => (
            <form className="header-form">
              <FormControl>
                <Field
                  as={Select}
                  name="staff"
                  value={value}
                  onChange={(e) => {
                    handleChange(e);
                    submitForm();
                  }}
                >
                  <option value="Nguyen Van A">Nguyen Van A</option>
                  <option value="Nguyen Van B">Nguyen Van B</option>
                  <option value="Nguyen Van C">Nguyen Van C</option>
                </Field>
              </FormControl>
            </form>
          )}
        </Formik>
      </div>
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
