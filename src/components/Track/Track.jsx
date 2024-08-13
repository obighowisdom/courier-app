"use client";
import {
  Input,
  Button,
  Stack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { Spinner } from "@chakra-ui/react";
import Details from "../Details/Details";
import React from "react";

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

const Track = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { topics } = await getUsers();

    const filteredData = topics.filter((item) => item.trackingID === id);
    if (filteredData) {
      setData(filteredData);
      setLoading(false);
      setShowDetails(true);
    } else if (filteredData.trackingID !== id) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <HStack spacing="24px">
          <Input
            className="text-white"
            placeholder="GHT-C65..."
            required
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          {loading ? (
            <Button className="transition duration-300 ease-in-out hover:bg-gray-2">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="transition duration-300 ease-in-out hover:bg-gray-2"
            >
              Track..
            </Button>
          )}
        </HStack>
        <h4
          style={{ display: error ? "block" : "none" }}
          className=" mt-3 text-[16px] font-bold text-red "
        >
          Location not available for this ID
        </h4>
      </div>

      <Modal size="100%" isOpen={showDetails} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {data?.map((item, index) => {
            const {
              clientName,
              email,
              state,
              clientCountry,
              trackingID,
              orderID,
              SenderName,
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
            } = item;
            return (
              <Details
                clientName={clientName}
                email={email}
                state={state}
                clientCountry={clientCountry}
                trackingID={trackingID}
                orderID={orderID}
                senderName={SenderName}
                senderTel={senderTel}
                senderCountry={senderCountry}
                destination={destination}
                orderDate={orderDate}
                packageWeight={packageWeight}
                packageDesc={packageDesc}
                status={status}
                delDate={delDate}
                mode={mode}
                officer={officer}
                comment={comment}
                map={map}
              />
            );
          })}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Track;
