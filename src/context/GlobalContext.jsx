import React, { createContext, useEffect, useReducer } from "react";
export const GlobalContext = createContext();

const InitialState = {
  consulta: "",
  fotosGaleria: [],
  fotoSeleccionada: null,
  modalAbierto: false,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONSULTA":
      return { ...state, consulta: action.payload };
    case "SET_FOTOS_GALERIA":
      return { ...state, fotosGaleria: action.payload };
    case "SET_FOTO_SELECCIONADA":
      return {
        ...state,
        fotoSeleccionada: action.payload,
        modalAbierto: action.payload != null ? true : false,
      };
    case "ALTERNAR_FAVORITO":
      const fotosGaleria = state.fotosGaleria.map((foto) => {
        return {
          ...foto,
          favorita:
            foto.id === action.payload.id
              ? !action.payload.favorita
              : foto.favorita,
        };
      });
      if (action.payload.id === state.fotoSeleccionada?.id) {
        return {
          ...state,
          fotosGaleria: fotosGaleria,
          fotoSeleccionada: {
            ...state.fotoSeleccionada,
            favorita: !state.fotoSeleccionada.favorita,
          },
        };
      } else {
        return {
          ...state,
          fotosGaleria: fotosGaleria,
        };
      }

    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://my-json-server.typicode.com/Nogunaga/apigalactica/fotos");
      const data = await res.json();
      const updatedData = data.map(foto => ({
        ...foto,
        path: `${window.location.origin}${foto.path}` // Ajusta la ruta de las imágenes
      }));
     
      dispatch({ type: "SET_FOTOS_GALERIA", payload: updatedData });
    };
    setTimeout(() => getData(), 5000);
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;