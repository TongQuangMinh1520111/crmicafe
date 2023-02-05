import { useDisclosure, Flex, Text, ListItem, Button } from "@chakra-ui/react";
import React from "react";
import Customerdetail from "./Customerdetail";

const Customer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ListItem className="item">
        <Flex className="flex-box">
          <Text>1</Text>
          <Text>nguyễn Văn A</Text>
          <Text>0961454249</Text>
          <Text>Phòng Game</Text>
          <Text>Đang Xử Lý</Text>
          <Text>
            <span className="btn-detail" onClick={onOpen}>Chi Tiết</span>
          </Text>
        </Flex>
        <Customerdetail isOpen={isOpen} onClose={onClose} />
      </ListItem>
    </>
  );
};

export default Customer;
