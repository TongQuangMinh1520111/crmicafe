import React from "react";
import Layout from "@/components/Layout";
import {
  Container,
  Heading,
  Center,
} from "@chakra-ui/react";
import ListCustomers from "@/components/customer/ListCustomers";

const Dashboard = () => {
  return (
    <Layout title="Home page">
      <Container maxW="1200px">
      <Center mb="60px">
        <Heading fontSize={{base:"25px",md:"30px"}}>Dữ liệu khách hàng</Heading>
      </Center>
        <ListCustomers />
      </Container>
    </Layout>
  );
};

export default Dashboard;
