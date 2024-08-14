"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  Badge,
  List,
  ListItem,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Stepper from "@/components/Stepper/index.jsx";
import {useRouter} from 'next/navigation'

const Details = ({
  clientName,
  email,
  state,
  clientCountry,
  trackingID,
  orderID,
  senderName,
  senderTel,
  senderCountry,
  destination,
  orderDate,
  packageWeight,
  packageDesc,
  status,
  delDate,
  mode,
  officer,
  comment,
  map,
}) => {
  const [loader, setLoader] = useState(false);
  const downloadPDF = () => {
    const capture = document.querySelector(".actual-receipt");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("invoice.pdf");
    });
  };

    const router = useRouter()
  return (
    <section className="bg-gradient-to-r from-indigo-200 pt-[70px]  ">
      <Container maxW={"7xl"}>
        <>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <div className="flex w-[100%] flex-col gap-6 overflow-hidden">
                <div>
                  <h2 className="text-2xl text-purple-950 ">
                    Current location
                  </h2>
                  <iframe
                    src={map}
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-7 rounded-md bg-dark-700 p-5">
                  <Stepper status={status} />

                  <TableContainer>
                    <Table variant="striped" colorScheme="red">
                      <TableCaption>Features</TableCaption>
                      <Thead></Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                            <b className="text-purple-900">
                              Officer in Charge:
                            </b>{" "}
                            {officer}
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <b className="text-purple-900">Comment:</b>{" "}
                            {comment}{" "}
                          </Td>
                        </Tr>
                      </Tbody>
                      <Tfoot></Tfoot>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </Flex>
            <div className="actual-receipt">
              <Stack spacing={{ base: 6, md: 10 }}>
                <Box as={"header"}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                  >
                    Tracking Details
                  </Heading>
                  <br />
                  <br />
                  <Text
                    color={useColorModeValue("gray.900", "gray.400")}
                    fontWeight={300}
                    fontSize={"2xl"}
                  >
                    <Text fontSize="xl" fontWeight="bold">
                      Tracking ID: <b>{trackingID}</b>
                      <Badge
                        ml="1"
                        fontSize="0.8em"
                        colorScheme={
                          status === "Pending"
                            ? "red"
                            : status === "En-Route"
                              ? "green"
                              : status === "Delivered"
                                ? "blue"
                                : ""
                        }
                      >
                        {status}
                      </Badge>
                    </Text>
                  </Text>
                </Box>

                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={"column"}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue("gray.200", "gray.600")}
                    />
                  }
                >
                  <VStack spacing={{ base: 4, sm: 6 }}>
                    <TableContainer>
                      <Table variant="striped" colorScheme="teal">
                        <TableCaption>Shipping details</TableCaption>
                        <Thead>
                          <Tr>
                            <Th>Package Info</Th>
                            <Th>Company Info</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>
                              <b>Status:</b> {status}
                            </Td>
                            <Td>Cargo Explore</Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b>Order Id:</b> {orderID}{" "}
                            </Td>
                            <Td>support@cargoexplore.com</Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b>Weight: </b>
                              {packageWeight}{" "}
                            </Td>
                            <Td>
                              {" "}
                              {"  "} 111 W. Ocean Blvd. <br /> Suite 1000 Long Beach,
                              CA 90802
                            </Td>
                          </Tr>
                        </Tbody>
                        <Tfoot></Tfoot>
                      </Table>
                    </TableContainer>
                  </VStack>
                  <Box>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={useColorModeValue("yellow.500", "yellow.300")}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Features
                    </Text>

                    <TableContainer>
                      <Table variant="striped" colorScheme="red">
                        <TableCaption>Features</TableCaption>
                        <Thead></Thead>
                        <Tbody>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">Receiver Name:</b>{" "}
                              {clientName}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">
                                Receiver Country:
                              </b>{" "}
                              {clientCountry}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">Receiver Tel:</b>{" "}
                              {senderTel}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">Receiver Email:</b>{" "}
                              {email}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>
                              <b className="text-purple-900">Description:</b>{" "}
                              {packageDesc}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">Mode:</b> {mode}{" "}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>
                              <b className="text-purple-900">Weight:</b>{" "}
                              {packageWeight}
                            </Td>
                          </Tr>
                          <Tr>
                            {" "}
                            <Td>
                              <b className="text-purple-900">
                                Delivery Address:
                              </b>{" "}
                              {destination}{" "}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">Delivery Date</b>{" "}
                              {delDate}
                            </Td>
                          </Tr>
                          <Tr>
                            {" "}
                            <Td>
                              <b className="text-purple-900">State/Province:</b>{" "}
                              {state}{" "}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">
                                Officer In-Charge
                              </b>{" "}
                              {officer}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">Comment: </b>{" "}
                              {comment}{" "}
                            </Td>
                          </Tr>
                        </Tbody>
                        <Tfoot></Tfoot>
                      </Table>
                    </TableContainer>
                  </Box>
                </Stack>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button
                    rounded={"none"}
                    w={"full"}
                    mt={8}
                    size={"lg"}
                    py={"7"}
                    bg={useColorModeValue("gray.900", "gray.50")}
                    color={useColorModeValue("white", "gray.900")}
                    textTransform={"uppercase"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                    onClick={downloadPDF}
                    disabled={!(loader === false)}
                  >
                    {loader ? (
                      <span>
                        <Spinner />
                      </span>
                    ) : (
                      <span>Download</span>
                    )}
                  </Button>
                </div>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <MdLocalShipping />
                  <Text>cargo-explore</Text>
                </Stack>
              </Stack>
            </div>
          </SimpleGrid>
        </>
      </Container>
    </section>
  );
};

export default Details;
