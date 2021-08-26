/* eslint-disable no-console */
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
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
