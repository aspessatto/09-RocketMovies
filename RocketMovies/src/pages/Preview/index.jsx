import { Container, Content, UserInfo } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'

import { FiArrowLeft, FiClock } from 'react-icons/fi'

export function Preview() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
         <ButtonText title="Voltar" icon={FiArrowLeft} />
         <div>
          <Section title="Interestellar" />
          <Stars />
         </div>
         <UserInfo>
          <img src="https://github.com/aspessatto.png" alt="Foto do usuário" />
          <span>Por Anderson Spessatto</span>
          <FiClock />
          <span>03/08/2023 às 15:43</span>
         </UserInfo>
         <Tag title="Ficção científica" />
         <Tag title="Drama" />
         <Tag title="Família" />
         <p>Interestelar é o filme mais ambicioso de Christopher Nolan. E olha que estamos falando do cara que fez a trilogia do O Cavaleiro das Trevas e A Origem. Em seu novo projeto, o diretor decidiu realizar um longa sobre o homem, abordando sua natureza devastadora, mas também exploradora e empreendedora. 
         <br/><br/>
         Fã de 2001 - Uma Odisséia no Espaço, Nolan faz uma homenagem ao cinema de Stanley Kubrick e à obra de Arthur C. Clarke, mas o espectador deve evitar entrar em maiores comparações entre as produções, afinal estamos falando de um dos maiores clássicos da história da ficção científica. Interestelar é um filme que merece escrever sua própria história, sem ficar sofrendo com comparações inadequadas.
         <br/><br/>
         Por outro lado, é difícil não lembrar de Kubrick diante da visão de futuro criada por Chris Nolan e pelo irmão Jonathan Nolan. Pode-se dizer até que o futuro de Nolan aqui é mais ambicioso do que o visto em 2001, para um filme de 1968.
         <br/><br/>
         Em um futuro não determinado, mas também não muito distante, o engenheiro espacial Cooper (Matthew McConaughey) trabalha como fazendeiro cultivando milho para alimentar a população mundial. A maioria dos alimentos da Terra já acabaram e as plantações que restam são constantemente atacadas por pestes e tempestades de poeira. Ao lado dos filhos e do sogro (vivido pelo ótimo John Lithgow), ele vive simplesmente, mas se incomoda com o fato da humanidade ter se contentado em sobreviver e esquecido seu lado empreendedor.
         <br/><br/>
         A primeira parte do filme busca construir as relações humanas do protagonista, que embarca em uma jornada importante que pode ser a última esperança para a população do planeta. Ele é chamado para liderar uma missão espacial que busca explorar novos planetas que podem substituir a Terra. Não vou entrar em mais detalhes sobre a trama para não estragar a experiência de ninguém. Temos reviravoltas importantes e algumas surpresas.
         <br/><br/>
         A montagem de Lee Smith merece elogios, principalmente pelo fato de conseguir fazer o filme fluir bem nos momentos mais reflexivos e mesmo contando com quase três horas de duração. A presença de depoimentos logo no início do filme, sugerindo um falso documentário também é interessante, fazendo uma ligação boa com o desfecho.
         <br/><br/>
         A direção de arte minuciosa e o ambicioso design de produção colocam o filme como um marco da ficção científica na Hollywood do século XXI, principalmente por tudo (ou melhor, quase tudo) parecer possível, como os robôs que são claras referências ao monolito de 2001, num ótimo trabalho também da equipe de efeitos visuais. A criação do som também é primorosa, lembrando muito o recente Gravidade, especialmente nos momentos em que investe no completo silêncio do espaço.
         <br/><br/>
         Parceiro tradicional de Nolan, o compositor Hans Zimmer, que brilhou em A Origem, não se sai tão bem. A trilha tem momentos bonitos e contemplativos, mas também soa exagerada em outras sequências. O mesmo se pode dizer da fotografia de Hoyte Van Hoytema, que consegue ser deslumbrante por 90% do tempo, mas que gasta outros 10% com flares (com luz sendo jogada diretamente na lente da câmera). Talvez tenha sido uma homenagem dos Nolan ao amigo J.J. Abrams, com quem Jonathan trabalhou em Person Of Interest. 
         <br/><br/>
         Interstellar (no original) aborda temas como o desperdício, abandono, solidão e desespero. É um filme sobre humanidade, retratando a capacidade do homem de ser devastador, mesquinho e ao mesmo tempo sonhador e iluminado. Também é um longa sobre o nosso lugar, insignificante, dentro do universo, sendo quase que uma declaração de amor do diretor à ciência.
         <br/><br/>
         Apesar disso, não se trata de uma obra completamente empírica e fundamentada. O sentimento também faz parte das conquistas do homem e aqui é tratado como algo fundamental para a narrativa. Neste sentido, o filme oferece algumas cenas realmente emocionantes. Do ponto de vista da ação, também conta com momentos marcantes, que irão arrepiar o espectador.
         <br/><br/>
         Matthew McConaughey tem uma atuação incrível. Em determinado momento, quando encontra problemas no espaço, a câmera foca apenas em seu rosto, fazendo com que o espectador tenha noção do quão grave é a situação apenas por sua expressão. Ele tem uma química muito boa com a jovem atriz Mackenzie Foy, que vive a filha de Cooper, Murph, quando criança. A garota está incrível, nos fazendo esquecer que um dia foi a filha de Bella Swan e Edward Cullen em A Saga Crepúsculo: Amanhecer.
         <br/><br/>
         Jessica Chastain, sempre ótima, vive Murph quando adulta, enquanto que Anne Hathaway volta a ter uma grande atuação, mostrando força e naturalidade como a Dra. Brand. O elenco conta ainda com as presenças de Michael Caine, Casey Affleck, Ellen Burstyn, Topher Grace, Wes Bentley e Matt Damon.
         <br/><br/>
         Talvez gaste um pouco de tempo de mais em sua primeira parte e sofra com o modelo hollywoodiano de criar soluções simples, mas é realmente um filme especial. Quem é fã de ficção científica pode se preparar para muitas emoções..</p>

        </Content>
      </main>

    </Container>
  )
}