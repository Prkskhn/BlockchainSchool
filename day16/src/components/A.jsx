import { Box } from "@chakra-ui/react";
import B from "./B";
import React from "react";

function A() {
  return (
    <React.Fragment>
      {" "}
      <Box w={100} h={100} bgColor="red.500">
        A
      </Box>
      <B />
    </React.Fragment>
  );
}

export default A;
