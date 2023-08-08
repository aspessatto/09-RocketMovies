import { Container, Content, AddMovie } from './styles';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <div>
          <h1>Meus filmes</h1>
          <AddMovie to="/create">
            <FiPlus />
            Adicionar filme
          </AddMovie>
        </div>
          <Movie data={{
            title: 'Interestellar',
            tags: [
              {id:'1', name: 'Ficção científica'},
              {id:'2', name: 'Drama'},
              {id:'3', name: 'Família'}
            ] }} />
          <Movie data={{
            title: 'Interestellar',
            tags: [
              {id:'1', name: 'Ficção científica'},
              {id:'2', name: 'Drama'},
              {id:'3', name: 'Família'}
            ] }} />
          <Movie data={{
            title: 'Interestellar',
            tags: [
              {id:'1', name: 'Ficção científica'},
              {id:'2', name: 'Drama'},
              {id:'3', name: 'Família'}
            ] }} />

      </Content>



    </Container>
  )
}