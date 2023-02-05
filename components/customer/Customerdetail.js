import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Flex,
  Text,
  List,
  FormControl,
  Select,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React from "react";

const Customerdetail = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" className="customer-modal">
        <ModalHeader
          textAlign="center"
          fontSize={{ base: "25px", md: "30px" }}
          p="0"
          fontWeight="bold"
          mb="30px"
        >
          Modal Title
        </ModalHeader>
        <ModalCloseButton />
        <List className="list-detail">
          <Flex className="item">
            <Text className="ttl">Họ Và Tên</Text>
            <Text>testttttttttt</Text>
          </Flex>
          <Flex className="item">
            <Text className="ttl">Số Điện Thoại</Text>
            <Text>testttttttttt</Text>
          </Flex>
          <Flex className="item">
            <Text className="ttl">Email</Text>
            <Text>testttttttttt</Text>
          </Flex>
          <Flex className="item">
            <Text className="ttl">Địa Chỉ</Text>
            <Text>testttttttttt</Text>
          </Flex>
          <Flex className="item">
            <Text className="ttl">Nhu Cầu</Text>
            <Text>testttttttttt</Text>
          </Flex>
          <Flex className="item">
            <Text className="ttl">Ghi Chú</Text>
            <Text>testttttttttt</Text>
          </Flex>
          <Flex className="item">
            <Text className="ttl">Nhân Viên Phụ Trách</Text>
            <Formik
              initialValues={{
                staff: "",
              }}
              onSubmit={(value) => {
                alert(JSON.stringify(value, null, 2));
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form className="staff-form">
                  <FormControl>
                    <Field
                      as={Select}
                      name="staff"
                      variant="filled"
                      onChange={handleSubmit}
                    >
                      <option value="Nguyen Van A">Nguyen Van A</option>
                      <option value="Nguyen Van B">Nguyen Van B</option>
                      <option value="Nguyen Van C">Nguyen Van C</option>
                    </Field>
                  </FormControl>
                </form>
              )}
            </Formik>
          </Flex>
        </List>
      </ModalContent>
    </Modal>
  );
};

export default Customerdetail;
