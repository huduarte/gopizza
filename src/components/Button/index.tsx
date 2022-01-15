import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title, Load, TypeProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
};

export const Button = ({
  title,
  type = "primary",
  isLoading = false,
  ...rest
}: Props): JSX.Element => {
  return (
    <Container type={type} enabled={!isLoading}  {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  );
};
