import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 20px;
  display: flex;
  justify-content: space-between;
  img {
    width: 212px;
  }
`;

const Header = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagenes/logo.png" alt="Logo" />
      <CampoTexto />
    </HeaderEstilizado>
  );
};

export default Header;
