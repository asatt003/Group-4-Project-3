import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src="data:image/png;base64,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" alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
