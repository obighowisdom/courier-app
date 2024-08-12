"use client";
import { Input, Button, Stack, HStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TrackingContext } from "../Context/Context";
import { useRouter } from "next/navigation";

import React from "react";

const Track = () => {
  const [trackID, setTrackID] = useState("");
  const { setTrackingData } = useContext(TrackingContext);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${trackID}`);
      if (!res.ok) {
        throw new Error("failled to get");
      }
      setTrackingData(res.json());

      router.push("/details");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HStack spacing="24px">
      <Input
        className="text-white"
        placeholder="GHT-C65..."
        required
        type="text"
        value={trackID}
        onChange={(event) => setTrackID(event.target.value)}
      />
      <Button
        onClick={handleSubmit}
        className="transition duration-300 ease-in-out hover:bg-gray-2"
      >
        Track..
      </Button>
    </HStack>
  );
};

export default Track;
