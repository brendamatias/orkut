import Image from 'next/image';
import { Container, Content, Intro } from './styles';
import logo from '../../assets/logo.png';

const Login = () => (
  <Container>
    <div>
      <Intro>
        <div className="logo">
          <Image src={logo} alt="Orkut Logo" />
        </div>

        <p>
          <strong>Conecta-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas
        </p>
        <p>
          <strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades
        </p>
        <p>
          <strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar
        </p>
      </Intro>

      <Content>
        <div className="form">
          <span>Acesse o orkut com a sua conta</span>

          <form>
            <label>
              E-mail:
              <input type="email" />
            </label>
            <label>
              Senha:
              <input type="password" />
            </label>
            <label>
              <input type="checkbox" />
              Salvar as minhas informações neste computador.
            </label>

            <span>Não use em computadores públicos. [?]</span>

            <button type="submit">Login</button>
          </form>

          <div className="forgotPassword">
            <a href="#">Não consegue acessar sua conta?</a>
          </div>
        </div>

        <div className="signUp">
          <span>Ainda não é membro?</span>
          <a href="#">Entrar Já</a>
        </div>
      </Content>
    </div>

    <footer>
      © 2017 Orkut - <a href="#">Sobre o Orkut</a> - <a href="#">Centro de segurança</a> - <a href="#">Privacidade</a> -{' '}
      <a href="#">Termos</a>
    </footer>
  </Container>
);

export default Login;
