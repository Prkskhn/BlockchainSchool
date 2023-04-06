import { Box } from "@chakra-ui/react";
import C from "./C";
import React from "react";

function B() {
  return (
    <React.Fragment>
      <Box w={100} h={100} bgColor="yellow.500">
        B
      </Box>
      <C />
    </React.Fragment>
  );
}

export default B;
