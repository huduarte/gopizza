import React from "react";
import { TextInputProps } from "react-native";

import { Container, TypeProps } from "./styles";

type Props = TextInputProps & {
  type?: TypeProps;
};

export const Input = ({ type = "primary", ...rest }: Props): JSX.Element => {
  return <Container type={type} {...rest} />;
};
