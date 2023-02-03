import { Container, Flex, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import Customer from "./Customer";

const ListCustomers = () => {
  return (
    <div>
      <Container maxW={900} m="0 auto">
        <Flex fontSize={20}>
          <Text w={200} fontWeight="bold">
            Name
          </Text>
          <Text w={200} fontWeight="bold">
            Sdt
          </Text>
          <Text>nhu cau</Text>
        </Flex>
        <List>
          <Customer />
        </List>
      </Container>
    </div>
  );
};

export default ListCustomers;
