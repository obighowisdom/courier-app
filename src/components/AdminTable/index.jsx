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
import Link from "next/link";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import RemoveButton from "../Remove/RemoveButton";

const getUsers = async () => {
  try {
    const res = await fetch("https://www.cargoexplore.com/api/topics", {
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
  const { topics } = await getUsers();

  return (
    <div>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Client Table</TableCaption>
          <Thead>
            <Tr>
              <Th>Tracking ID</Th>
              <Th>Client Name</Th>
              <Th>Email Address</Th>
              <Th>Status</Th>
              <Th>State</Th>
              <Th>Country</Th>

              <Th>Action</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {topics?.map((users, index) => (
              <Tr key={index}>
                <Td>
                  <b className="text-sm dark:text-blue-900">
                    {users.trackingID}
                  </b>
                </Td>
                <Td>
                  {" "}
                  <b className="text-sm dark:text-blue-900">
                    {users.clientName}
                  </b>
                </Td>
                <Td>
                  <b className="text-sm dark:text-blue-900">{users.email}</b>
                </Td>
                <Td>
                  <b className="text-sm dark:text-blue-900">{users.status}</b>
                </Td>
                <Td>
                  {" "}
                  <b className="text-sm dark:text-blue-900">{users.state}</b>
                </Td>
                <Td>
                  <b className="text-sm dark:text-blue-900">
                    {users.clientCountry}
                  </b>
                </Td>
                <Td>
                  {" "}
                  <div className="flex gap-2">
                    <RemoveButton id={users._id} />
                    <Link href={`/editClient/${users._id}`}>
                      <MdEditSquare color="blue" />
                    </Link>{" "}
                  </div>
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
