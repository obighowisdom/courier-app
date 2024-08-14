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
} from "@chakra-ui/react";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { FaRoute } from "react-icons/fa6";

const steps = [
  { title: "Pending", description: "Your Package is Pending" },
  { title: "En-Route", description: "Your Package is on the way" },
  { title: "Delivered", description: "Your Package successfully delivered" },
];

export default function Example({ status }) {
  const { activeStep } = useSteps({
    index:
      status === "Pending"
        ? 1
        : status === "En-Route"
          ? 2
          : status === "Delivered"
            ? 3
            : 1,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle> {step.title}</StepTitle>
            <StepDescription>
              {" "}
              <b className="text-green"> {step.description}</b>
            </StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
