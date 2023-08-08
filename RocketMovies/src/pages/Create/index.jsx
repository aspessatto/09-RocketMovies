import { Container, Form } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { MovieItem } from '../../components/MovieItem';


export function Create() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              Voltar
              </Link>
            <Section title="Novo filme" />
          </header>
          <div>
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <TextArea placeholder="Observações" />
          <h2>Marcadores</h2>
          <div className="tags">
            <MovieItem value="Drama" />
            <MovieItem placeholder="Novo marcador" isnew />
          </div>
          <div className="buttons">
            <button className="delete">
              Excluir filme
            </button>
            <Button title="Salvar alterações" />
          </div>




        </Form>
      </main>
    </Container>
  )
}