import { Container, Form, Background } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir. </p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} placeholder="Nome" type="text" />   
        <Input icon={FiMail} placeholder="E-mail" type="text" />   
        <Input icon={FiLock} placeholder="Senha" type="password" />    
        <Button title="Cadastrar" /> 
        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
          </Link>
      </Form>

      <Background />


    </Container>
  )
}