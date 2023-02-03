import { Flex, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const Customer = () => {
  return <>
 <ListItem cursor={"pointer"}>
  <Flex>
    <Text w={200}>Name</Text>
    <Text w={200}>Sdt</Text>
    <Text>nhu cau</Text>
  </Flex>
 </ListItem>
 
  </>;
};

export default Customer;
