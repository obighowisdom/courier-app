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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Stepper from "@/components/Stepper/index.tsx";
import { useContext } from "react";
import { TrackingContext } from "../../../components/Context/Context";

export default function Simple() {
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

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
                  <h2 className="text-2xl text-purple-950 ">Current location</h2>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208796.20093401696!2d-118.04746814007211!3d35.14562992442187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c229d213a60943%3A0x3458deb43bf50b32!2sCalifornia%20City%2C%20CA%2C%20USA!5e0!3m2!1sen!2sng!4v1723210589154!5m2!1sen!2sng"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-7 rounded-md bg-dark-700 p-5">
                  <Stepper />

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
                            Dell 345 corei5 3455GB SSD ...
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <b className="text-purple-900">Comment:</b> Air
                            Freight{" "}
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
                      Tracking ID: <b>GHX-RGH-123-3</b>
                      <Badge ml="1" fontSize="0.8em" colorScheme="green">
                        Delivered
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
                            <Th>Receiver Info</Th>
                            <Th>Sender Info</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>
                              <b>Status:</b> Delivered
                            </Td>
                            <Td>Havafinan Gregory </Td>
                            <Td>Justina Wint </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b>Order Id:</b> CE-23454{" "}
                            </Td>
                            <Td>+103 765 7888</Td>
                            <Td>+103 765 7888</Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b>Weight: </b>
                              3546.89kg{" "}
                            </Td>
                            <Td>Ohio USA</Td>
                            <Td>Holland, Netherlands</Td>
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
                              <b className="text-purple-900">Description:</b>{" "}
                              Dell 345 corei5 3455GB SSD ...
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">Mode:</b> Air
                              Freight{" "}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>
                              <b className="text-purple-900">Weight:</b> 50.00kg
                            </Td>
                          </Tr>
                          <Tr>
                            {" "}
                            <Td>
                              <b className="text-purple-900">
                                Delivery Address:
                              </b>{" "}
                              234 Olando PMB X5674667{" "}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">Delivery Date</b>{" "}
                              23 October 2024
                            </Td>
                          </Tr>
                          <Tr>
                            {" "}
                            <Td>
                              <b className="text-purple-900">State/Province:</b>{" "}
                              USA PMB X5674667{" "}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">
                                Officer In-Charge
                              </b>{" "}
                              Davidson Ryan
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>
                              <b className="text-purple-900">Comment: </b>{" "}
                              Picked up for delivery{" "}
                            </Td>
                          </Tr>
                        </Tbody>
                        <Tfoot></Tfoot>
                      </Table>
                    </TableContainer>
                  </Box>
                </Stack>

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
                  {loader ? <span>Downloading</span> : <span>Download</span>}
                </Button>

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
}
