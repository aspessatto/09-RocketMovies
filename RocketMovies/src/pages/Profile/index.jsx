import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiUser, FiMail, FiLock,FiCamera } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText';

export function Profile() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }



  return(
    <Container>
      <header>
        <ButtonText
          title="Voltar" 
          icon={FiArrowLeft} 
          onClick={handleBack}
        />
      </header>
        <Form>
          <Avatar>
            <img src={avatar} alt={`Foto de ${user.name}`} />
            <label htmlFor="avatar">
              <FiCamera />
              <input id="avatar" type="file" onChange={handleChangeAvatar} />
            </label>
          </Avatar>

          <Input icon={FiUser} value={name} placeholder="Nome" type="text" onChange={e => setName(e.target.value)} />
          <Input icon={FiMail} value={email} placeholder="Email" type="text" onChange={e => setEmail(e.target.value)} />
          <Input icon={FiLock} placeholder="Senha atual" type="password" onChange={e => setPasswordOld(e.target.value)} />
          <Input icon={FiLock} placeholder="Nova senha" type="password" onChange={e => setPasswordNew(e.target.value)}/>
          <Button title="Salvar" onClick={handleUpdate} />

        </Form>

    </Container>
  )
}