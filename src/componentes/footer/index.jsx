import { styled } from "styled-components";

const FooterEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 22px;
  box-sizing: border-box;
`;

const IconoContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 32px;
  }
`;

const FooterTexto = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
`;

function Footer() {
  return (
    <FooterEstilizado>
      <IconoContainer>
        <li>
          <a
            href="https://x.com/DanielA13784385"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/imagenes/redes/twitter.svg" alt="icono de X" />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/arizamelquisedec/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/imagenes/redes/instagram.svg" alt="icono de instagram" />
          </a>
        </li>
      </IconoContainer>
      <FooterTexto>Desarrollado por &reg;Daniel Ariza y Alura.</FooterTexto>
    </FooterEstilizado>
  );
}

export default Footer;
