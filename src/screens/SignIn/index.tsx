import { Input } from "@components/Input";
import React from "react";

import { Container } from "./styles";

export const SignIn = (): JSX.Element => {
  return (
    <Container>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />

      <Input placeholder="Senha" type="secondary" secureTextEntry />
    </Container>
  );
};
