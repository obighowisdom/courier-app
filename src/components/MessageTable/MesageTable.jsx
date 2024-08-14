import React from "react";
import {
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

const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/contact", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get clients");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading clients: ", error);
  }
};

const Index = async () => {
  const { contact } = await getUsers();

  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Messages</TableCaption>
          <Thead>
            <Tr>
              <Th>Client Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Message</Th>

              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {contact?.map((users, index) => (
              <Tr key={index}>
                <Td>
                  <b className="text-sm dark:text-blue-900">{users.name}</b>
                </Td>
                <Td>
                  {" "}
                  <b className="text-sm dark:text-blue-900">{users.email}</b>
                </Td>
                <Td>
                  <b className="text-sm dark:text-blue-900">{users.phone}</b>
                </Td>
                <Td>
                  <b className="text-sm dark:text-blue-900">{users.message}</b>
                </Td>
              </Tr>
            ))}
          </Tbody>{" "}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Index;
