import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import brandImg from "@assets/brand.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import {
  Container,
  Content,
  Title,
  Brand,
  ForgostPasswordLabel,
  ForgotPasswordButton,
} from "./styles";
import { useAuth } from "@hooks/auth";

export const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogging, signIn } = useAuth();

  const handleSign = async () => {
    await signIn(email, password);
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content>
          <Brand source={brandImg} />

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />

          <ForgotPasswordButton>
            <ForgostPasswordLabel>Esqueci minha senha</ForgostPasswordLabel>
          </ForgotPasswordButton>

          <Button
            title="Entrar"
            type="secondary"
            isLoading={isLogging}
            onPress={handleSign}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};
