import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Container, Content, AddMovie } from './styles';
import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { Input } from '../../components/Input'

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  function handlePreview(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search])

  return (
    <Container>
      <Header />
      <Content>
        <div className='section'>
          <h1>Meus filmes</h1>
          <Input type="search" placeholder="Pesquise pelo título" onChange={e => setSearch(e.target.value)} />
          <AddMovie to="/create">
            <FiPlus />
            Adicionar filme
          </AddMovie>
        </div>
        {
         movies.map(movie => (
            <Movie 
              key={String(movie.id)}
              data={movie}
              onClick={() => handlePreview(movie.id)}
            />
          ))
        }

      </Content>
    </Container>
  )
}