import { Container, Profile } from './styles';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <h1><Link to="/">RocketMovies</Link></h1>
      <Input type="search" placeholder="Pesquise pelo título" />
      <Profile to="/profile">
        <div>
          <strong>Anderson Spessatto</strong>
          <span><a href="/">sair</a></span>
        </div>
        <img src="https://github.com/aspessatto.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}