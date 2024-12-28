import styled from "styled-components";
import GlobalStyles from "./componentes/resets";
import Header from "./componentes/header";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import banner from "./assets/banner.png";
import Galeria from "./componentes/galeria";
import Footer from "./componentes/footer";
import ModalZoom from "./componentes/ModalZoom";
import TagsComponent from "./componentes/galeria/tags";

import GlobalContextProvider from "./context/GlobalContext";

const FondoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 1780px;
  margin: 16px auto;
  padding: 0 16px;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
  }
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Sidebar = styled(BarraLateral)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ResponsiveBanner = styled(Banner)`
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

function App() {
  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <GlobalContextProvider>
          <Header />
          <AppContainer>
            <MainContainer>
              <Sidebar />
              <ResponsiveBanner
                texto="La galería más completa del espacio"
                backgroundImage={banner}
              />
            </MainContainer>
            <ContenidoGaleria>
              <TagsComponent />
              <Galeria />
            </ContenidoGaleria>
          </AppContainer>
          <ModalZoom />
          <Footer />
        </GlobalContextProvider>
      </FondoGradiente>
    </>
  );
}

export default App;