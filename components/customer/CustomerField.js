import { Container, Flex, FormControl, Select } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";

const CustomerField = () => {
  return (
    <Container maxW={900} mb="40px" p={0}>
      <Formik
        initialValues={{
          assign: "",
          status: "",
        }}
        onSubmit={(value) => {
          console.log(JSON.stringify(value, null, 2));
        }}
      >
        {({ handleChange, values: { value }, submitForm }) => (
          <Form className="field-form">
            <Flex flexWrap={{ base: "wrap", sm: "nowrap" }}>
              <FormControl m={{ base: "0 0 10px", sm: "0 30px 0 0" }}>
                <Field
                  as={Select}
                  name="assign"
                  value={value}
                  onChange={e => {
                    handleChange(e);
                    submitForm();
                  }}
                >
                  <option value="Tất cả">Tất cả</option>
                  <option value="Đã assign">Đã assign</option>
                  <option value="Chưa assgin">Chưa assgin</option>
                </Field>
              </FormControl>
              <FormControl>
                <Field
                  as={Select}
                  name="status"
                  value={value}
                  onChange={e => {
                    handleChange(e);
                    submitForm();
                  }}
                >
                  <option value="Tất cả">Tất cả</option>
                  <option value="Hoàn thành">Hoàn thành</option>
                  <option value="Đang xử lý">Đang xử lý</option>
                  <option value="Mới">Mới</option>
                </Field>
              </FormControl>
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CustomerField;
