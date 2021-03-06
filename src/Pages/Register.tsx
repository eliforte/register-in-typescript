import React from 'react';
import Input from '../components/input';
import { FormStyle, InputContainerStyled } from './style';

const Register: React.FC = () => {
  return (
    <FormStyle>
      <h2>Cadastre-se</h2>
      <p>Preencha com seus dados para concluir os cadastro</p>
      <InputContainerStyled>
        <Input type="text" name="first-name-input" message="Nome" />
        <Input type="text" name="surname-input" message="Sobrenome" />
        <Input type="date" name="birthdate-input" message="Data de Nascimento" />
        <Input type="text" name="cpf-input" message="CPF" />
        <Input type="text" name="user-input" message="Usuário" />
        <Input type="password" name="password-input" message="Senha" />
      </InputContainerStyled>
      <label htmlFor="terms-and-politics">
        <input type="checkbox" name="terms-and-politics" id="terms-and-politics" required/>
        Aceitar termos e condições
      </label>
      <button type="submit">Registrar</button>
    </FormStyle>
  )
}

export default Register;
