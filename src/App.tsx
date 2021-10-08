/* eslint-disable no-console */
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React from "react";
import Button from "components/atoms/button/Button";

interface Person {
  bgcolor: string;
  name?: string;
}

const styles = {
  ":hover": {
    boxShadow: 6,
  },
  color: {
    xs: "yellow",
    md: "blue",
  },
};

function App({ name, ...demas }: Person) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Button
        onClick={(event) => {
          event.stopPropagation();
          console.log("Zas");
        }}
      >
        Hello
      </Button>

      <Typography sx={styles} variant="h1" {...demas}>
        Hello World {name} {matches.toString()}
      </Typography>
    </>
  );
}

App.defaultProps = {
  name: "Pablo",
};

export default App;
