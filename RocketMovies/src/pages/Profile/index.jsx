import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock,FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft/>
          Voltar
        </Link>
      </header>

        <Form>
          <Avatar>
            <img src="https://github.com/aspessatto.png" alt="Foto do usuário" />
            <label htmlFor="avatar">
              <FiCamera />
              <input id="avatar" type="file" />
            </label>
          </Avatar>

          <Input icon={FiUser} placeholder="Nome" type="text" />
          <Input icon={FiMail} placeholder="Email" type="text" />
          <Input icon={FiLock} placeholder="Senha atual" type="password" />
          <Input icon={FiLock} placeholder="Nova senha" type="password" />
          <Button title="Salvar" />

        </Form>

    </Container>
  )
}