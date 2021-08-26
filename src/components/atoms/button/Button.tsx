import React from "react";
import MUIButton, { ButtonProps } from "@material-ui/core/Button";

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
