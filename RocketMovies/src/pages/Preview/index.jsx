import { Container, Content, UserInfo } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'
import { FiArrowLeft, FiClock } from 'react-icons/fi'

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../../assets/avatar_placeholder.svg';

export function Preview() {
  const { user } = useAuth();
  const params = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return (
    <Container>
      <Header />

    { data &&
      <main>
        <Content>
         <ButtonText
          icon={FiArrowLeft}
          title="Voltar"
          onClick={handleBack}
         />
         <div>
          <Section title={data.title} />
          <Stars />
         </div>
         <UserInfo>
          <img src={avatarUrl} alt={`Foto de ${user.name}`} />
          <span>Por {user.name}</span>
          <FiClock />
          <span>{data.created_at}</span>
         </UserInfo>
           { 
            data.tags &&
              data.tags.map(tag => (
                <Tag 
                  key={String(tag.id)}
                  title={tag.name}
                 />
              ))
           }
         <p>
          {data.description}
         </p>
        </Content>
        <Button title="Excluir filme" onClick={handleRemove} />
      </main>
    }
    
    </Container>
    
  )
}