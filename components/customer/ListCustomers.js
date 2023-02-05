import { Center, Heading, Text, List, ListItem, Flex } from "@chakra-ui/react";
import React from "react";
import Customer from "./Customer";

const ListCustomers = () => {
  return (
    <div>
      <Center mb="40px">
        <Heading>Dữ liệu khách hàng</Heading>
      </Center>
      <List className="list-customer">
        <ListItem className="item">
          <Flex className="flex-box box-ttl">
            <Text>STT</Text>
            <Text>Họ Và Tên</Text>
            <Text>Số Điện Thoại</Text>
            <Text>Nhu Cầu</Text>
            <Text>Trạng Thái</Text>
            <Text></Text>
          </Flex>
        </ListItem>
        <Customer />
      </List>
    </div>
  );
};

export default ListCustomers;
