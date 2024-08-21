"use client";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { CgTrack } from "react-icons/cg";
import { GiConfirmed } from "react-icons/gi";
import { VscCompassActive } from "react-icons/vsc";
import { Spinner } from "@chakra-ui/react";

const getUpdate = async () => {
  try {
    const res = await fetch("https://www.cargoexplore.com/api/update", {
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

const Example = ({ trackingID }) => {
  const [show, setShow] = useState(false);

  const [track, setTrack] = useState([]);

  const { activeStep } = useSteps({
    index: 1,
    count: track?.length,
  });
  const showSummary = async () => {
    const { update } = await getUpdate();

    const filteredData = update.filter(
      (item) => item.trackingID === trackingID,
    );
    if (filteredData) {
      setTrack(filteredData);
      setShow(!show);
    }
  };

  return (
    <div>
      <div className="mb-3 flex-wrap items-center justify-between">
        <h2 className="font-bold uppercase">Summary</h2>
        <div className="my-3">
          <div className="my-4">
            <p className="text-[16px] font-[400] ">DELIVERY STATUS</p>
            <p className="text-[14px] font-bold text-blue-950">Pending</p>
          </div>

          <div>
            <Link className="text-blue" href="/contact">
              Report missing package
            </Link>
          </div>
          <div className="my-4">
            <h2 className="text-[16px] font-[600]">TRACKING ID</h2>
            <p className="text-[14px] font-bold text-blue">{trackingID}</p>
          </div>
        </div>
      </div>
      <div
        style={{ display: show === true ? "none" : "block" }}
        className="my-4"
      >
        <Button onClick={showSummary}>Show Current Route</Button>
      </div>
      <div
        style={{ display: show === true ? "block" : "none" }}
        className="my-4"
      >
        <Button onClick={()=> setShow(!show)}>Hide Current Route</Button>
      </div>
      <div
        style={{ display: show === true ? "block" : "none" }}
        className="my-4"
      >
        <Stepper
          index={activeStep}
          orientation="vertical"
          height="400px"
          gap="0"
        >
          {track?.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<GiConfirmed color="red" />}
                  incomplete={<GiConfirmed color="red" />}
                  active={<GiConfirmed color="red" />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle className="uppercase"> {step.title}</StepTitle>
                <StepDescription>
                  {" "}
                  <b className="text-green"> {step.company}</b>
                </StepDescription>
                <div className="flex items-center gap-2 ">
                  <p className="text-[14px] font-bold text-black">
                    {step.date}
                  </p>
                  <p className="text-[14px] font-bold text-black">
                    {step.time}
                  </p>
                </div>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default Example;
