import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import React from "react";

interface Person {
  bgcolor: string;
  name?: string;
}

const styles = {
  ":hover": {
    boxShadow: 6,
  },
  color: {
    xs: "green",
    md: "red",
  },
  backgroundColor: "secondary.main",
};
// backgroundColor: (theme:any) => theme.palette.secondary.main,

function App({ name, ...demas }: Person) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Typography sx={styles} variant="h1" {...demas}>
      Hello World {name} {matches.toString()}
    </Typography>
  );
}

App.defaultProps = {
  name: "Pablo",
};

export default App;
