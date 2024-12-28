import { styled } from "styled-components";
import { useContext, useRef } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import search from "/iconos/search.png";

const ContainerEstilizado = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 566px;
`;

const CampoTextoEstilizado = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 100%;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconoLupa = styled.img`
  margin-left: -117px; /* Ajusta este valor según sea necesario */
  width: 38px;
  height: auto;
  max-height: 38px;
  object-fit: contain;
`;

const CampoTexto = () => {
  const cajaConsulta = useRef(null)
  const { dispatch } = useContext(GlobalContext);
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado ref={cajaConsulta} type="text" placeholder="Busca una foto"/>
      <IconoLupa src={search} alt="ícono de lupa" onClick={() => {
        dispatch({ type: "SET_CONSULTA", payload: cajaConsulta.current.value });

      }}/>
    </ContainerEstilizado>
  );
};

export default CampoTexto;

