import React from "react";
import MUIButton, { ButtonProps } from "@mui/material/Button";

export default function Button({
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <MUIButton variant="outlined" {...rest}>
      {children}
    </MUIButton>
  );
}
