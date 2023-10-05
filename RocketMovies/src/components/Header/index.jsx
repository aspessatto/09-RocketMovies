import { Container, Profile } from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import avatarPlaceholder from '../../../assets/avatar_placeholder.svg';

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <h1><Link to="/">RocketMovies</Link></h1>



      <div className='profile'>
        <div className="username">
          <strong>{user.name}</strong>
          <span><a onClick={handleSignOut}>sair</a></span>
        </div>
        <Profile to="/profile">
          <img src={avatarUrl} alt={`Foto de ${user.name}`} />
        </Profile>
      </div>
    </Container>
  )
}