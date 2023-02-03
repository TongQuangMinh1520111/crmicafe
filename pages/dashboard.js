import React from "react";
import Layout from "@/components/Layout";
import {
  Container,
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";
import ListCustomers from "@/components/customer/ListCustomers";

const Dashboard = () => {
  return (
    <Layout title="Home page">
      <Container maxW="1200px">
        <ListCustomers />
       <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} >This is Test</Text>
      </Container>
    </Layout>
  );
};

export default Dashboard;