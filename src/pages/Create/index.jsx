import { Container, Form } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { MovieItem } from '../../components/MovieItem';

import { useState } from 'react';
import { api } from '../../services/api';


export function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {

    if(!title) {
      return alert("Digite o título da nota")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar. Clique no sinal + ou apague.")
    }

    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    });

    alert("Filme cadastrado com sucesso");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText
              title="Voltar" 
              icon={FiArrowLeft} 
              onClick={handleBack}
            />
            <Section title="Novo filme" />
          </header>
          <div>
            <Input placeholder="Título" onChange={e => setTitle(e.target.value)}/>
            <Input placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)}/>
          </div>
          <TextArea placeholder="Observações" onChange={e => setDescription(e.target.value)} />
          <h2>Marcadores</h2>
          <div className="tags">
            {
              tags.map((tag, index) => (
                <MovieItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)} />
              ))
            }
            <MovieItem
              placeholder="Novo marcador"
              isnew
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag} />
          </div>
          <div className="buttons">
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </div>
        </Form>
      </main>
    </Container>
  )
}