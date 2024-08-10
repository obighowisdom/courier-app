"use client";
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

import { MdEditSquare } from "react-icons/md";
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const index = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const [show, setShow] = useState(false);

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
            <Tr>
              <Td>
                <b className="text-sm dark:text-blue-900">millimetres (mm)</b>
              </Td>
              <Td>
                {" "}
                <b className="text-sm dark:text-blue-900">millimetres (mm)</b>
              </Td>
              <Td>
                <b className="text-sm dark:text-blue-900">millimetres (mm)</b>
              </Td>
              <Td>
                <b className="text-sm dark:text-blue-900">millimetres (mm)</b>
              </Td>
              <Td>
                {" "}
                <b className="text-sm dark:text-blue-900">millimetres (mm)</b>
              </Td>
              <Td>
                <b className="text-sm dark:text-blue-900">millimetres (mm)</b>
              </Td>
              <Td>
                {" "}
                <button onClick={() => setShow(!show)}>
                  <MdEditSquare color="blue" />
                </button>{" "}
              </Td>
            </Tr>
          </Tbody>{" "}
          <MdEditSquare color="blue" />
        </Table>
      </TableContainer>
      <div
        style={{ display: show === false ? "none" : "" }}
        className="absolute right-0 top-0 z-50 flex h-[100vh] w-full items-center justify-center overflow-hidden
                 backdrop-blur "
      >
        <div className="h-[600px] w-[500px]  overflow-scroll rounded-md bg-white p-8">
          <form>
            <div className="flex flex-wrap items-center justify-between">
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+885 1254 5211 552"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Email Address*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  State*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>

              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Client Country*
                </label>
                <Select
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  options={options}
                  value={value}
                  onChange={changeHandler}
                />
              </div>

              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  tracking ID*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Order ID*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Sender's Name*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Sender's Tel*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Sender's Country*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>

              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Destination*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>

              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Ordered Date*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Package Weight*
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="80kg"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Package Description*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Status*
                </label>
                <select
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  name=""
                  id=""
                >
                  <option value="Pending">Pending</option>
                  <option value="En-Route">En-Route</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Expected Delivery Date*
                </label>
                <input
                  type="date"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Freight*
                </label>
                <select
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  name=""
                  id=""
                >
                  <option value="Air">Air</option>
                  <option value="Sea">Sea</option>
                  <option value="Land">Land</option>
                  <option value="Train">Train</option>
                </select>
              </div>

              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Officer-Incharge*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Officer's Comment*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Map Location*
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
            </div>

            <div className="mb-0 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
              >
                Send
              </button>
              <button
                onClick={() => setShow(!show)}
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-red-950 px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
